import {FC} from 'react';

interface Props {
  title: string;
  image: string;
  content: string;
}

export const Card: FC<Props> = ({title, image, content,}) => {
  return(
    <div className='flex flex-1 items-center gap-6'>
      <img className='bg-red-400 h-[50px] w-[50px] items-start rounded-md' src={image}/>
      <div className='flex-1'>
        <h1 className='text-xl'>{title}</h1>
        <p>{content}</p>
      </div>
  </div>
  );
}