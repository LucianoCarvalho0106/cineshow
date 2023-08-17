
import {FaVideo} from "react-icons/fa"
import {Link} from "react-router-dom"
import { Menu, HeaderMenu,Search,ContentMenu,ButtonMenu} from "./Header.style"
import { useState } from "react"
import {BsSearch} from "react-icons/bs"
import { Switch } from '@chakra-ui/react'
import {RiMenu4Fill} from "react-icons/ri"


const Header = () => {
    const [ activeFilmes,setActiveFilmes] = useState<string>("")
    const [ activeSeries,setActiveSeries] = useState<string>("")
    const [ activePessoas,setActivePessoas] = useState<string>("")
    const [ activeSideBar,setActiveSideBars] = useState<string>("")
    const [searchInput,setSearchInput] = useState<any>([])
    

    const showMenuFilmes = ()=>activeFilmes === "" ? setActiveFilmes("activeMenu") : setActiveFilmes("")
    const showMenuSeries = ()=>activeSeries === "" ? setActiveSeries("activeMenu") : setActiveSeries("")
    const showMenuPessoas = ()=>activePessoas === "" ? setActivePessoas("activeMenu") : setActivePessoas("")

    const showSideBar = ()=>activeSideBar === "" ? setActiveSideBars("activeSideBar") : setActiveSideBars("")


  return (
    <HeaderMenu>
       <FaVideo size={40}></FaVideo>
       
       <ContentMenu className={activeSideBar}>
       <Menu>
        <div>
        <span onClick={showMenuFilmes} id="spanFilmes">Filmes</span>
            <nav id="filmes" className={activeFilmes}>
                <Link to=""><li>Populares</li></Link>
                <Link to=""><li>Em Cartaz</li></Link>
                <Link to=""><li>Mais Bem Avaliados</li></Link>
            </nav>
        </div>
            
            <div>
                <span onClick={showMenuSeries} id="spanSeries">Séries</span>
                <nav id="series" className={activeSeries}>
                    <Link to=""><li>Populares</li></Link>
                    <Link to=""><li>Mais Bem Avaliadas</li></Link>
                </nav>
            </div>
            
            <div>
                <span onClick={showMenuPessoas} id="spanPessoas">Pessoas</span>
                <nav id="pessoas" className={activePessoas}>
                    <Link to=""><li>Pessoas Populares</li></Link>
                </nav>
            </div>
       </Menu>
       <Search>
                <input placeholder="Filmes, Séries ou Pessoas ..." type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
                <button>
                    <BsSearch color={"#fff"} size={17}></BsSearch>
                </button>
        </Search>
        <Switch  size='lg' />
       </ContentMenu>
       <ButtonMenu onClick={showSideBar}><RiMenu4Fill cursor="pointer" size={30}></RiMenu4Fill></ButtonMenu>
       
    </HeaderMenu>
  )
}

export default Header