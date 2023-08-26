import { useEffect,useState} from "react"
import Header from "../../components/Header/Header"
import api from "../../services/api"
import CardMovie from "../../components/CardMovie/CardMovie"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {HomeContent} from "./Home.style"
import { useNavigate } from "react-router-dom";
import 'swiper/css/pagination';
import {Navigation,Mousewheel,Scrollbar,Pagination,Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';



const Home = ( )=> {

  const navigate = useNavigate()
  const [slidePerView,setSliderPerView] = useState<number>(5)
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
  const [space,] = useState(0)

  

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
      const data = await (await api.get("movie/now_playing",{
        params:{language:"pt-BR"}
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

    const resizes = ()=>{

      

      if(window.innerWidth < 1281){
        setSliderPerView(5)
      }

      if(window.innerWidth < 1025){
        setSliderPerView(4)
      }
      if(window.innerWidth < 822){
        setSliderPerView(3)
      }
      if(window.innerWidth < 420){
        //setSpace(160)
        setSliderPerView(2)
      }
      
    }
    window.addEventListener("resize",resizes)
    getBemAvaliados()
    getPopulares()
    getEmCartaz()
    resizes()
    return ()=>{
      window.removeEventListener("resize",resizes)
    }
  },[])
  return (
    <>
        <Header></Header>
        <HomeContent>
            <div>
              <h3>Filmes Em Cartaz</h3>
              <Swiper 
              modules={[Navigation,Mousewheel,Scrollbar,Pagination,Autoplay]}
              slidesPerView={slidePerView} 
              spaceBetween={space}
              mousewheel= {true}
              autoplay={{
                delay: 2300,
                disableOnInteraction: false,
              }}
              >
              {
                emCartaz.map(filme=>{
                  return(
                    <SwiperSlide key={filme.id}>
                      <div onClick={()=>navigateFilme(filme.id,filme.original_title)} >
                      <CardMovie  id={filme.id} src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} title={filme.title}></CardMovie>
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
              modules={[Navigation,Mousewheel,Scrollbar,Autoplay]}
              slidesPerView={slidePerView} 
              spaceBetween={space}
              
              mousewheel= {true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
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
              modules={[Navigation,Mousewheel,Scrollbar,Autoplay]}
              slidesPerView={slidePerView} 
              spaceBetween={space}
              
              mousewheel= {true}
              autoplay={{
                delay: 2100,
                disableOnInteraction: false,
              }}
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