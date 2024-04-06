import { Section1 } from "@/features/home/components/Section1";
import { Card } from "@/features/home/components/Card"
import Image from "next/image";


  const data = [
    { title: '20+ Project', image: '', content: 'Ceva cevatastic' ,},
    { title: '425+', image: '', content: 'Ceva cevatastic' ,},
    { title: '316', image: '', content: 'Ceva cevatastic' ,},
    { title: 'Web Design', image: '', content: 'Ceva cevatastic' ,},
    { title: 'E-commerce', image: '', content: 'Ceva cevatastic' ,},
    { title: 'Web Hosting', image: '', content: 'Offering reliable hosting services and ongoing support to keep your website running smoothly.' ,},
  ]


export default function Home() {
  return (
    <main className="bg-[#0A142F]">
      <div className="flex flex-col gap-8 min-h-screen p-8">
        <div className="flex flex-1 gap-8 text-white">
          <Section1 />
          <div className="flex-1 ">
            <div className="gap-8 grid grid-cols-2">
            {data.map(item =>(
                <Card
                  image = {item.image}
                  title = {item.title}
                  content = {item.content}
                  />
              ))}
            </div>
          </div>
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
