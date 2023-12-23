import FolderEmails from "@/components/FolderEmails";
import ModeToggle from "@/components/ModeToggle";
import UserButton from "@/components/UserButton";
import { Button } from "@/components/ui/button";
import React, { type ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <FolderEmails />
      <section className="flex-grow bg-background">
        <header className="flex justify-end border-0 border-b border-solid border-input px-3 py-2.5">
          <div className="flex items-center gap-3">
            <UserButton />
            {/* <Button variant="primary">Login</Button> */}
            <ModeToggle />
          </div>
        </header>
        {children}
      </section>
    </>
  );
}
