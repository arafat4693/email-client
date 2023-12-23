import Image from "next/image";

export default function EmailFolder() {
  return (
    // <div className="h-[calc(100%-66.4px)] w-full bg-[url('/assets/bgImg.jpg')] bg-cover bg-no-repeat"></div>
    <figure className="relative h-[calc(100%-66.4px)] w-full">
      <Image
        src="/assets/empty.png"
        fill
        className="object-contain dark:hidden"
        alt="Documents"
      />
      <Image
        src="/assets/empty-dark.png"
        fill
        className="hidden object-contain dark:block"
        alt="Documents"
      />
    </figure>
  );
}
