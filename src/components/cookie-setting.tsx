import React from "react";
import { Switch } from "./ui/switch";

const CookieSetting = () => {
  return (
    <div className="border rounded-xl p-3 grid">
      <h1 className="font-bold text-xl">Report an issue</h1>
      <p className="text-zinc-700 text-sm mt-2">
        What area you having problem with?
      </p>
      <div className="grid gap-y-5 mt-4">
        <div className="flex items-center justify-between ">
          <div>
            <h1 className="text-base font-semibold">Strictly Necessary</h1>
            <p className="text-sm text-zinc-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              facere excepturi voluptates! rem.
            </p>
          </div>
          <Switch className="" />
        </div>
        <div className="flex items-center justify-between ">
          <div>
            <h1 className="text-base font-semibold">Functional cookies</h1>
            <p className="text-sm text-zinc-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              facere excepturi voluptates! rem.
            </p>
          </div>
          <Switch className="" />
        </div>
        <div className="flex items-center justify-between ">
          <div>
            <h1 className="text-base font-semibold">Performance cookies</h1>
            <p className="text-sm text-zinc-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              facere excepturi voluptates! rem.
            </p>
          </div>
          <Switch className="" />
        </div>
      </div>
    </div>
  );
};

export default CookieSetting;
