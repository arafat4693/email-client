import Attachments from "@/components/Attachments";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  createKindeManagementAPIClient,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

export default async function page() {
  const apiClient = await createKindeManagementAPIClient();
  const users = await apiClient.usersApi.getUsers();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // console.log(users);

  return (
    <section className="px-4 py-3">
      <div className="flex items-center justify-between">
        <h3 className="mb-5 text-lg font-semibold text-primary">New mail</h3>

        <div className="flex gap-2">
          <Button size="sm" variant="destructive">
            Discard
          </Button>
          <Button size="sm" variant="primary">
            Send
          </Button>
        </div>
      </div>

      <p className="mb-2 text-sm font-semibold text-muted-foreground">From</p>

      <figure className="mb-5 flex items-center gap-2">
        <Avatar className="h-7 w-7">
          <AvatarImage src={user?.picture ?? undefined} alt="user" />
          <AvatarFallback>
            {user?.given_name?.[0]}
            {user?.family_name?.[0]}
          </AvatarFallback>
        </Avatar>
        <h1 className="text-sm font-semibold text-primary">
          {user?.given_name} {user?.family_name}{" "}
          <span className="font-medium text-muted-foreground">(me)</span>
        </h1>
      </figure>

      <p className="mb-2 text-sm font-semibold text-muted-foreground">To</p>

      <div className="max-w-[calc(100vw-45rem)] overflow-hidden rounded-md border border-solid border-input pb-3">
        <div className="mb-3 flex h-8 items-center bg-secondary px-4 text-sm font-semibold text-muted-foreground/70">
          Type Here
        </div>
        <Editor />
      </div>

      <Attachments />
    </section>
  );
}
