import Image from "next/image";

export default function Logo() {
  return (
    <figure className="flex items-center gap-3.5">
      <Image src="/assets/logo.svg" alt="logo" width={30} height={30} />
      <figcaption className="text-main-color text-3xl font-semibold">
        MailBox
      </figcaption>
    </figure>
  );
}
