import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import { Facebook, Instagram, Twitter, Youtube, Globe, Linkedin, ChevronDown } from "lucide-react"

export const Footer = () => {
  return (
    <div className="block border-t m-4">
      <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <div className="relative left-60">
          <Logo />
          <div className="flex relative top-5 right-2 justify-center">
            <Button variant="ghost" size="icon">
              <Instagram color="#757575" strokeWidth={1.5} absoluteStrokeWidth />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter color="#757575" strokeWidth={1.5} absoluteStrokeWidth />
            </Button>
            <Button variant="ghost" size="icon">
            <Linkedin color="#757575" strokeWidth={1.5} absoluteStrokeWidth />
            </Button>
            <Button variant="ghost" size="icon">
              <Facebook color="#757575" strokeWidth={1.5} absoluteStrokeWidth />
            </Button>
            <Button variant="ghost" size="icon">
              <Youtube className="hover:" color="#757575" strokeWidth={1.5} absoluteStrokeWidth />
            </Button>
          </div>
          <div className="flex relative top-10 right-2">
            <Button variant="outline">
              <Globe className="mr-3" size={36} color="#757575" strokeWidth={2.5} absoluteStrokeWidth />
              English
              <ChevronDown className="h-3 w-3 ml-1.5" />
            </Button>
          </div>
      </div>
      <div className="md:ml-auto w-full justify-between md:justify-center flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
    </div>
  )
}