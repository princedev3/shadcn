"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";

const ShadCn = () => {
  return (
    <div className="border rounded-xl p-4">
      <div className="grid grid-cols-[2fr_1fr] gap-5">
        <div className="grid ">
          {" "}
          <h1 className="text-xl font-semibold">Shadecn/ui</h1>
          <p className="text-sm text-zinc-600 w-[100%] ">
            beautifully designed components built with Radix UI and Tailwind CSS
          </p>
        </div>
        <div className=" w-full ">
          <Select>
            <SelectTrigger className=" bg-blue-50 border-none outline-none">
              <div className="flex items-center gap-1">
                <Star className="text-zinc-500 w-5 h-5  stroke-[1px] " />
                <SelectValue placeholder="Star" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input type="radio" />
          <p className="text-zinc-600 text-sm">Typescript</p>
        </div>
        <div className="flex  items-center">
          <Star className="text-zinc-500 w-4 h-4  stroke-[1px] " />
          <span className="text-zinc-600 text-sm">10K</span>
        </div>
        <span className="text-zinc-600 text-sm">Updated April 2023</span>
      </div>
    </div>
  );
};

export default ShadCn;
