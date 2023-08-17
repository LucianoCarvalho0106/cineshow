import {styled} from "styled-components"

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 170px;
    border-radius: 6px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    & img{
        border-top-right-radius:6px;
        border-top-left-radius:6px;
    }
`