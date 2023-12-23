import { Search } from "lucide-react";
import FilterEmails from "./FilterEmails";
import { Input } from "./ui/input";
import EmailCard from "./EmailCard";
import { ScrollArea } from "./ui/scroll-area";

export default function FolderEmails() {
  return (
    <article className="w-[26rem] border-0 border-r border-solid border-input bg-background">
      <header className="border-0 border-b border-solid border-input px-5 pt-7">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-primary">Inbox</h2>
          <FilterEmails />
        </div>

        <form className="mb-3 mt-4 flex w-full items-center rounded-full border border-solid border-input px-3 py-2.5 text-muted-foreground">
          <Search className="h-4 w-4" />
          <Input
            type="text"
            placeholder="Search"
            className="h-0 border-0 px-2 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </form>
      </header>

      <ScrollArea className="h-[calc(100%-130.4px)] w-full">
        <main className="">
          <EmailCard active />
          <EmailCard active={false} />
          <EmailCard active={false} />
          <EmailCard active={false} />
        </main>
      </ScrollArea>
    </article>
  );
}
