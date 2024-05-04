"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Spinner } from "@/components/spinner";

import { SearchCommand } from "@/components/search-command";
import { Navigation } from "./_components/navigation";

import { ThemeProvider } from '@/components/providers/theme-provider'

import {} from "@clerk/nextjs"

const MainLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center dark:bg-[#1F1F1F]">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }


  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="RegNote-theme-2"
      >
        <Navigation />
        <main className="flex-1 h-full overflow-y-auto">
          <SearchCommand />
          {children}
        </main>
      </ThemeProvider>
    </div>
  );
}

export default MainLayout;