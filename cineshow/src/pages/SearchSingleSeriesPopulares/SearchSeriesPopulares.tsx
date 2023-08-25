import {MovieSilgleContent,ContentAll,DivImgFilme,Title,Avaliacao,Sinopse,Right,ButtonTrailer,Center} from "./SearchSeriesPopulares.style"
import Header from "../../components/Header/Header"
import {useContext, useEffect,useRef} from "react"
import {AiOutlineStar} from "react-icons/ai"
import {BiTimeFive} from "react-icons/bi"
import {Link} from "react-router-dom"
import Context from "../../context/context"

const SearchSeriesPopulares = () => {
    
  

    const [value,setValue] = useContext(Context)

  
  return (
    <>
    <Header></Header>
    <MovieSilgleContent>
        <ContentAll>
        
               
                        <Center>
                                <DivImgFilme>
                <img src={`https://image.tmdb.org/t/p/original/${value[0].backdrop_path || value[0].poster_path}`} alt={value[0].title} />
            </DivImgFilme>
           
            <Right>
                {  
                    <>
                        <Title>{value[0].title || value[0].name}</Title>
                        <div>
                            <Avaliacao>Avaliação Dos Usuários: {Number(value[0].vote_average).toFixed(1)} <AiOutlineStar size={20}></AiOutlineStar></Avaliacao>
                        </div>
                       
                        <Sinopse>Sinopse</Sinopse>
                        <p>{value[0].overview}</p>
                    </>
                }
            </Right>

            <Link style={{display:"block",margin: "0 auto"}} target="_blank" to={`https://www.youtube.com/results?search_query=${value[0].title}+trailer`}>
        <ButtonTrailer>Trailer</ButtonTrailer>
       </Link> 
                    
                        </Center>
                        
                    
               
            
        </ContentAll>
        
        
    </MovieSilgleContent>
    </>
 
  )
}

export default SearchSeriesPopulares