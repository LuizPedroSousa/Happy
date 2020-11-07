import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';

export const HeaderContent = styled.div`
    animation: ${keyframes`${bounceIn}`} 2s linear;
    display: flex;
    justify-content:space-between;
    align-items:center;
    transition: .25s;
    margin: 2rem 0 0;
    img{
        width: 8rem;
    }
    main{
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        strong{
            font-size: 1rem;
        }
        p{
            font-size: 1.4rem;
        }
    }
    button{
        display: none;
    }
    @media(min-width: 1120px){
        padding: 4rem 0;
        margin: 0;
        img{
            width: 10rem;
        }
    }
`;