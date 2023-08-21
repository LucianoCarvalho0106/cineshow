import {styled} from "styled-components"

export const MenuListStyle = styled.div`
    color: yellow;
`


export const HeaderMenu = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    padding: 1em 3em;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    box-shadow: 0px 21px 15px -3px rgba(0,0,0,0.1);
    z-index:10;
    
    .activeSideBar{
        width: 60%;
    }

`

export const Menus = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 3em;
    position: relative;

    @media (max-width:821px){
        flex-direction: column;
        & span {
            color:#fff;
        }
    }
    
    `
export const Search = styled.div`
    display: flex;
    align-items: center;
    gap:1em;
    & input{
        padding: 3px;
        min-width: 250px;
        outline: none;
        border: 1px solid #424242;
        border-radius:5px;
        height: 2.3em;
    }
    & button{
        padding: .7em;
        border:0;
        border-radius: 50%;
        outline: none;
        cursor: pointer;
        background-color: #032541;
        display: flex;
        justify-content: center;
        align-self: center;
    }

    @media (max-width:821px){
        flex-direction: column;
        & button{
            background-color: #093b5e;
        }
        & input{
            color: #000;
        }
    }
`

export const ContentMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    gap:1em;
     @media (max-width:821px){
        position: absolute;
        flex-direction: column;
        justify-content: center;
        left: 0;
        top: 0;
        height: 100vh;
        transition:.4s ease-in;
        width: 0%;
        background-color: #032541;
        overflow-x:hidden;
    }

`

export const ButtonMenu = styled.button`
    display: none;
    @media  (max-width:821px){
        display: block;
    }
`