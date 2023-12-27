"use client";

import { KeyboardEvent, useState } from "react";
import { Input } from "./ui/input";
import { ZodError, z } from "zod";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { X } from "lucide-react";

interface AddedMailAddressProps {
  allUsers:
    | {
        id: string | undefined;
        firstName: string | undefined;
        lastName: string | undefined;
        picture: string | undefined;
        email: string | undefined;
      }[]
    | undefined;
}

const emailSchema = z
  .string({
    invalid_type_error: "Must be a string",
    required_error: "Can't be empty",
  })
  .trim()
  .email({ message: "Invalid email address" });

export default function AddedMailAddress({ allUsers }: AddedMailAddressProps) {
  const [addedMails, setAddedMails] = useState<Set<string>>(new Set());

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    switch (e.key) {
      case "Enter":
        try {
          const value = (e.target as HTMLInputElement).value;
          const result = emailSchema.parse(value);
          setAddedMails((prev) => new Set(prev.add(result)));
          (e.target as HTMLInputElement).value = "";
        } catch (e: any) {
          return toast("Invalid email address", {
            description: "Make sure the email address is in correct format",
          });
        }
        break;
      default:
        return;
    }
  }

  function removeMail(mail: string) {
    setAddedMails((prev) => {
      prev.delete(mail);
      return new Set(prev);
    });
  }

  return (
    <div className="mb-6 border-0 border-b border-solid border-input pb-4">
      <p className="mb-2 text-sm font-semibold text-muted-foreground">To</p>

      {addedMails.size ? (
        <div className="flex max-w-[calc(100vw-45rem)] flex-wrap items-center gap-2">
          {Array.from(addedMails).map((m, idx) => {
            const u = allUsers?.find((u) => u.email === m);
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 rounded-md border border-solid border-input p-1"
              >
                {u ? (
                  <figure key={u.id} className="flex items-center gap-2">
                    <Avatar className="h-7 w-7">
                      <AvatarImage src={u?.picture ?? undefined} alt="user" />
                      <AvatarFallback>
                        {u?.firstName?.[0]}
                        {u?.lastName?.[0]}
                      </AvatarFallback>
                    </Avatar>
                    {u?.firstName && u?.lastName ? (
                      <h1 className="text-sm font-semibold text-primary">
                        {u.firstName} {u.lastName}
                      </h1>
                    ) : null}
                  </figure>
                ) : (
                  <p key={idx} className="text-sm font-medium text-primary">
                    {m}
                  </p>
                )}
                <X
                  onClick={() => removeMail(m)}
                  className="h-3 w-3 cursor-pointer text-muted-foreground"
                />
              </div>
            );
          })}
        </div>
      ) : null}

      <Input
        onKeyDown={handleKeyDown}
        autoFocus
        type="text"
        placeholder="Enter email address"
        className="mt-2 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
}
