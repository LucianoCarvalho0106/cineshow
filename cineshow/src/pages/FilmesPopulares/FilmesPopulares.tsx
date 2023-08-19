import Header from "../../components/Header/Header"
import {useState,useEffect} from "react"
import api from "../../services/api"
import CardMovie from "../../components/CardMovie/CardMovie"
import {Grid,H3,Content,Buttons} from "./FilmesPopulares.style"
import { useNavigate } from "react-router-dom"
import {FcNext,FcPrevious} from "react-icons/fc"

const FilmesPopulares = () => {

    const navigate = useNavigate()

    interface Filme {
        title:string,
        poster_path:string,
        id:number
    }

    const [filmes,setFilmes] = useState<Filme[]>([])
    const [page,setPage] = useState<number>(1)


    const getFilmes = async()=>{
        const data = await api.get("movie/popular",{
            params:{
                language:"pt-BR",
                page}})

                const datas = data.data.results
        
                setFilmes(datas)
        console.log(datas)
    }

    const verMais = ()=>{
        setPage((page)=>page+1)
        getFilmes()
    }

    const verMenos = ()=>{
        setPage((page)=>page-1)
        getFilmes()
    }

    
    useEffect(()=>{
      
        getFilmes()

        const navigateFilme = async(id:number,original_title:string)=>{
            const data = await (await api.get(`movie/${id}-${original_title}`,{
              params:{
                language:"pt-BR"
              }
            })).data
            localStorage.setItem("dataFilme",JSON.stringify(data))
            navigate(`/movieSingle`)
          }
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
                                    <CardMovie src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} title={filme.title} id={filme.id}></CardMovie>
                                </div>
                            )
                        })
                    }
            </Grid>

             <Buttons>
                {
                    page > 1 ? (
                        <>
                             <FcPrevious size={40} onClick={verMenos} cursor={"pointer"}></FcPrevious>
                                <FcNext size ={40} onClick={verMais} cursor={"pointer"}></FcNext>
                        </>
                    ) : (<FcNext size ={40} onClick={verMais} cursor={"pointer"}></FcNext>)
                }
               
            </Buttons>  
            
        </Content>
    </>
  )
}

export default FilmesPopulares