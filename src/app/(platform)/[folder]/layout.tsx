import FolderEmails from "@/components/FolderEmails";
import ModeToggle from "@/components/ModeToggle";
import UserButton from "@/components/UserButton";
import { api } from "@/trpc/server";
import React, { type ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <FolderEmails />
      <section className="flex-grow bg-background">
        <header className="flex justify-end border-0 border-b border-solid border-input px-3 py-2.5">
          <div className="flex items-center gap-3">
            <UserButton />
            <ModeToggle />
          </div>
        </header>
        {children}
      </section>
    </>
  );
}
