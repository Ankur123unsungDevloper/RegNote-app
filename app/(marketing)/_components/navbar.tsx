"use client";

import { useConvexAuth } from "convex/react";
import {
  SignInButton,
  UserButton
} from "@clerk/clerk-react";
import Link from "next/link";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ChevronDown } from "lucide-react";


export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-2",
      scrolled && "border-b shadow-sm"
    )}>
      <Logo />
      <div className="relative left-10 md:justify-start w-full flex items-center md:right-15">
        <Button variant="ghost" size="sm">
          Product
          <ChevronDown className="h-3 w-3 ml-1.5" />
        </Button>
        <Button variant="ghost" size="sm">
          Download
          <ChevronDown className="h-3 w-3 ml-1.5" />
        </Button>
        <Button variant="ghost" size="sm">
          Solutions
          <ChevronDown className="h-3 w-3 ml-1.5" />
        </Button>
        <Button variant="ghost" size="sm">
          Resources
          <ChevronDown className="h-3 w-3 ml-1.5" />
        </Button>
        <Button variant="ghost" size="sm">
          Pricing
        </Button>
      </div>
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && (
          <Spinner />
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost">
              <Link href="/">
                Request a demo
              </Link>
            </Button>
            <SignInButton mode="modal">
              <Button variant="ghost">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">
                Get RegNote free
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" asChild>
              <Link href="/documents">
                Enter RegNote
              </Link>
            </Button>
            <UserButton
              afterSignOutUrl="/"
            />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}