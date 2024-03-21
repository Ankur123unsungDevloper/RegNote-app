import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import { Facebook, Instagram, Twitter, Youtube, Globe, Linkedin, ChevronDown } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="footerOuter dark:bg-[#1F1F1F]">
      <nav className="footerInner">
        <div className="footerTop">
          <div>
            <Logo />
          </div>
        </div>
        <div className="footerTopMain">
          <ul className="footerSocial">
            <li className="socialItem_Instagram">
              <Button variant="ghost" size="icon">
                <Instagram className="hover:inset-1" strokeWidth={1.5} absoluteStrokeWidth />
              </Button>
            </li>
            <li className="socialItem">
              <Button variant="ghost" size="icon">
                <Twitter strokeWidth={1.5} absoluteStrokeWidth />
              </Button>
            </li>
            <li className="socialItem">
              <Button variant="ghost" size="icon">
                <Linkedin strokeWidth={1.5} absoluteStrokeWidth />
              </Button>
            </li>
            <li className="socialItem">
              <Button variant="ghost" size="icon">
                <Facebook strokeWidth={1.5} absoluteStrokeWidth />
              </Button>
            </li>
            <li className="socialItem">
              <Button variant="ghost" size="icon">
                <Youtube strokeWidth={1.5} absoluteStrokeWidth />
              </Button>
            </li>
          </ul>
          <div className="languagePicker">
            <Button variant="outline">
              <Globe className="mr-3" strokeWidth={2.5} absoluteStrokeWidth />
              English
              <ChevronDown size={16} className="h-3 w-3 ml-1.5" />
            </Button>
          </div>
        </div>
        <div className="footerBottom">
          <div className="footerColumns">
            Ankur
          </div>
          <div className="footerlegal"></div>
      </div>
      </nav>
    </footer>
  )
}