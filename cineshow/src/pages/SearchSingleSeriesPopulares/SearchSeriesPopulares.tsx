import {MovieSilgleContent,ContentAll,DivImgFilme,Title,Avaliacao,Sinopse,Right,ButtonTrailer} from "./SearchSeriesPopulares.style"
import Header from "../../components/Header/Header"
import {useContext, useEffect,useRef} from "react"
import {AiOutlineStar} from "react-icons/ai"
import {BiTimeFive} from "react-icons/bi"
import {Link} from "react-router-dom"
import Context from "../../context/context"

const SearchSeriesPopulares = () => {
    
    const dataLocal = localStorage.getItem("dataSeriesPopulares")
    const data = JSON.parse(dataLocal!)

    const [value,setValue] = useContext(Context)

    useEffect(()=>{
        console.log(data)
    },[])
  return (
    <>
    <Header></Header>
    <MovieSilgleContent>
        <ContentAll>
            <DivImgFilme>
                <img src={`https://image.tmdb.org/t/p/original/${value.backdrop_path}`} alt={value.title} />
            </DivImgFilme>
            <Right>
                {
                    <>
                        <Title>{value.name}</Title>
                        <div>
                            <Avaliacao>Avaliação Dos Usuários: {Number(value.vote_average).toFixed(1)} <AiOutlineStar size={20}></AiOutlineStar></Avaliacao>
                        </div>
                        <div>
                            <Avaliacao><BiTimeFive size={20}></BiTimeFive> Duração: {value.runtime} minutos</Avaliacao>
                        </div>

                        <Sinopse>Sinopse</Sinopse>
                        <p>{value.overview}</p>
                    </>
                }
            </Right>
        </ContentAll>
       <Link style={{display:"block",margin: "0 auto"}} target="_blank" to={`https://www.youtube.com/results?search_query=${value.name}+trailer`}>
        <ButtonTrailer>Trailer</ButtonTrailer>
       </Link> 
        
    </MovieSilgleContent>
    </>
 
  )
}

export default SearchSeriesPopulares