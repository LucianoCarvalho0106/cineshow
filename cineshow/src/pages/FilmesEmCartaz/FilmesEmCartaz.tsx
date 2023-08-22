import Header from "../../components/Header/Header"
import {useState,useEffect,useRef} from "react"
import api from "../../services/api"
import CardMovie from "../../components/CardMovie/CardMovie"
import {Grid,H3,Content,Buttons} from "./FilmesEmCartaz.style"
import { useNavigate } from "react-router-dom"
import {FcNext,FcPrevious} from "react-icons/fc"

const FilmesCartaz = () => {

    const navigate = useNavigate()
    const ref = useRef<number>(JSON.parse(localStorage.getItem("page")!) || 1)
    

    interface Filme {
        title:string,
        poster_path:string,
        id:number,
        original_title:string
    }

    const [filmes,setFilmes] = useState<Filme[]>([])


    const getFilmes = async()=>{
        const data = await api.get("movie/now_playing",{
            params:{
                language:"pt-BR",
                page: JSON.parse(localStorage.getItem("page")!) || ref.current,
            }})

                const datas = data.data.results
                setFilmes(datas)
    }

    const verMais = ()=>{
        ref.current +=1
        localStorage.setItem("page",JSON.stringify(ref.current))
       const pageJSON:number = JSON.parse(localStorage.getItem("page")!)
        ref.current = pageJSON 
        
        getFilmes()
    }

    const verMenos = ()=>{
        ref.current -=1
        localStorage.setItem("page",JSON.stringify(ref.current))
        const pageJSON:number = JSON.parse(localStorage.getItem("page")!)
        ref.current = pageJSON 
        
        getFilmes()
    }

    
    const navigateFilme = async(id:number,original_title:string)=>{
        const data = await (await api.get(`movie/${id}-${original_title}`,{
          params:{
            language:"pt-BR",
          }
        })).data
        localStorage.setItem("dataFilmeCartaz",JSON.stringify(data))
        navigate(`/movieSingleCartaz`)
      }
    
    useEffect(()=>{
      
        getFilmes()
        
    },[])
  return (
    <>
        <Content>
            <Header></Header>
            <H3>Filmes Em Cartaz</H3>
            
            <Grid>
                {
                        filmes.map(filme=>{
                            return(
                                <div key={filme.id}>
                                    <div onClick={()=>navigateFilme(filme.id,filme.original_title)}>
                                    <CardMovie src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} title={filme.title} id={filme.id}></CardMovie>
                                    </div>
                                </div>
                            )
                        })
                    }
            </Grid>

             <Buttons>
                {
                    JSON.parse(localStorage.getItem("page")!)  > 1 ? (
                        <>
                             <FcPrevious size={40} onClick={verMenos} cursor={"pointer"}></FcPrevious>
                                <FcNext size ={40} onClick={verMais} cursor={"pointer"}></FcNext>
                        </>
                    ) : <FcNext size ={40} onClick={verMais} cursor={"pointer"}></FcNext>
                }
               
            </Buttons>  
            <p style={{margin:"0em 0 1em 0"}}>Página: {JSON.parse(localStorage.getItem("page")!) || ref.current}</p>
        </Content>
    </>
  )
}

export default FilmesCartaz