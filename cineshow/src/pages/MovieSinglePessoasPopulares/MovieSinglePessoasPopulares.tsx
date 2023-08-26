import {MovieSilgleContent,ContentAll,DivImgFilme,Title,Right,Biografia,Flex} from "./MovieSinglePessoasPopulares.style"
import Header from "../../components/Header/Header"
import {useEffect,useState} from "react"
import api from "../../services/api"



const MovieSinglePessoasPopulares = () => {

   
    const dataLocal = localStorage.getItem("dataPessoasPopulares")
    const data = JSON.parse(dataLocal!)

    const [person,setPerson] = useState<any>([])
    

    
    useEffect(()=>{
       const getPerson = async(id:number)=>{
            const data = (await api.get(`person/${id}`,{params:{language:"pt-BR"}})).data
            setPerson(data)
       }
       
       getPerson(data.id)
       
    },[])

  return (
    <>
    <Header></Header>
    <MovieSilgleContent>
        <ContentAll>
            <DivImgFilme>
                <img src={`https://image.tmdb.org/t/p/original/${data.profile_path}`} alt={data.name} />
            </DivImgFilme>
            <Right>
                    {
                        <>
                            <Flex>
                                <Title>{data.name}</Title>
                                <Biografia>
                                    {person.biography}
                                </Biografia>
                            </Flex>
                        </>
                    }

            </Right>
            
        </ContentAll>
    </MovieSilgleContent>
    </>
 
  )
}

export default MovieSinglePessoasPopulares