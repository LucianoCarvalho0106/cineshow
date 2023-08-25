
import {FaVideo} from "react-icons/fa"
import {Link,useNavigate,redirect} from "react-router-dom"
import { Menus, HeaderMenu,Search,ContentMenu,ButtonMenu} from "./Header.style"
import { useState,useContext,useEffect } from "react"
import {BsSearch} from "react-icons/bs"
import {RiMenu4Fill} from "react-icons/ri"
import { Menu,MenuButton,MenuList,MenuItem } from "@chakra-ui/react"
import api from "../../services/api"
import Context from "../../context/context"



const Header = () => {

    const [value,setValue] = useContext<any>(Context)
    const navigate = useNavigate()
    
    const [ activeSideBar,setActiveSideBars] = useState<string>("")
    const [searchInput,setSearchInput] = useState<any>([])
    const [movies,setMovies] = useState<any>([])
    const [series,setSeries] = useState<any>([])
    const [pessoas,setPessoas] = useState<any>([])
    
    const showSideBar = ()=>{ activeSideBar === "" ? setActiveSideBars("activeSideBar") : setActiveSideBars("")}
  
    const handleSearch = async()=>{
       const data =  (await api.get(`search/multi?`,{params:{query:`${searchInput}`,language:"pt-BR"}})).data.results
       
       if(data[0].media_type === "person"){
        setValue(data[0])
        navigate("/SearchPessoasPopulares")
       } else if(data[0].media_type === "tv"){
        setValue(data)
        navigate("/SearchSeriesPopulares")
       }else if(data[0].media_type === "movie"){
        setValue(data)
        navigate("/searchFilmes")
       }
    }
    
    
   

  return (
    <HeaderMenu>
       <FaVideo onClick={()=>navigate("/")}  size={40}></FaVideo>
       
       <ContentMenu className={activeSideBar}>
        
       <Menus>
        <div >
            <Menu>
                <MenuButton>Filmes</MenuButton>
                
                    <MenuList>
                        <MenuItem onClick={()=>navigate("/filmesPopulares")}>Populares</MenuItem>
                        <MenuItem onClick={()=>navigate("/emCartaz")}>Em Cartaz</MenuItem>
                        <MenuItem onClick={()=>navigate("/bemAvaliados")}>Mais Bem Avaliados</MenuItem>
                    </MenuList>
                
            </Menu>
        </div>
            
            <div>
            <Menu>
                <MenuButton><span>Séries</span></MenuButton>
                <MenuList>
                    <MenuItem onClick={()=>navigate("/seriesPopulares")}>Populares</MenuItem>
                    <MenuItem onClick={()=>navigate("/seriesMaisBemAvaliadas")} >Mais Bem Avaliadas</MenuItem>
                </MenuList>
            </Menu>
            </div>
            
            <div>
                <Menu>
                    <MenuButton>Pessoas</MenuButton>
                    <MenuList>
                        <MenuItem onClick={()=>navigate("/pessoasPopulares")}>Pessoas Populares</MenuItem>
                    </MenuList>
                </Menu>
            </div>
       </Menus>
       <Search>
                <input placeholder="Filmes, Séries ou Pessoas ..." type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
                <button onClick={handleSearch}>
                    <BsSearch color={"#fff"} size={17}></BsSearch>
                </button>
        </Search>
       </ContentMenu>
       <ButtonMenu onClick={showSideBar}><RiMenu4Fill cursor="pointer" size={30}></RiMenu4Fill></ButtonMenu>
       
    </HeaderMenu>
  )
}

export default Header