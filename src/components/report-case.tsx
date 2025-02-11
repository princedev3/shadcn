"use client";
import React from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
const ReportCase = () => {
  const formSchema = z.object({
    subject: z.string().min(2, {
      message: "name must be at least 2 characters.",
    }),
    desc: z.string().min(2, {
      message: "you must enter your card number",
    }),
    area: z.string().min(2, {
      message: "you must enter your card number",
    }),

    security: z.string().min(2, {
      message: "you must enter your card number",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      desc: "",
      area: "",
      security: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="border rounded-xl p-4 ">
      <h1 className="font-bold text-xl">Report an issue</h1>
      <p className="text-zinc-700 text-sm ">
        What area you having problem with?
      </p>

      <div className="mt-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-flow-col gap-5">
              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Area</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="rounded-3xl">
                          <SelectValue placeholder="Area" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {["billing", "payment", "credit"].map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="security"
                render={({ field }) => (
                  <FormItem className="!rounded-3xl ">
                    <FormLabel>Security level</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="rounded-3xl">
                          <SelectValue placeholder="security" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="">
                        {[
                          "security 1",
                          "security 2",
                          "security 3",
                          "security 4",
                        ].map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-xl"
                      placeholder="I need help with..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="desc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please include all the information relevant to your issue"
                      className="resize-none placeholder:text-sm rounded-xl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-flow-col justify-between ">
              <Button
                variant={"outline"}
                type="submit"
                className="w-[100px]  rounded-2xl rsor-pointer"
              >
                cancel
              </Button>
              <Button
                type="submit"
                className="w-[100px] bg-blue-700 rounded-2xl hover:bg-blue-600 cursor-pointer"
              >
                submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ReportCase;
