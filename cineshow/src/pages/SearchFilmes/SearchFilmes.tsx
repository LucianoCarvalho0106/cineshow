import {MovieSilgleContent,ContentAll,DivImgFilme,Title,Avaliacao,Sinopse,Right,ButtonTrailer,Center} from "./SearchFilmes.style"
import Header from "../../components/Header/Header"
import {useContext, useEffect,useRef} from "react"
import {AiOutlineStar} from "react-icons/ai"
import {BiTimeFive} from "react-icons/bi"
import {Link} from "react-router-dom"
import Context from "../../context/context"

const SearchFilmes = () => {
    
    

    const [value,setValue] = useContext(Context)

  return (
    <>
    <Header></Header>
    <MovieSilgleContent>
        <ContentAll>
            {
                value.map((item:any)=>{
                    return(
                        <Center>
                                <DivImgFilme>
                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`} alt={item.title} />
            </DivImgFilme>
           
            <Right>
                {  
                    <>
                        <Title>{item.title || item.name}</Title>
                        <div>
                            <Avaliacao>Avaliação Dos Usuários: {Number(item.vote_average).toFixed(1)} <AiOutlineStar size={20}></AiOutlineStar></Avaliacao>
                        </div>
                        <div>
                            <Avaliacao>Data de Lançamento: {String(item.release_date).split("-").reverse().join("/")}</Avaliacao>
                        </div>

                        <Sinopse>Sinopse</Sinopse>
                        <p>{item.overview}</p>
                    </>
                }
            </Right>

            <Link style={{display:"block",margin: "0 auto"}} target="_blank" to={`https://www.youtube.com/results?search_query=${item.title}+trailer`}>
        <ButtonTrailer>Trailer</ButtonTrailer>
       </Link> 
                    
                        </Center>
                        
                    )
                })
            }
            
        </ContentAll>
        
      
    </MovieSilgleContent>
    </>
 
  )
}

export default SearchFilmes