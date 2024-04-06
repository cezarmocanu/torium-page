import {FC} from 'react';

interface Props {
  title: string;
  image: string;
  content: string;
}

export const Card: FC<Props> = ({title, image, content,}) => {
  return(
    <div className='flex-1'>
    <img className='bg-red-400 h-[50px] w-[50px]' src={image}/>
    <h1 className='text-xl'>{title}</h1>
    <p>{content}</p>
  </div>
  );
}