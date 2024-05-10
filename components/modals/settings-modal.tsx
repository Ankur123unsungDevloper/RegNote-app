"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader
} from "@/components/ui/dialog";
import { useSettings } from "@/hooks/use-settings";
import { Label } from "@/components/ui/label";
import {
  Avatar,
  AvatarImage
} from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { Item } from "@/app/(main)/_components/item";
import { PiUserCircleFill } from "react-icons/pi";

export const SettingsModal = () => {
  
  const settings = useSettings();
  const { user } = useUser();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent className="bg-secondary">
        <DialogHeader>Setting</DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>
              Appearance
            </Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how RegNote looks on your device
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};