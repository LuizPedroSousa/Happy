import styled from 'styled-components';

import backMapLightImg from '../../../Assets/Images/map_background.svg';
import backMapDarkImg from '../../../Assets/Images/map_background_dark.svg';

export const OphanageBackground = styled.div`
    width: 100%;
    overflow: hidden;
    height: 14rem;
    img{
        object-fit: contain;
        width: 100%;
        border-radius: 1rem 1rem 0 0;
    }
    @media(min-width: 1120px){
        height: 20rem;
    }
`;

export const Content = styled.div`
    padding: 1rem 1rem 4rem;
    .FirstFieldset{
        display: flex;
        flex-direction: column;
        legend{
            font-weight: 800;
        }
        p{
            font-size: 1rem;
            margin: 0 0 1rem;
            color: ${props => props.theme.title === 'light' ? props.theme.colors.textComplement : props.theme.colors.white};
        }
    }

    .LastFieldset{
        display: flex;
        flex-direction: column;
        p{
            font-size: 1rem;
            margin: 0 0 1rem;
            color: ${props => props.theme.title === 'light' ? props.theme.colors.textComplement : props.theme.colors.white};
        }
        border: 0;
    }

    .locationMap{
        background: url(${props => props.theme.title === 'light' ? backMapLightImg : backMapDarkImg}) center;
        p{
            color: ${props => props.theme.title === 'light' ? props.theme.colors.primaryDark : props.theme.colors.white};
            margin: 0 !important;
        }
    }

    @media(min-width: 1120px){
        .FirstFieldset,
        .LastFieldset{
            legend{
                margin: 0 0 1.8rem;
                font-size: 2.8rem;
            }
            p{
                margin: 0 0 3rem;
            }
        }

        .LastFieldset{
            p{
                margin: 0;
            }
        }

        padding: 0 4rem;
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
        background-color: ${props => props.theme.colors.white};
        cursor: pointer;
        transition: .25s;
        object-fit: contain;
        border-radius: 1rem;
        width: 4rem;
        :hover{
                opacity: 80%;
        }
    }

    @media(min-width: 1120px){
        margin: 1.6rem 0 4rem;
    }

`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
    gap: 1rem;

    @media(min-width: 1120px){
        display: grid;
        align-content:center;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0;
    }
`;