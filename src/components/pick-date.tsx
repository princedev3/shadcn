"use client";
import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const PickDate = () => {
  const formSchema = z.object({
    date: z.object({
      from: z.date(),
      to: z.date().optional(),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: {
        from: undefined,
        to: undefined,
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="border rounded-xl p-3 grid gap-2 h-[20vh] items-center ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pick a date</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild className="rounded-2xl w-full">
                      <Button
                        variant={"outline"}
                        className={cn(
                          " justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon />
                        {field.value?.from ? (
                          `${format(field.value.from, "PPP")} - ${
                            field.value?.to
                              ? format(field.value.to, "PPP")
                              : " "
                          }`
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        disabled={(date: any) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                        mode="range"
                        selected={field.value}
                        onSelect={(range: any) => {
                          field.onChange(range);
                          if (range?.from && range?.to) {
                            form.handleSubmit(onSubmit)();
                          }
                        }}
                        initialFocus
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default PickDate;
