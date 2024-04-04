import Image from "next/image";
import React from 'react';


export default function Home() {


 const cardsData =[
  {image: '', title: "Card1", content: ""  },
  {image: '', title: "Card2", content: ""  },
  {image: '', title: "Card3", content: ""  },
  {image: '', title: "Card4", content: ""  },
  {image: '', title: "Card5", content: ""  },
  {image: '', title: "Card6", content: ""  },
 ]

 //React.FC creates reusable components in React applications!!! you pass the props and the info in it as param

 const CardComponent : React.FC<{ className: string }> = ({className}) => {
  return(
    <div>
      {cardsData.map((card) => ( // .map creates a new array
        <div className={className}> 
          <img src={card.image}/>
          <div>
            <h1>{card.title}</h1>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );

 }

  return (
    <main className="sm:grid bg-[#0A142F]">
      <div className="relative min-h-screen items-stretch p-8">
        <div className="  flex-col h-full max-h-fit bg-red-600 grid-cols-2 p-12">
          <div className="grid h-3/5 grid-cols-1 sm:grid-cols-2 gap-12 pb-12">
            <div className=" min-h-[100px] flex-gap space-y-6 bg-black"/>
            <div className=" min-h-[100px] flex-gap bg-yellow-300 grid-cols-2">
              <CardComponent className="grid-cols-2"/>
            </div>
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
