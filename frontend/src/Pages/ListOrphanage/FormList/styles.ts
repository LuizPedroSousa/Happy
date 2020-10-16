import styled from 'styled-components';

import backMapImg from '../../../Assets/Images/map_background.svg';

export const OphanageBackground = styled.img`
    width: 100%;
    border-radius: 1rem 1rem 0 0;
`;

export const Content = styled.div`
    padding: 1rem 1rem 4rem;
    .FirstFieldset{
        display: flex;
        flex-direction: column;
        p{
            font-size: 1rem;
            margin: 0 0 1rem;
            color: ${props => props.theme.colors.textComplement};
        }
    }

    .LastFieldset{
        display: flex;
        flex-direction: column;
        p{
            font-size: 1rem;
            margin: 0 0 1rem;
            color: ${props => props.theme.colors.textComplement};
        }
        border: 0;
    }

    .locationMap{
        background: url(${backMapImg}) center;
        p{
            color: ${props => props.theme.colors.primaryDark};
            margin: 0 ;
        }
    }
`;

export const ImagesGroup = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    margin: 0 0 4rem;
    img{
        cursor: pointer;
        transition: .25s;
        border-radius: 1rem;
        width: 4rem;
        :hover{
                opacity: 80%;
        }
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
    gap: 1rem;
`;