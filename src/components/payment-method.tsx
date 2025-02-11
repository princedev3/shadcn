"use client";
import { paymentSchema, paymentType } from "@/schemas/schemas";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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

const PaymentMethod = () => {
  const [selected, setSelected] = useState("1");

  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      name: "",
      card: "",
      month: "",
      cvv: "",
      year: "",
    },
  });
  function onSubmit(values: z.infer<typeof paymentSchema>) {
    console.log(values);
  }
  return (
    <>
      <h1 className="font-bold text-xl">Payment Method</h1>
      <p className="text-zinc-700 text-sm my-2">
        Add a new payment method to your account
      </p>
      <div className="grid grid-flow-col gap-3 my-5">
        {paymentType.map((item) => (
          <Card
            key={item.id}
            onClick={() => setSelected(item.id)}
            className={`${
              selected === item.id ? "ring-1 ring-blue-400" : ""
            } cursor-pointer`}
          >
            <div className="text-center h-20 flex items-center justify-center flex-col">
              <item.icon className="w-6 h-6 " />
              <span className=""> {item.name}</span>
            </div>
          </Card>
        ))}
      </div>
      <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Last" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="card"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card</FormLabel>
                  <FormControl>
                    <Input placeholder="" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-flow-col gap-3">
              <FormField
                control={form.control}
                name="month"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expires</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="rounded-3xl">
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => {
                          return new Date(0, i).toLocaleString("en-US", {
                            month: "long",
                          });
                        }).map((item) => (
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
                name="year"
                render={({ field }) => (
                  <FormItem className="!rounded-3xl ">
                    <FormLabel>Year</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="rounded-3xl">
                          <SelectValue placeholder="Year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="">
                        {["2020", "2021", "2022", "2023", "2024", "2025"].map(
                          (item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVV</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type="number"
                        className="rounded-3xl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-700 rounded-2xl hover:bg-blue-600 cursor-pointer"
            >
              continue
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default PaymentMethod;
