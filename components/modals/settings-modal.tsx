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
        <aside className="h-full overflow-y-auto relative flex w-60 flex-col">
          <div className="flex items-center text-sm p-3 w-full">
            <div className="gap-x-2 flex items-center max-w-[150px]">
              <Avatar className="h-8 w-8 rounded-full">
                <AvatarImage src={user?.imageUrl} />
              </Avatar>
              <span className="text-start font-medium">
                {user?.fullName}
              </span>
              <p className="text-muted-foreground">
              </p>
            </div>
          </div>
          <Item
            icon={PiUserCircleFill}
            label="Settings"
          />
        </aside>
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