
import {FaVideo} from "react-icons/fa"
import {Link, useNavigate} from "react-router-dom"
import { Menus, HeaderMenu,Search,ContentMenu,ButtonMenu} from "./Header.style"
import { useState } from "react"
import {BsSearch} from "react-icons/bs"
import {RiMenu4Fill} from "react-icons/ri"
import { Menu,MenuButton,MenuList,MenuItem } from "@chakra-ui/react"


const Header = () => {
   
    const navigate = useNavigate()
    const [ activeSideBar,setActiveSideBars] = useState<string>("")
    const [searchInput,setSearchInput] = useState<any>([])
    
    const showSideBar = ()=>{ activeSideBar === "" ? setActiveSideBars("activeSideBar") : setActiveSideBars("")}
  
    

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
                <button>
                    <BsSearch color={"#fff"} size={17}></BsSearch>
                </button>
        </Search>
       </ContentMenu>
       <ButtonMenu onClick={showSideBar}><RiMenu4Fill cursor="pointer" size={30}></RiMenu4Fill></ButtonMenu>
       
    </HeaderMenu>
  )
}

export default Header