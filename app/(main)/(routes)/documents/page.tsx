"use client";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { IoIosAddCircle } from "react-icons/io";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {

  const { isSignedIn, user } = useUser();

  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" });

    toast.promise(promise, {
      loading: "Creating a note...",
      success: "New note created!",
      error: "Failed to create new note.",
    });
  };

  if (!isSignedIn) {
    return null;
  }

  return ( 
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
      />
      <h2 className="text-lg font-medium text-white">
        Welcome to {user.firstName}&apos;s RegNote
      </h2>
      <Button onClick={onCreate} className="bg-white">
        <IoIosAddCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
}

export default DocumentsPage;
