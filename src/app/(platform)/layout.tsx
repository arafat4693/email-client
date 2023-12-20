import Sidebar from "@/components/Sidebar";
import React, { type ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <section className="flex h-screen">
      <Sidebar />
      {children}
    </section>
  );
}
