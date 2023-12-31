import {styled} from "styled-components"

export const MovieSilgleContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    margin-top: 3em;
    gap:4em;
`
export const ContentAll = styled.div`
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items: center;
    gap: 2em;
`

export const DivImgFilme = styled.div`
    height: 310px;
    width: 400px;
    box-shadow: 16px 19px 18px -8px rgba(0,0,0,0.3);
    & img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
    @media (max-width: 705px){
        width:90%;
        height: 100%;
    }
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom:1em;
    margin-top:1em;
    text-align:center;
    @media (max-width: 705px){
        text-align:center;
    }
`

export const Avaliacao = styled.p`
    display: flex;
    align-items: center;
    justify-content:center;
    gap:10px;
    margin: .7em 0;
`

export const Sinopse = styled.p`
    font-weight:600;
    font-size: 1.5em;
    margin:.3em 0;
    text-align:center;

    & ~ p{
        text-align:justify;
    }
`

export const Right = styled.div`
    max-width: 50%;
    @media (max-width: 705px){
        max-width: 90%;
        margin-bottom:2em;
    }
`
export const ButtonTrailer = styled.button`
    border: 0;
    outline: none;
    border-radius: 6px;
    background-color:#4385F3;
    width: 15em;
    padding:.7em 2em;
    margin: 1em auto 4em auto;
    font-weight:600;
    color: #fff;
    letter-spacing: 1px;
    box-shadow: 16px 17px 18px -8px rgba(0,0,0,0.3);
    @media (max-width:705px){
        margin-bottom:2em;
    }
`

export const Center = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
`