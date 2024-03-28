"use client";

import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import {
  SignInButton,
  UserButton
} from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import DropdownMenu from "./drop-down-menu";
import { Spinner } from "@/components/spinner";

export const ActionButtons = () => {
  
  const { isAuthenticated, isLoading } = useConvexAuth();

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
          <Button
            variant="ghost"
          >
            <Link
              href="/contact-sales"
              className="hidden lg:flex items-center"
            >
              Request a demo
            </Link>
          </Button>
          <div className="font-thin lg:flex items-center hidden relative right-2">|</div>
        </div>
        <div className="flex lg:space-x-4 items-center pr-4">
        {isLoading && (
          <Spinner />
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm" className="hidden lg:flex items-center border-none text-md">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm" className="hidden lg:block">
                Get RegNote free
              </Button>
            </SignInButton>
            <UserButton
              afterSignOutUrl="/"
            />
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">
                Enter RegNote
              </Link>
            </Button>
            <UserButton
              afterSignOutUrl="/"
            />
          </>
        )}
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