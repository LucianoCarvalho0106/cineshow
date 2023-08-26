import {styled} from "styled-components"

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 230px;
    height: 300px;
    border-radius: 6px;
    box-shadow: -4px 29px 22px -18px rgba(0,0,0,0.5);
    cursor: pointer;
    overflow: hidden;
    @media (max-width:600px){
        width: 200px;
        height: 250px;
    }
    @media (max-width:450px){
        width: 160px;
        height: 200px;
    }
    
    &:hover img{
        transform: scale(1.05);
    }
    & img{
        border-top-right-radius:6px;
        border-top-left-radius:6px;
        object-fit: cover;
        flex: 1;
        overflow: hidden;
        transition: .4s;
    }
    & p{
        width: 230px;
        padding:5px;
        font-weight: 500;
        height:3em;
        line-height: 30px;
        text-align:center;
        white-space: nowrap; 
        overflow: hidden; 
        text-overflow: ellipsis;
        z-index:5;
        background-color: #032541;
        color: #fff;
        
        @media (max-width:600px){
        width: 200px;
        }

        @media (max-width:450px){
        width: 160px;
        
        }
    }
`