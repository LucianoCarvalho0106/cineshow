import { useEffect,useState} from "react"
import Header from "../../components/Header/Header"
import api from "../../services/api"
import CardMovie from "../../components/CardMovie/CardMovie"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {HomeContent} from "./Home.style"
import { useNavigate } from "react-router-dom";
import 'swiper/css/pagination';
import {Navigation,Mousewheel,Scrollbar} from 'swiper/modules';


const Home = ( )=> {

  const navigate = useNavigate()
  const [slidePerView,setSlidePerView] = useState<number>(4)
  interface IEmCartaz {
    title:string,
    original_title:string
    backdrop_path:string,
    poster_path:string,
    id:number
  }
  const [emCartaz,setEmCartaz] = useState<IEmCartaz[]>([])
  const [populares,setPopulares] = useState<IEmCartaz[]>([])
  const [bemAvaliados,setBemAvaliados] = useState<IEmCartaz[]>([])

  

  const navigateFilme = async(id:number,original_title:string)=>{
    const data = await (await api.get(`movie/${id}-${original_title}`,{
      params:{
        language:"pt-BR"
      }
    })).data
    localStorage.setItem("dataFilme",JSON.stringify(data))
    navigate(`/movieSingle`)
  }

  useEffect(()=>{
    const getEmCartaz = async()=>{
      const data = await (await api.get("movie/now_playing/",{
        params:{language:"pt-BR",page:1}
      })).data

      const slice = data.results.slice(0,10)
      setEmCartaz(slice)
    }

    const getPopulares = async()=>{
      const data = (await api.get("movie/popular",{params:{ language:"pt-BR",page:2}})).data
      const slice = data.results.slice(0,10)
      setPopulares(slice)
      
    }

    const getBemAvaliados = async()=>{
      const data = (await api.get("movie/top_rated",{params:{ language:"pt-BR"}})).data
      const slice = data.results.slice(0,10)
      setBemAvaliados(slice)
      
    }

    const resize = ()=>{
      if(window.innerWidth < 1200){
        setSlidePerView(3)
      } else if(window.innerWidth > 1200){
        setSlidePerView(4)
      }
    }
    window.addEventListener("resize",resize)
    getBemAvaliados()
    getPopulares()
    getEmCartaz()
    resize()
    return ()=>{
      window.removeEventListener("resize",resize)
    }
  },[])
  return (
    <>
        <Header></Header>
        <HomeContent>
            <div>
              <h3>Filmes Em Cartaz</h3>
              <Swiper 
              modules={[Navigation,Mousewheel,Scrollbar]}
              slidesPerView={slidePerView} 
              spaceBetween={-300}
              navigation
              mousewheel= {true}
              >
              {
                emCartaz.map(filme=>{
                  return(
                    <SwiperSlide key={filme.id}>
                      <div onClick={()=>navigateFilme(filme.id,filme.original_title)} >
                      <CardMovie  id={filme.id} src={`https://image.tmdb.org/t/p/original/${filme.poster_path
}`} title={filme.title}></CardMovie>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
              </Swiper>
            </div>

            <div>
              <h3>Populares</h3>
              <Swiper 
              modules={[Navigation,Mousewheel,Scrollbar]}
              slidesPerView={slidePerView} 
              spaceBetween={-290}
              navigation
              mousewheel= {true}
              >
              {
                populares.map((filme)=>{
                  return(
                    <SwiperSlide key={filme.id}>
                      <div onClick={()=>navigateFilme(filme.id,filme.original_title)}>
                        <CardMovie    id={filme.id} src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} title={filme.title}></CardMovie>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
              </Swiper>
            </div>

            <div>
              <h3>Mais Bem Avaliados</h3>
              <Swiper 
              modules={[Navigation,Mousewheel,Scrollbar]}
              slidesPerView={slidePerView} 
              spaceBetween={-290}
              navigation
              mousewheel= {true}
              >
              {
                bemAvaliados.map((filme)=>{
                  return(
                    <SwiperSlide key={filme.id}>
                      <div onClick={()=>navigateFilme(filme.id,filme.original_title)}>
                         <CardMovie  id={filme.id} src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} title={filme.title}></CardMovie>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
              </Swiper>
            </div>
        </HomeContent>
    </>
  )
}

export default Home