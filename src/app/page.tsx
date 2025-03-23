"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/schemas/schemas";
import PaymentMethod from "@/components/payment-method";
import TeamMember from "@/components/team-member";
import ShareDocument from "@/components/share-document";
import PickDate from "@/components/pick-date";
import Notification from "@/components/notification";
import ReportCase from "@/components/report-case";
import ShadCn from "@/components/shad-cn";
import CookieSetting from "@/components/cookie-setting";
import { Github } from "lucide-react";
import { useRouter } from "next/navigation";

console.log(process.env.NEXT_PUBLIC_localhost);

export default function Home() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const handleLogout = async () => {
    const res = await fetch(`https://shadcn-red-eta.vercel.app/api/logout`, {
      method: "POST",
    });
    if (res.ok) {
      router.push("/login");
    }
    console.log(res);
  };

  return (
    <div className=" shadow-lg rounded-2xl max-w-6xl mx-auto  md:p-0">
      <div>
        <button onClick={handleLogout}>signout</button>
      </div>
      <div className="grid p-4 md:p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* right */}
        <div className="grid gap-6 h-fit">
          <div className="border rounded-xl p-4">
            <h1 className="font-bold text-xl">Create an account</h1>
            <p className="text-zinc-700 text-sm my-2">
              Enter your email below to create your account
            </p>
            <div className="flex justify-between my-5">
              <Badge
                variant="outline"
                className="text-zinc-700 p-2 w-[130px] !rounded-lg text-center flex items-center justify-center "
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  Github
                </div>
              </Badge>
              <Badge
                variant="outline"
                className="text-zinc-700 !rounded-lg p-2 w-[130px] text-center flex items-center justify-center "
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={"/google.png"}
                    width={10}
                    height={10}
                    alt=""
                    className="w-4 h-4 object-cover"
                  />
                  Google
                </div>
              </Badge>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div className=" flex-grow border-b border-zinc-400 "></div>
              <p className="uppercase text-sm font-semibold text-zinc-500">
                or continue with
              </p>
              <div className=" flex-grow border-b border-zinc-400"></div>
            </div>
            <div className="my-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="enter your password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-blue-700 rounded-2xl hover:bg-blue-600 cursor-pointer"
                  >
                    create account
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          <div className="border rounded-xl p-4">
            <PaymentMethod />
          </div>
        </div>

        {/* center */}
        <div className="grid gap-4 h-fit ">
          <TeamMember />
          <ShareDocument />
          <PickDate />
          <Notification />
        </div>
        {/* left */}
        <div className="grid gap-4 h-fit  ">
          <ReportCase />
          <ShadCn />
          <CookieSetting />
        </div>
      </div>
    </div>
  );
}
