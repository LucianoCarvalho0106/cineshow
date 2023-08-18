import {MovieSilgleContent,ContentAll,DivImgFilme,Title,Avaliacao,Sinopse,Right,Footer,Elenco} from "./MovieSingle.style"
import Header from "../../components/Header/Header"
import Context from "../../context/context"
import {useContext,useEffect} from "react"
import {AiOutlineStar} from "react-icons/ai"
import {BiTimeFive} from "react-icons/bi"

const MovieSingle = () => {
    const [data,setData] = useContext(Context)
    useEffect(()=>{
        console.log(data)
    },[])
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
        <Footer>
            <Elenco>Elenco Principal</Elenco>
        </Footer>
        
    </MovieSilgleContent>
    </>
 
  )
}

export default MovieSingle