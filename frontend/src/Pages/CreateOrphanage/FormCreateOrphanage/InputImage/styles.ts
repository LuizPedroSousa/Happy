import styled from 'styled-components';

export const ImageBlock = styled.div`
    width: 100%;
    display: flex;
    margin: 0 0 2rem;
    .InputBlock+&{
        margin-top: 1rem;
    }
    flex-direction: column;
    input[type="file"]{
        display: none;
    }
`;


export const SelectImg = styled.label`
        height: 5rem;
        width: 5rem;
        display: flex;
        justify-content:center;
        border-radius: .8rem; 
        border: 2px dashed ${props => props.theme.colors.primary};
        align-items:center;
        span{
            color: ${props => props.theme.colors.primary};
            display:flex;
            justify-content:center;
            align-items:center;
        }

`;