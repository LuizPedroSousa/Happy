import styled from 'styled-components';


export const Content = styled.div`
    margin: 0 0 10rem;
    padding: 4rem 2rem;
`;

export const Label = styled.label`
    margin: 2rem 0 1rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    color: ${props => props.theme.colors.textComplement};
    font-size: 1.2rem;
`;

export const ImagesContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:center;
    gap: 1rem;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 0 2rem;
`;

export const ImgSelected = styled.div`
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content:center;
    overflow: hidden;
    align-items:center;
    border: 0;
    img{
        border-radius: .8rem;
        width: 100%;
    }
`;

export const OpenOnweekends = styled.div`
    margin: 2rem 0 3rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    p{
        margin-right: 1rem;
        color: ${props => props.theme.colors.textComplement};
        font-size: 1.2rem;
    }
    .react-switch-bg{
        border: 1px solid ${props => props.theme.colors.outlineBase};
    }
`;