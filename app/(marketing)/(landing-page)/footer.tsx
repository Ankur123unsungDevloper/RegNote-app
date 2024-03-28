import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { AiOutlineGlobal } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import { Logo } from "../navbar/_components/logo";

const Footer = () => {
  return ( 
    <div className="flex lg:items-center pb-10 flex-col px-8 lg:px-0 xl:w-3/4 mx-auto 2xl:w-[55%] relative top-[80px]">
      <div className="lg:flex lg:space-x-32 md:px-0">
        <div className="pt-4">
          <Logo />
          <div className="flex space-x-2 gap-2 relative top-[20px]">
            <FaInstagram className="text-2xl text-gray-500 hover:text-pink-500" />
            <FaTwitter className="text-2xl text-gray-500 hover:text-blue-500" />
            <FaLinkedinIn className="text-2xl text-gray-500 hover:text-blue-700" />
            <FaFacebook className="text-2xl text-gray-500 hover:text-blue-800" />
            <FaYoutube className="text-2xl text-gray-500 hover:text-red-600" />
          </div>
          <div className="relative top-[50px] font-bold">
          <Button variant="outline">
            <AiOutlineGlobal className="mr-2 w-5 h-5" />
              English
              <ChevronDown size={16} className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-40">
          <div className="flex-col space-y-6 ">
            <div className="pt-10 font-medium">PRODUCT</div>
            <div className="font-light space-y-4 text-sm">
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Home</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Product</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">What&apos;s New</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Pricing</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Premium</div>
            </div>
          </div>
          <div className="flex-col space-y-6 ">
            <div className="pt-10 font-medium">PRODUCT</div>
            <div className="font-light space-y-4 text-sm">
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Home</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Product</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">What&apos;s New</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Pricing</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Premium</div>
            </div>
          </div>
          <div className="flex-col space-y-6 ">
            <div className="pt-10 font-medium">PRODUCT</div>
            <div className="font-light space-y-4 text-sm">
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Home</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Product</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">What&apos;s New</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Pricing</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Premium</div>
            </div>
          </div>
          <div className="flex-col space-y-6 ">
            <div className="pt-10 font-medium">PRODUCT</div>
            <div className="font-light space-y-4 text-sm">
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Home</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Product</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">What&apos;s New</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Pricing</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Premium</div>
            </div>
          </div>
          <div className="flex-col space-y-6 ">
            <div className="pt-10 font-medium">PRODUCT</div>
            <div className="font-light space-y-4 text-sm">
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Home</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Product</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">What&apos;s New</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Pricing</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Premium</div>
            </div>
          </div>
          <div className="flex-col space-y-6 ">
            <div className="pt-10 font-medium">PRODUCT</div>
            <div className="font-light space-y-4 text-sm">
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Home</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Product</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">What&apos;s New</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Pricing</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Premium</div>
            </div>
          </div>
          <div className="flex-col space-y-6 ">
            <div className="pt-10 font-medium">PRODUCT</div>
            <div className="font-light space-y-4 text-sm">
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Home</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Product</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">What&apos;s New</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Pricing</div>
              <div className="hover:text-sky-500 hover:underline hover:cursor-pointer">Premium</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;