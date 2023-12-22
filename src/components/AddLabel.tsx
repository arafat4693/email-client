"use client";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, MoreVertical, Plus, XCircle } from "lucide-react";
import { Button } from "./ui/button";

const labelColors = [
  "bg-lime-400",
  "bg-sky-400",
  "bg-blue-500",
  "bg-red-500",
  "bg-orange-400",
  "bg-yellow-400",
  "bg-green-500",
  "bg-purple-500",
  "bg-gray-400",
  "bg-emerald-500",
  "bg-pink-600",
  "bg-gray-700",
];

export default function AddLabel() {
  const [error, setError] = useState<boolean>(true);
  const [selectedColor, setSelectedColor] = useState<number | null>(null);

  return (
    <Popover>
      <PopoverTrigger>
        <MoreVertical className="h-5 w-5 cursor-pointer text-muted-foreground transition hover:text-primary" />
      </PopoverTrigger>
      <PopoverContent>
        <ul className="grid grid-cols-4 gap-2">
          {labelColors.map((lc, idx) => (
            <span
              key={idx}
              onClick={() =>
                setSelectedColor((prev) => (prev === idx ? null : idx))
              }
              className={cn(
                "relative h-7 w-full cursor-pointer rounded-md transition hover:opacity-70",
                lc,
              )}
            >
              {idx === selectedColor ? (
                <CheckCircle2 className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-white" />
              ) : null}
            </span>
          ))}
        </ul>

        <div className="mb-2 mt-4 space-y-2">
          <Label htmlFor="label" className="text-gray-600">
            Label
          </Label>
          <Input
            id="label"
            placeholder="Name"
            className="h-9 placeholder:text-xs"
          />
        </div>

        {error ? (
          <p className="flex select-none items-center justify-between rounded-md border border-solid border-red-500 bg-red-500/15 px-2 py-1.5 text-xs font-semibold text-red-500">
            Label already exists
            <XCircle
              onClick={() => setError(false)}
              className="h-4 w-4 cursor-pointer text-red-500"
            />
          </p>
        ) : null}

        <Button
          variant="primary"
          className="relative left-1/2 mt-3 flex -translate-x-1/2 items-center gap-1.5"
        >
          <Plus className="h-5 w-5" />
          Add
        </Button>
      </PopoverContent>
    </Popover>
  );
}
