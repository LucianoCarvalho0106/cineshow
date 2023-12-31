import Header from "../../components/Header/Header"
import {useState,useEffect,useRef} from "react"
import api from "../../services/api"
import CardMovie from "../../components/CardMovie/CardMovie"
import {Grid,H3,Content,Buttons} from "./FilmesBemAvaliados.style"
import { useNavigate } from "react-router-dom"
import {FcNext,FcPrevious} from "react-icons/fc"

const FilmesBemAvaliados = () => {

    const navigate = useNavigate()
    const ref = useRef<number>(JSON.parse(localStorage.getItem("pageBemAvaliados")!) || 1)
    

    interface Filme {
        title:string,
        poster_path:string,
        id:number,
        original_title:string
    }

    const [filmes,setFilmes] = useState<Filme[]>([])


    const getFilmes = async()=>{
        const data = await api.get("movie/top_rated",{
            params:{
                language:"pt-BR",
                page: JSON.parse(localStorage.getItem("pageBemAvaliados")!) || ref.current,
            }})

                const datas = data.data.results
                setFilmes(datas)
    }

    const verMais = ()=>{
        ref.current +=1
        localStorage.setItem("pageBemAvaliados",JSON.stringify(ref.current))
       const pageJSON:number = JSON.parse(localStorage.getItem("pageBemAvaliados")!)
        ref.current = pageJSON 
        
        getFilmes()
    }

    const verMenos = ()=>{
        ref.current -=1
        localStorage.setItem("pageBemAvaliados",JSON.stringify(ref.current))
        const pageJSON:number = JSON.parse(localStorage.getItem("pageBemAvaliados")!)
        ref.current = pageJSON 
        
        getFilmes()
    }

    
    const navigateFilme = async(id:number,original_title:string)=>{
        const data = await (await api.get(`movie/${id}-${original_title}`,{
          params:{
            language:"pt-BR",
          }
        })).data
        localStorage.setItem("dataBemAvaliados",JSON.stringify(data))
        navigate(`/movieSingleBemAvaliados`)
      }
    
    useEffect(()=>{
      
        getFilmes()
        
    },[])
  return (
    <>
        <Content>
            <Header></Header>
            <H3>Filmes Mais Bem Avaliados</H3>
            
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
                    JSON.parse(localStorage.getItem("pageBemAvaliados")!)  > 1 ? (
                        <>
                             <FcPrevious size={40} onClick={verMenos} cursor={"pointer"}></FcPrevious>
                                <FcNext size ={40} onClick={verMais} cursor={"pointer"}></FcNext>
                        </>
                    ) : <FcNext size ={40} onClick={verMais} cursor={"pointer"}></FcNext>
                }
               
            </Buttons>  
            <p style={{margin:"0em 0 1em 0"}}>Página: {JSON.parse(localStorage.getItem("pageBemAvaliados")!) || ref.current}</p>
        </Content>
    </>
  )
}

export default FilmesBemAvaliados