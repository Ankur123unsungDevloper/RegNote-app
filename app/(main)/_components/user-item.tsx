"use client";

import { ChevronsLeftRight } from "lucide-react";
import {
  Avatar,
  AvatarImage
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import {
  SignInButton,
  SignOutButton,
  useUser
} from "@clerk/nextjs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Item } from "./item";

export const UserItem = () => {

  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center text-sm p-3 w-full dark:hover:bg-primary/5">
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Avatar className="h-5 w-5">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              {user?.fullName}&apos;s RegNote
            </span>
          </div>
          <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4 relative right-[30px]" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
      <div className="flex flex-col space-y-4 p-2">
        <div className="grid grid-cols-2 gap-[210px]">
          <p className="text-xs font-medium leading-none text-muted-foreground">
          </p>
          <div className="relative bottom-2">
            <Item
              label="Search"
              icon={HiOutlineDotsHorizontal}
            />
          </div>
        </div>
        <div className="flex items-center gap-x-2 relative bottom-6">
          <div className="dark:bg-secondary p-1">
            <Avatar className="h-8 w-8">
                <AvatarImage src={user?.imageUrl} />
            </Avatar>
          </div>
          <div className="space-y-1">
            <p className="text-sm line-clamp-1">
              {user?.fullName}&apos;s RegNote
            </p>
            <p className="text-xs font-medium leading-none text-muted-foreground">Free Plan <span className="relative bottom-0.5"> . </span> 1 member</p>
          </div>
        </div>
      </div>
      <DropdownMenuSeparator  className="dark:bg-neutral-500 relative bottom-6" />
      <DropdownMenuItem asChild className="w-full cursor-pointer text-muted-foreground dark:hover:bg-neutral-700 bottom-5">
        <SignInButton>
          Create work account
        </SignInButton>
      </DropdownMenuItem>
      <DropdownMenuItem asChild className="w-full cursor-pointer text-muted-foreground dark:hover:bg-neutral-700 bottom-5">
        <SignInButton>
          Add another account
        </SignInButton>
      </DropdownMenuItem>
      <DropdownMenuItem asChild className="w-full cursor-pointer text-muted-foreground dark:hover:bg-neutral-700 bottom-5">
        <SignOutButton>
          Log out
        </SignOutButton>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}