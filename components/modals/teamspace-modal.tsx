"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader
} from "@/components/ui/dialog";
import { useTeamspaces } from "@/hooks/use-teamspaces";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Button } from "../ui/button";
import { useUser } from "@clerk/clerk-react"; 
import { RxQuestionMarkCircled } from "react-icons/rx";
import Link from "next/link";

export const TeamspaceModal = () => {
  const { user } = useUser();
  const teamspaces = useTeamspaces();

  return (
    <Dialog open={teamspaces.isOpen} onOpenChange={teamspaces.onClose}>
      <DialogContent>
        <DialogHeader className="flex flex-row border-b pb-2">
          <Image
            src="/empty-dark.png"
            height="30"
            width="30"
            alt="Empty"
          />
          <p className="text-[0.8rem] text-muted-foreground">
            Create your first teamspace to start using RegNote with your teammates
          </p>
        </DialogHeader>
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-y-1">
            <Label>
              Create a new teamspace
            </Label>
            <p className="text-[0.8rem] text-muted-foreground">
              Teamspaces are where your team organizes pages, permissions, and members
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-[0.8rem] text-muted-foreground">Everyone at {user ?.firstName}&apos;s RegNote and new members will have access to this teamspace</p>
        </div>
        <div className="flex flex-row gap-[100px]">
          <Button variant="ghost" className="text-[1rem] text-gray-400 hover:text-white" size="sm">
            <RxQuestionMarkCircled className="" />
            Learn about Teamspaces
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-gray-400 hover:text-white" size="sm">
            <Link href="/trello">
              Create teamspace
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}