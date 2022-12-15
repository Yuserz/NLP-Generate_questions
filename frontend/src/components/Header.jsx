import React from "react";
import { Switcher, Dropdown } from "components";

export default function Header() {

  return (
    <div className="bg-white dark:text-white dark:bg-zinc-800 p-4  select-none relative flex shadow-md justify-between items-center h-24 m-auto">
      <div className="flex justify-between items-center space-x-4">
        <img
          className="icon w-24 h-auto rounded"
          src="/images/logo.png"
          alt="Logo"
        />
        <h1 className="w-full text-xl">
          ALONE NO MORE, I WILL BE YOUR STUDY BUDDY!
        </h1>
      </div>
      <Switcher />
      <Dropdown /> 
    </div>
  );
}
