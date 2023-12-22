import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Checkbox } from "./ui/checkbox";

export default function EmailCard() {
  return (
    <div className="border-0 border-b border-l-4 border-solid border-b-input border-l-main-color px-3.5 py-5">
      <div className="flex items-start gap-3">
        <figure className="flex items-center gap-2">
          <Checkbox id="terms" className="border-gray-300" />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </figure>

        <div className="mt-2 w-full">
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

          <p className="mb-1.5 mt-2.5 text-sm font-semibold text-primary/70">
            Lorem ipsum dolor sit amet.
          </p>

          <p className="text-xs font-medium text-muted-foreground/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            modi. Optio perspiciatis dignissimos officia ipsam!
          </p>
        </div>
      </div>
    </div>
  );
}
