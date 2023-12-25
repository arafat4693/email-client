import { api } from "@/trpc/server";
import { redirect } from "next/navigation";

export default async function Home() {
  await api.user.authCallback.query();
  redirect("/inbox");
}
