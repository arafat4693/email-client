import { cn } from "@/lib/utils";
import Logo from "./Logo";
import {
  Inbox,
  Star,
  Forward,
  File,
  Paperclip,
  AlertCircle,
  Trash2,
  ArchiveRestore,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import AddLabel from "./AddLabel";

const items = [
  {
    label: "Inbox",
    Icon: Inbox,
  },
  {
    label: "Starred",
    Icon: Star,
  },
  {
    label: "Sent",
    Icon: Forward,
  },
  {
    label: "Draft",
    Icon: File,
  },
  {
    label: "Attachment",
    Icon: Paperclip,
  },
  {
    label: "Spam",
    Icon: AlertCircle,
  },
  {
    label: "Deleted",
    Icon: Trash2,
  },
  {
    label: "Archive",
    Icon: ArchiveRestore,
  },
];

const labels = [
  {
    color: "bg-purple-600",
    title: "Inquiry",
    totalEmails: 22,
  },
  {
    color: "bg-lime-600",
    title: "Project",
    totalEmails: 8,
  },
  {
    color: "bg-blue-600",
    title: "Feedback",
    totalEmails: 12,
  },
];

export default function Sidebar() {
  return (
    <ScrollArea className="relative w-[17rem] border-0 border-r border-solid border-gray-200/70 bg-gray-100/50">
      <aside className="min-h-screen">
        <div className="border-0 border-b border-solid border-gray-200/70 py-6 pl-5">
          <Logo />
        </div>

        <ul className="flex flex-col gap-5 border-0 border-b border-solid border-gray-200/70 py-6">
          {items.map((itm, idx) => (
            <Sidebar.Item key={idx} {...itm} active={idx === 0} />
          ))}
        </ul>

        <Button
          variant="primary"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full px-7 capitalize"
        >
          <Mail className="h-5 w-5" />
          compose new mail
        </Button>

        <div className="px-5 pb-24 pt-6">
          <p className="mb-6 flex items-center justify-between text-sm font-bold text-gray-700">
            Label
            <AddLabel />
          </p>

          <ul className="flex flex-col gap-4">
            {labels.map((lbl, idx) => (
              <Sidebar.Label key={idx} {...lbl} />
            ))}
          </ul>
        </div>
      </aside>
    </ScrollArea>
  );
}

Sidebar.Item = ({
  label,
  Icon,
  active,
}: (typeof items)[number] & { active: boolean }) => {
  return (
    <li
      className={cn(
        "group flex w-full cursor-pointer items-center justify-between px-5",
        active && "border-main-color border-0 border-l-4 border-solid",
      )}
    >
      <div className="flex items-center gap-2">
        <Icon
          className={cn(
            "group-hover:text-main-color h-5 w-5 text-gray-400 transition",
            active && "text-main-color",
          )}
        />
        <span
          className={cn(
            "group-hover:text-main-color text-sm font-bold text-gray-700 transition",
            active && "text-main-color",
          )}
        >
          {label}
        </span>
      </div>

      <Badge variant={active ? "primary" : "outline"}>20</Badge>
    </li>
  );
};

Sidebar.Label = ({ color, title, totalEmails }: (typeof labels)[number]) => {
  return (
    <li className="flex w-full cursor-pointer items-center justify-between">
      <div className="flex items-center gap-2">
        <span className={cn("h-2 w-2 rounded-[2px]", color)}></span>
        <span className="text-sm font-semibold text-gray-600">{title}</span>
      </div>
      <p className="text-xs font-semibold text-gray-400">{totalEmails}</p>
    </li>
  );
};
