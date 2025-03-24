import prisma from "@/components/static/prisma";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
// import { generateVerificationtokenbyemail } from "./some-actions/generateverificationtokenbtemail";
// import { sendVerificationEmail } from "./some-actions/mail";
import { NextResponse } from "next/server";
import type { Adapter } from "next-auth/adapters";

const adapter = PrismaAdapter(prisma);
export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = credentials;
          const user = await prisma.user.findUnique({
            where: {
              email: email as string,
            },
          });

          if (!user) {
            return null;
          }
          const isPasswordCorrect = password === user.password;
          if (!isPasswordCorrect) {
            return null;
          }
          // if (!user.emailVerified) {
          //   const verifyToken = await generateVerificationtokenbyemail(
          //     email as string
          //   );
          //   await sendVerificationEmail(email as string, verifyToken.token);
          //   return null;
          // }

          return user;
        } catch (error) {
          console.error("Auth Error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    error: "/error?error=auth_failed",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email as string },
        });

        if (existingUser) {
          await prisma.account.upsert({
            where: {
              provider_providerAccountId: {
                provider: "google",
                providerAccountId: account.providerAccountId,
              },
            },
            update: {},
            create: {
              userId: existingUser.id,
              provider: "google",
              providerAccountId: account.providerAccountId,
              type: account.type,
              access_token: account.access_token,
              expires_at: account.expires_at,
              id_token: account.id_token,
              scope: account.scope,
              token_type: account.token_type,
            },
          });
        } else {
          await prisma.user.create({
            data: {
              email: user.email as string,
              name: user.name || "New User",
              image: user.image as string,
              password: "",
              accounts: {
                create: {
                  provider: "google",
                  providerAccountId: account.providerAccountId,
                  type: account.type,
                  access_token: account.access_token,
                  expires_at: account.expires_at,
                  id_token: account.id_token,
                  scope: account.scope,
                  token_type: account.token_type,
                },
              },
            },
          });
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.email = user.email;
      } else if (!token.role && token.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: token.email },
          select: { role: true },
        });
        token.role = dbUser?.role || "USER";
      }
      return token;
    },
    async session({ session, token }) {
      if (token.role) {
        session.user.role = token.role as string;
      }
      return session;
    },
  },
});
