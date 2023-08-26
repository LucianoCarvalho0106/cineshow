import {MovieSilgleContent,ContentAll,DivImgFilme,Title,Right,Biografia,Flex} from "./SearchPessoasPopulares.style"
import Header from "../../components/Header/Header"
import {useContext,useState,useEffect} from "react"


import Context from "../../context/context"
import api from "../../services/api"




const SearchPessoasPopulares = () => {

    const [value,] = useContext(Context)
    const [person,setPerson] = useState<any>([])
    

    
    const serchPersonDetails = async()=>{
        const data = (await api.get(`person/${value.id}?language=pt-BR`)).data
        setPerson(data)
    }

    useEffect(()=>{
        serchPersonDetails()
    },[])

    useEffect(()=>{
        serchPersonDetails()
    },[person])

  return (
    <>
    <Header></Header>
    <MovieSilgleContent>
        <ContentAll>
            <DivImgFilme>
                <img src={`https://image.tmdb.org/t/p/original/${value.profile_path}`} alt={value.name} />
            </DivImgFilme>
            <Right>
                    {
                        <>
                            <Flex>
                                <Title>{value.name}</Title>
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

export default SearchPessoasPopulares