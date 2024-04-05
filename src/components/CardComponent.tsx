import {FC} from 'react';

interface cardsData {
  title: string;
  image: string;
  content: string;
}

const Card: FC<cardsData> = ({title, image, content,}) => {
  return(
    <div>
    <img src={image}/>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
  );
}


 //React.FC creates reusable components in React applications!!! you pass the props and the info in it as param

const CardComponent: FC<cardsData> = () => {

  const data = [
    { title: 'Mau pau mau', image: '', content: 'Ceva cevatastic' , },
    { title: 'Mau pau mau', image: '', content: 'Ceva cevatastic' , },
    { title: 'Mau pau mau', image: '', content: 'Ceva cevatastic' , },
    { title: 'Mau pau mau', image: '', content: 'Ceva cevatastic' , },
    { title: 'Mau pau mau', image: '', content: 'Ceva cevatastic' , },
    { title: 'Mau pau mau', image: '', content: 'Ceva cevatastic' , },
  ]

  return(
  <div>
    {data.map(item =>(
      <Card
        image = {item.image}
        title = {item.title}
        content = {item.content}

      />
    ))}
  </div>
  );

 }

 export default CardComponent;