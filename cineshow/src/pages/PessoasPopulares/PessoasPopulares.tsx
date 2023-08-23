import Header from "../../components/Header/Header"
import {useState,useEffect,useRef} from "react"
import api from "../../services/api"
import CardMovie from "../../components/CardMovie/CardMovie"
import {Grid,H3,Content,Buttons} from "./PessoasPopulares.style"
import { useNavigate } from "react-router-dom"
import {FcNext,FcPrevious} from "react-icons/fc"

const PessoasPopulares = () => {

    const navigate = useNavigate()
    const ref = useRef<number>(JSON.parse(localStorage.getItem("PessoasPopulares")!) || 1)
    

    interface Filme {
        name:string,
        profile_path:string,
        id:number,
        original_name:string,
    }

    const [filmes,setFilmes] = useState<Filme[]>([])


    const getFilmes = async()=>{
        const data = await api.get("person/popular",{
            params:{
                language:"pt-BR",
                page: JSON.parse(localStorage.getItem("PessoasPopulares")!) || ref.current,
            }})

                const datas = data.data.results
                setFilmes(datas)
    }

    const verMais = ()=>{
        ref.current +=1
        localStorage.setItem("PessoasPopulares",JSON.stringify(ref.current))
       const pageJSON:number = JSON.parse(localStorage.getItem("PessoasPopulares")!)
        ref.current = pageJSON 
        
        getFilmes()
    }

    const verMenos = ()=>{
        ref.current -=1
        localStorage.setItem("PessoasPopulares",JSON.stringify(ref.current))
        const pageJSON:number = JSON.parse(localStorage.getItem("PessoasPopulares")!)
        ref.current = pageJSON 
        
        getFilmes()
    }

    
    const navigateFilme = async(id:number,name:string)=>{
        const data = await (await api.get(`person/${id}-${name}`,{
          params:{
            language:"pt-BR",
          }
        })).data
        localStorage.setItem("dataPessoasPopulares",JSON.stringify(data))
        navigate(`/movieSinglePessoasPopulares`)
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
                                    <CardMovie src={`https://image.tmdb.org/t/p/w500/${filme.profile_path}`} title={filme.name} id={filme.id}></CardMovie>
                                    </div>
                                </div>
                            )
                        })
                    }
            </Grid>

             <Buttons>
                {
                    JSON.parse(localStorage.getItem("PessoasPopulares")!)  > 1 ? (
                        <>
                             <FcPrevious size={40} onClick={verMenos} cursor={"pointer"}></FcPrevious>
                                <FcNext size ={40} onClick={verMais} cursor={"pointer"}></FcNext>
                        </>
                    ) : <FcNext size ={40} onClick={verMais} cursor={"pointer"}></FcNext>
                }
               
            </Buttons>  
            <p style={{margin:"0em 0 1em 0"}}>Página: {JSON.parse(localStorage.getItem("PessoasPopulares")!) || ref.current}</p>
        </Content>
    </>
  )
}

export default PessoasPopulares