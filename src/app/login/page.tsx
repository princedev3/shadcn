import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";

import React from "react";

const page = async () => {
  // const session = await auth();

  // if (session) {
  //   redirect("/");
  // }
  return (
    <div className="">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button type="submit">login with google</Button>
      </form>
      <form
        className="space-y-4"
        action={async (formData) => {
          "use server";

          await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
          });
        }}
      >
        <input
          name="email"
          placeholder="Email"
          type="email"
          required
          autoComplete="email"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          required
          autoComplete="current-password"
        />
        <Button className="w-full" type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default page;
