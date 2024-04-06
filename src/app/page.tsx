import { Section1 } from "@/features/home/components/Section1";
import { Card } from "@/features/home/components/Card"
import Image from "next/image";


  const data = [
    { title: '20+ Project', image: '', key: 'card-1' , content: 'Ceva cevatastic'},
    { title: '425+', image: '' , key: 'card-2',  content: 'Ceva cevatastic' ,},
    { title: '316', image: '' , key: 'card-3', content: 'Ceva cevatastic' ,},
    { title: 'Web Design', image: '', key: 'card-4', content: 'Ceva cevatastic' ,},
    { title: 'E-commerce', image: '', key: 'card-5', content: 'Ceva cevatastic' ,},
    { title: 'Web Hosting', image: '', key: 'card-6', content: 'Offering reliable hosting services and ongoing support to keep your website running smoothly.' ,},
  ]


export default function Home() {
  return (
    <main className="bg-[#0A142F]">
      <div className="flex flex-col gap-8 min-h-screen p-8">
        <div className="flex flex-1 gap-8 text-white">
          <Section1 />
          <div className="flex-1 ">
            <div className="gap-8 grid grid-cols-2">
            {data.map((item) =>(
                <Card
                  key={item.key}
                  image={item.image}
                  title={item.title}
                  content={item.content}
                  />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-600"></div>
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
