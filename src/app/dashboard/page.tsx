import Image from "next/image";
import { Playground } from "../components/Playground";

export default function Dashboard() {
  return (
    <div>
      <Image
        className="m-2 dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Playground />
        </main>
      </div>
    </div>
  );
}
