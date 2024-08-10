"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button size="sm" variant="link" asChild className="w-full font-normal">
      <Link href={href}>{label}</Link>
    </Button>
  );
};
