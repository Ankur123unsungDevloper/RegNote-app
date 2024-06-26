"use client";

import { cn } from "@/lib/utils";
import {
  ChevronsLeft,
  MenuIcon,
  Settings
} from "lucide-react";
import {
  IoTrashOutline,
  IoCreateOutline,
  IoSearch
} from "react-icons/io5";
import { HiPlusSm } from "react-icons/hi";
import { PiUserRectangleFill } from "react-icons/pi";
import { BsInbox } from "react-icons/bs";
import { useParams, usePathname } from "next/navigation";
import {
  ElementRef,
  useEffect,
  useRef,
  useState
} from "react";
import { useMediaQuery } from "usehooks-ts";
import { UserItem } from "./user-item";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Item } from "./item";
import { toast } from "sonner";
import { DocumentList } from "./document-list";
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TrashBox } from "./trash-box";
import { useSearch } from "@/hooks/use-search";
import { useInbox } from "@/hooks/use-inbox";
import { useSettings } from "@/hooks/use-settings";
import { useTeamspaces } from "@/hooks/use-teamspaces";
import { Navbar } from "./navbar";

export const Navigation = () => {
  const search = useSearch();
  const settings = useSettings();
  const teamspaces = useTeamspaces();
  const inbox = useInbox();
  const params = useParams();
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const create = useMutation(api.documents.create);
  
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile]);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;

    if (newWidth < 240) newWidth = 240;
    if (newWidth > 480) newWidth = 480;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty("width", `calc(100% - ${newWidth}px)`);
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty(
        "left",
        isMobile ? "100%" : "240px"
      );
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");
      setTimeout(() => setIsResetting(false), 300);
    }
  }

  const handleCreate = () => {
    const promise = create({ title: "Untitled" });

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New Note created!",
      error: "Failed to create note."
    });
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div
          onClick={collapse}
          role="button"
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm dark:hover:bg-neutral-600 absolute top-3 right-[35px] opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div
          onClick={handleCreate}
          role="button"
          className={cn(
            "h-7 w-7 text-muted-foreground rounded-sm dark:hover:bg-neutral-600 absolute top-2 right-2 items-center justify-center p-1",
            isMobile && "opacity-100"
          )}
        >
          <IoCreateOutline className="h-5 w-5" />
        </div>
        <div>
          <UserItem />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="w-full hover:rounded-sm">
                <Item
                  label="Search"
                  icon={IoSearch}
                  onClick={search.onOpen}
                />
              </TooltipTrigger>
              <TooltipContent className="text-muted-foreground relative left-[240px] bottom-[40px]">
                <h6 className="text-white">Search and quickly jump to a page</h6>
                <p className="text-[13px] font-medium">Ctrl+K</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="w-full">
              <Item
                label="Inbox"
                icon={BsInbox}
                onClick={inbox.onOpen}
              />
              </TooltipTrigger>
              <TooltipContent className="text-muted-foreground relative left-[240px] top-[40px]">
                <h6 className="text-white">View recent update and notifications</h6>
                <p className="text-[13px] font-medium">Ctrl+Alt+U</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="w-full">
              <Item
                label="Settings & members"
                icon={Settings}
                onClick={settings.onOpen}
              />
              </TooltipTrigger>
              <TooltipContent className="text-muted-foreground relative left-[240px] top-[35px]">
                <h6 className="text-white">Manage your account and settings</h6>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="mt-4">
          <DocumentList />
          <div className="mt-4">
            <Item
              label="Add a page"
              icon={HiPlusSm}
              onClick={handleCreate}
            />
          </div>
          <div className="mt-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                <Item
                  label="Create a teamspace"
                  icon={PiUserRectangleFill}
                  onClick={teamspaces.onOpen}
                />
                </TooltipTrigger>
                <TooltipContent className="text-muted-foreground relative left-[240px] top-[35px]">
                  <h6 className="text-white">Search and quickly jump to a page</h6>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Popover>
            <PopoverTrigger className="w-full">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full">
                  <Item
                    label="Trash"
                    icon={IoTrashOutline}
                  />
                  </TooltipTrigger>
                  <TooltipContent className="text-muted-foreground relative left-[210px] top-[35px]">
                    <h6 className="text-white">Restore deleted pages.</h6>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </PopoverTrigger>
            <PopoverContent
              className="p-0 w-72"
              side={isMobile ? "bottom" : "right"}
            >
              <TrashBox />
            </PopoverContent>
          </Popover>
        </div>
        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
        />
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      >
        {!!params.documentId ? (
          <Navbar
            isCollapsed = {isCollapsed}
            onResetWidth = {resetWidth}
          />
        ) : (
          <nav className="bg-transparent px-3 py-2 w-full">
            {
              isCollapsed &&
              <MenuIcon
                onClick={resetWidth}
                role="button"
                className="h-6 w-6 text-muted-foreground"
              />
            }
          </nav>
        )}
      </div>
    </>
  )
}