import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Checkbox } from "./ui/checkbox";
import { Image, Paperclip, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmailCardProps {
  active: boolean;
}

export default function EmailCard({ active }: EmailCardProps) {
  return (
    <div
      className={cn(
        "cursor-pointer border-0 border-b border-solid border-b-input px-3.5 py-5",
        active && "border-l-4 border-l-main-color",
      )}
    >
      <div className="flex items-start gap-3">
        <figure className="flex items-center gap-2">
          <Checkbox id="terms" className="border-gray-300" />
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </figure>

        <div className="mt-1 w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-semibold text-primary">
              Brooklyn Simmons
            </h1>

            <time
              dateTime="1785-12-30"
              className="flex items-center gap-0.5 text-xs font-semibold"
            >
              <span className="text-primary/90">Today, </span>
              <span className="text-muted-foreground">10:22 AM</span>
            </time>
          </div>

          <p className="mb-1.5 mt-2.5 flex items-center justify-between text-sm font-semibold text-primary/70">
            Lorem ipsum dolor sit amet.
            <Star className="h-3.5 w-3.5 cursor-pointer fill-yellow-400 text-yellow-400" />
          </p>

          <p className="text-xs font-medium text-muted-foreground/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            modi. Optio perspiciatis dignissimos officia ipsam!
          </p>

          <div className="flex items-center justify-between">
            <div className="mt-2 flex items-center gap-2">
              <Badge
                variant="secondary"
                className="flex items-center gap-1 text-muted-foreground"
              >
                <Paperclip className="h-3.5 w-3.5" /> +2
              </Badge>
              <Badge
                variant="secondary"
                className="flex items-center gap-1 text-muted-foreground"
              >
                <Image className="h-3.5 w-3.5" /> +2
              </Badge>
            </div>

            <Badge className="flex items-center gap-1 bg-lime-200/40 hover:bg-lime-200/65">
              <span className={cn("h-2 w-2 rounded-[2px] bg-lime-500")}></span>
              <span className="text-xs font-semibold text-primary/60">
                Project
              </span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
