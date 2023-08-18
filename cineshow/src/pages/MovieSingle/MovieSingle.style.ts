import {styled} from "styled-components"

export const MovieSilgleContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin-top: 2em;
    gap:4em;
`
export const ContentAll = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
`

export const DivImgFilme = styled.div`
    height: 290px;
    width: 200px;
    & img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom:1em;
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
    max-width: 70%;
`

export const Footer = styled.footer`
    background-color: #032541;
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const Elenco = styled(Sinopse)`
    color: #fff;
`