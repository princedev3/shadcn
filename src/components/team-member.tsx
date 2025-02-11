"use client";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { teamMembers } from "@/schemas/schemas";

const TeamMember = () => {
  return (
    <div className="border rounded-xl p-3 ">
      <h1 className="font-bold text-xl">Team Members</h1>
      <p className="text-zinc-700 text-sm my-2">
        Invite your team members to collaborate
      </p>
      <div className="grid gap-4 mt-5">
        {teamMembers.map((item) => (
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
                <p className="text-sm text-zinc-700 capitalize">{item.name} </p>
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
  );
};

export default TeamMember;
