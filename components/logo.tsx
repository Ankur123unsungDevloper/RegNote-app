import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600", "800"]
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center ml-2">
      <Image
        src="/logos/logo-light.svg"
        height="60"
        width="60"
        alt="Logo"
        className="dark:hidden"
      />
      <p className={cn("font-semibold", font.className)}>
        RegNote
      </p>
    </div>
  )
}