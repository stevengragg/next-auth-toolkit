"use client";

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button className="w-full" size="lg" variant="outline">
        <FcGoogle />
      </Button>
      <Button className="w-full" size="lg" variant="outline">
        <FaGithub />
      </Button>
    </div>
  );
};
