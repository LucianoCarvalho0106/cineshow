import {styled} from "styled-components"


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
    & #spanFilmes ~ .activeMenu{
        display: flex;
        flex-direction: column;
        padding: 1em;
        z-index:30;
    }

    & #spanSeries ~ .activeMenu{
        display: flex;
        flex-direction: column;
        z-index:30;
    }

    & #spanPessoas~ .activeMenu{
        display: flex;
        flex-direction: column;
        z-index:30;
    }

    .activeSideBar{
        width: 60%;
    }

`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    gap: 3em;
    position: relative;
    
    & #filmes, #series,#pessoas{
        display: none;
        position: absolute;
        top:2em;
        width: 90%;
        box-shadow: 7px 9px 14px -6px rgba(0,0,0,0.75);
        padding: 8px;
        background-color: rgb(3,37,65);
        border-radius: 6px;
        & a{
            display: flex;
            align-items:center;
            color: #000;
            transition: 0.4s;
            border-radius: 2px;
            margin-bottom:10px;
            padding: 10px;
            & li{
                color: #fff;
                height: 100%;
                display: flex;
                align-self: center;
            }
            &:hover{
                background-color: #093b5e;
            }
        }
        @media (max-width:821px){
           width: 100%;
           & nav{
            width: 100%;
           }
    }
    }
    & span:hover{
        cursor: pointer;
    }

    & div{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    @media (max-width:821px){
        flex-direction: column;
        margin-bottom:1em;
        width: 100%;
        text-align:center;
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
    overflow-x:hidden;
    width:100%;
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
        color: #fff;
        background-color: #032541;
    }

`

export const ButtonMenu = styled.button`
    display: none;
    @media  (max-width:821px){
        display: block;
    }
`