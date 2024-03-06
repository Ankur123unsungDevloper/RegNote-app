"use client";

import { useConvexAuth } from "convex/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans.Unified. Welcome to <span className="underline">RegNote</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        RegNote is connected workspace where <br/> better, faster work happens
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter RegNote
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get RegNote free
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </SignInButton>
      )}
      {!isAuthenticated && !isLoading && (
          <Button className="text-blue-700 pl-10" variant="link" asChild>
          <Link href="/">
              Request a demo
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
          </Button>
      )}
    </div>
  )
}