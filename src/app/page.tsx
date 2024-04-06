import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0A142F]">
      <div className="flex flex-col gap-8 min-h-screen p-8">
        <div className="flex flex-1 gap-8 text-white">
          <div className="flex-1 space-y-8">
            <h1 className="text-6xl font-medium">Design. Think.</h1>
            <h1 className="text-6xl font-medium">Solve. Develop.</h1>
            <p>
              Embark on a journey of inovation with us. Transform ideas into
              digital solutions that redefine the landscape. Dive into coding
              with a purpose, crafting experiences and solving problems. Start
              building the future today.
            </p>
          </div>
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
