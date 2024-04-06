import { Section1 } from "@/features/home/components/Section1";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0A142F]">
      <div className="flex flex-col gap-8 min-h-screen p-8">
        <div className="flex flex-1 gap-8 text-white">
          <Section1 />
          <div className="flex-1 bg-yellow-300" />
        </div>
        <div className="flex-1 bg-green-600" />
      </div>
      <div className="relative min-h-[120vh]">
        <Image
          src="/page1.svg"
          alt="Next.js Logo"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="relative min-h-screen">
        <Image
          src="/page3.svg"
          alt="Next.js Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </main>
  );
}
