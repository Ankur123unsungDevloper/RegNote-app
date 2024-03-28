import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

const Heading = () => {
  return ( 
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Your Ideas, Documents, & Plans.Unified. Welcome to <span className="underline">RegNote</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-xl font-medium">
        RegNote is connected workspace where better, faster work happens
      </h3>
      <div className="w-full flex items-center justify-center">
      </div>
      <Button>
        Get RegNote free
        <ArrowRight className="ml-2" />
      </Button>
      <Button
        className="text-blue-700 pl-10 hover:underline"
        variant="link"
        asChild
      >
        <Link href="/">
          Request a demo
          <PiArrowRight className="ml-2" />
        </Link>
      </Button>
      </div>
  );
}

export default Heading;