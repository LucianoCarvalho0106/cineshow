import {Card} from "./CardMovie.style"


interface Props {
    src:string,
    title:string,
    id:number,
}

const CardMovie = ({src,title,id}: Props) => {
  return (
    <Card id={`${id}`}>
        <img src={src} alt="vídeo" loading="lazy" />
        <p>{title}</p>
    </Card>
  )
}

export default CardMovie