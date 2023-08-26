import {MovieSilgleContent,ContentAll,DivImgFilme,Title,Avaliacao,Sinopse,Right,ButtonTrailer} from "./MovieSingleCartaz.style"
import Header from "../../components/Header/Header"
import {useEffect} from "react"
import {AiOutlineStar} from "react-icons/ai"
import {BiTimeFive} from "react-icons/bi"
import {Link} from "react-router-dom"

const MovieSingleCartaz = () => {
    
    const dataLocal = localStorage.getItem("dataFilmeCartaz")
    const data = JSON.parse(dataLocal!)
    
    useEffect(()=>{
        console.log(data)
    })
  return (
    <>
    <Header></Header>
    <MovieSilgleContent>
        <ContentAll>
            <DivImgFilme>
                <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt={data.title} />
            </DivImgFilme>
            <Right>
                {
                    <>
                        <Title>{data.title}</Title>
                        <div>
                            <Avaliacao>Avaliação Dos Usuários: {Number(data.vote_average).toFixed(1)} <AiOutlineStar size={20}></AiOutlineStar></Avaliacao>
                        </div>
                        <div>
                            <Avaliacao><BiTimeFive size={20}></BiTimeFive> Duração: {data.runtime} minutos</Avaliacao>
                        </div>

                        <Sinopse>Sinopse</Sinopse>
                        <p>{data.overview}</p>
                    </>
                }
            </Right>
        </ContentAll>
       <Link style={{display:"block",margin: "0 auto"}} target="_blank" to={`https://www.youtube.com/results?search_query=${data.title}+trailer`}>
        <ButtonTrailer>Trailer</ButtonTrailer>
       </Link> 
        
    </MovieSilgleContent>
    </>
 
  )
}

export default MovieSingleCartaz