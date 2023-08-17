import {Card} from "./CardMovie.style"

type Props = {
    src:string,
    title:string
}

const CardMovie = ({src,title}: Props) => {
  return (
    <Card>
        <img src={src} alt="vídeo" />
        <p>{title}</p>
    </Card>
  )
}

export default CardMovie