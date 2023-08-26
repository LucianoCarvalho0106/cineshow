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
    height: 400px;
    width: 320px;
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
    @media (max-width: 705px){
        margin:1em auto;
    }
`

export const Avaliacao = styled.p`
    display: flex;
    align-items: center;
    gap:10px;
    margin: .7em 0;
`

export const Sinopse = styled.p`
    font-weight:600;
    font-size: 1.5em;
    margin:.3em 0;

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
    margin: 0 auto;
    font-weight:600;
    color: #fff;
    letter-spacing: 1px;
`

export const Biografia = styled.div`
    text-align: justify;
    width: 100%;
`

export const Flex = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    flex-wrap: wrap;
`