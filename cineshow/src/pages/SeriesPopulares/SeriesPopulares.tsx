import Header from "../../components/Header/Header"
import {useState,useEffect,useRef} from "react"
import api from "../../services/api"
import CardMovie from "../../components/CardMovie/CardMovie"
import {Grid,H3,Content,Buttons} from "./SeriesPopulares.style"
import { useNavigate } from "react-router-dom"
import {FcNext,FcPrevious} from "react-icons/fc"

const SeriesPopulares = () => {

    const navigate = useNavigate()
    const ref = useRef<number>(JSON.parse(localStorage.getItem("SeriesPopulares")!) || 1)
    

    interface Filme {
        name:string,
        poster_path:string,
        id:number,
        original_name:string
    }

    const [filmes,setFilmes] = useState<Filme[]>([])


    const getFilmes = async()=>{
        const data = await api.get("tv/popular",{
            params:{
                language:"pt-BR",
                page: JSON.parse(localStorage.getItem("SeriesPopulares")!) || ref.current,
            }})

                const datas = data.data.results
                setFilmes(datas)
    }

    const verMais = ()=>{
        ref.current +=1
        localStorage.setItem("SeriesPopulares",JSON.stringify(ref.current))
       const pageJSON:number = JSON.parse(localStorage.getItem("SeriesPopulares")!)
        ref.current = pageJSON 
        
        getFilmes()
    }

    const verMenos = ()=>{
        ref.current -=1
        localStorage.setItem("SeriesPopulares",JSON.stringify(ref.current))
        const pageJSON:number = JSON.parse(localStorage.getItem("SeriesPopulares")!)
        ref.current = pageJSON 
        
        getFilmes()
    }

    
    const navigateFilme = async(id:number,original_title:string)=>{
        const data = await (await api.get(`tv/${id}-${original_title}`,{
          params:{
            language:"pt-BR",
          }
        })).data
        localStorage.setItem("dataSeriesPopulares",JSON.stringify(data))
        navigate(`/movieSingleSeriesPopulares`)
      }
    
    useEffect(()=>{
      
        getFilmes()
        
    },[])
  return (
    <>
        <Content>
            <Header></Header>
            <H3>Filmes Populares</H3>
            
            <Grid>
                {
                        filmes.map(filme=>{
                            return(
                                <div key={filme.id}>
                                    <div onClick={()=>navigateFilme(filme.id,filme.original_name)}>
                                    <CardMovie src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} title={filme.name} id={filme.id}></CardMovie>
                                    </div>
                                </div>
                            )
                        })
                    }
            </Grid>

             <Buttons>
                {
                    JSON.parse(localStorage.getItem("SeriesPopulares")!)  > 1 ? (
                        <>
                             <FcPrevious size={40} onClick={verMenos} cursor={"pointer"}></FcPrevious>
                                <FcNext size ={40} onClick={verMais} cursor={"pointer"}></FcNext>
                        </>
                    ) : <FcNext size ={40} onClick={verMais} cursor={"pointer"}></FcNext>
                }
               
            </Buttons>  
            <p style={{margin:"0em 0 1em 0"}}>Página: {JSON.parse(localStorage.getItem("SeriesPopulares")!) || ref.current}</p>
        </Content>
    </>
  )
}

export default SeriesPopulares