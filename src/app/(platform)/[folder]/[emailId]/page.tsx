import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import React from "react";

export default function email() {
  return (
    <main>
      <div className="flex items-center justify-between border-0 border-b border-solid border-input px-3.5 py-3">
        <ChevronLeft className="h-4 w-4 cursor-pointer text-muted-foreground" />
        <span className="text-xs font-semibold text-primary">1 0f 120</span>
        <ChevronRight className="h-4 w-4 cursor-pointer text-muted-foreground" />
      </div>

      <div className="flex items-center justify-between border-0 border-b border-solid border-input px-3.5 py-3">
        <figure className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <figcaption>
            <h1 className="text-base font-semibold text-primary">
              Brooklyn Simmons
            </h1>
            <p className="text-xs font-medium text-muted-foreground/60">
              something@gmail.com
            </p>
          </figcaption>
        </figure>

        <div className="flex items-center justify-between gap-2">
          <time
            dateTime="1785-12-30"
            className="flex items-center gap-0.5 text-xs font-semibold"
          >
            <span className="text-primary/90">Today, </span>
            <span className="text-muted-foreground">10:22 AM</span>
          </time>

          <Star className="h-3.5 w-3.5 cursor-pointer fill-yellow-400 text-yellow-400" />
        </div>
      </div>
    </main>
  );
}
