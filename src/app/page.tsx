import Image from "next/image";

export default function Home() {
  return (
    <main className="sm:grid bg-[#0A142F]">
      <div className="relative min-h-screen items-stretch p-8">
        <div className="  flex-col h-full max-h-fit bg-red-600 grid-cols-2 p-12">
          <div className="grid h-3/5 grid-cols-1 sm:grid-cols-2 gap-12 pb-12">
            <div className=" min-h-[100px] flex-gap space-y-6 bg-black p-12 ">
              <div className="text-6xl sm:text-md font-medium flex gap-6 text-right">
                Design. Think.
                </div>
              <div className="text-6xl  font-medium flex gap-6 text-right">
                Solve. Develop.
              </div>
              <div className="text">
                Embark on a journey of inovation with us. Transform ideas into digital solutions that redefine the landscape. 
                Dive into coding with a purpose, crafting experiences and solving problems. Start building the future today.
              </div>
            </div>
            <div className=" min-h-[100px] flex-gap bg-yellow-300 "/>
          </div>
          <div className="min-h-[100px] h-2/5 flex-gap bg-green-600 "/>
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
