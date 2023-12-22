import FolderEmails from "@/components/FolderEmails";
import React, { type ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <section className="flex h-screen">
      <FolderEmails />
      {children}
    </section>
  );
}
