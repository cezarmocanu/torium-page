import Image from "next/image";

export default function Home() {
  return (
    <main className="sm:grid bg-[#0A142F]">
      <div className="relative min-h-screen">
        <div className=" m-8 grid min-h-[1000px] bg-red-700 sm:grid-cols-2">
          <div className=" m-6 gird min-h-[300px] bg-black"></div>
          <div className=" m-6 gird min-h-[300px] bg-yellow-400"></div>
          <div className=" m-6 gird min-h-[100px] min-w-[2000px] bg-green-500"></div>
        </div>
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
