"use client";
import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { shareDocument } from "@/schemas/schemas";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShareDocument = () => {
  return (
    <div className="border rounded-xl p-3 ">
      <h1 className="font-bold text-xl">Share this documnet</h1>
      <p className="text-zinc-700 text-sm my-2">
        Anyone with this link can view this document
      </p>
      <div className="grid grid-flow-col gap-5 my-5">
        <span className="border text-center flex text-zinc-600 items-center justify-center rounded-3xl">
          http://localhost:3001/
        </span>
        <Button
          type="button"
          className="rounded-3xl bg-slate-200"
          variant={"outline"}
        >
          Copy link
        </Button>
      </div>
      <Separator className="mb-5 " />
      <div className="">
        <span className="font-medium">People with access</span>
        <div className="grid gap-6 mt-5">
          {shareDocument.map((item) => (
            <div key={item.id} className="flex justify-between items-center  ">
              <div className="grid grid-flow-col gap-5">
                <Image
                  src={"/simon.jpg"}
                  width={50}
                  height={50}
                  alt="image"
                  className="object-cover w-10 h-10 rounded-full border"
                />
                <div className="">
                  <p className="text-sm text-zinc-700 capitalize">
                    {item.name}{" "}
                  </p>
                  <span className="text-sm text-zinc-700 capitalize">
                    {item.email}{" "}
                  </span>
                </div>
              </div>
              <Select>
                <SelectTrigger className="w-[100px] rounded-3xl">
                  <SelectValue placeholder={item.status} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={item.status}>{item.status} </SelectItem>
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareDocument;
