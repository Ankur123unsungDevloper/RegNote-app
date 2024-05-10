import { Button } from "@/components/ui/button";
import Link from "next/link";

import { ArrowRight } from 'lucide-react';

const Heading = () => {
  return ( 
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-20">
        Your Ideas, Documents, & Plans.Unified. Welcome to <br/> <span className="underline">RegNote</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-xl font-medium">
        RegNote is connected workspace where better, faster work happens
      </h3>
      <div className="w-full flex items-center justify-center">
      </div>
      <Button className="bg-blue-600 hover:bg-blue-700">
        <Link href="/sign-up">
          Get RegNote free
        </Link>
      </Button>
      <Button
        className="bg-white text-blue-600 hover:bg-blue-200 ml-10"
        asChild
      >
        <Link href="/contact-sales">
          Request a demo
          <ArrowRight className="h-4 w-4 ml-2" strokeWidth={3} />
        </Link>
      </Button>
      </div>
  );
}

export default Heading;