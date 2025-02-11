"use client";
import { notificationData } from "@/schemas/schemas";
import React, { useState } from "react";

const Notification = () => {
  return (
    <div className="border rounded-xl p-3">
      <h1 className="font-bold text-lg text-zinc-800">Notification</h1>
      <p className="text-zinc-700  my-1">
        choose what you want to be notified about
      </p>
      <div className="flex flex-col gap-3 mt-4">
        {notificationData.map((item) => (
          <div
            key={item.id}
            className={`  hover:bg-blue-100
             flex  items-center gap-5  rounded-sm px-2 cursor-pointer`}
          >
            <item.icon width={20} height={20} className="text-zinc-700" />
            <div className="">
              <p className="text-sm font-semibold capitalize">{item.name} </p>
              <span className="text-sm">{item.desc} </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
