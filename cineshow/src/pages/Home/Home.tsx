import { useEffect,useState } from "react"
import Header from "../../components/Header/Header"
import api from "../../services/api"
import CardMovie from "../../components/CardMovie/CardMovie"

const Home = ( )=> {

  interface IEmCartaz {
    title:string,
    backdrop_path:string,
    id:number
  }
  const [emCartaz,setEmCartaz] = useState<IEmCartaz[]>([])

  useEffect(()=>{
    const getEmCartaz = async()=>{
      const data = await (await api.get("movie/now_playing/",{
        params:{language:"pt-BR",}
      })).data
      console.log(data)
      setEmCartaz(data.results)
    }

    getEmCartaz()
  },[])
  return (
    <>
        <Header></Header>
        <div>
            <div>
              <h3>Filmes Em Cartaz</h3>
              {
                emCartaz.map(filme=>{
                  return(
                    <div>
                        <CardMovie key={filme.id} src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} title={filme.title}></CardMovie>
                    </div>
                  )
                })
              }
            </div>
        </div>
    </>
  )
}

export default Home