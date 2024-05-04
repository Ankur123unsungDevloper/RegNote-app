import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600", "800"]
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-1">
      <Image
        src="/logos/logo-light.svg"
        height="50"
        width="50"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        height="40"
        width="40"
        alt="Logo"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>
        RegNote
      </p>
    </div>
  )
}