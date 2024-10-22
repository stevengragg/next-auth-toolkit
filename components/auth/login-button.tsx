"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const handleOnClick = (): void => {
    router.push("/auth/signin");
    return;
  };

  //   TODO: modal mode
  return (
    <span className="cursor-pointer" onClick={handleOnClick}>
      {children}
    </span>
  );
};
