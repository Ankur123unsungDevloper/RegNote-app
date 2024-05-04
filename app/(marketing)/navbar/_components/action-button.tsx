"use client";

import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import DropdownMenu from "./drop-down-menu";

export const ActionButtons = () => {
  

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div className="pr-2">
      <div className="items-center justify-center flex">
        <div className="flex xl:space-x-4">
          <Button variant="ghost">
            <Link href="/contact-sales" className="hidden lg:flex items-center"
            >
              Request a demo
            </Link>
          </Button>
          <div className="font-thin lg:flex items-center hidden relative right-2">|</div>
        </div>
        <div className="flex lg:space-x-4 items-center justify-center pr-4">
          <Button variant="ghost" size="sm" className="hidden lg:flex border-none text-md" asChild>
            <Link href="/sign-in">
              Log in
            </Link>
          </Button>
          <Button size="sm" className="hidden lg:flex text-center items-center justify-center" asChild>
            <Link href="/sign-up">
              Get RegNote free
            </Link>
          </Button>
        </div>
      </div>
      
      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="rounded-full xl:hidden"
        >
          <X className="h-6 w-6 items-center justify-center" />
        </div>
      )}
      {!isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="flex lg:hidden"
        >
          <AlignJustify className="h-6 w-6 items-center justify-center mr-2" />
        </div>
      )}
      {isDropdownVisible &&
        <DropdownMenu onClose={closeDropdown} />
      }
    </div>
  );
};