import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;
    .FormContainer{
        strong{
            margin: 0;
        }
    }
    .ExitButton{
        top: 1rem;
    }
    
    @media(min-width: 1120px){
        overflow: hidden;
        justify-content: space-between;
        flex-direction: row;

        .FormContainer{
            strong{
                margin: 0 0 2rem;
            }
            padding: 0 6rem 1rem;

            button[typeof = 'submit']{
                margin: 2rem 0 0;
            }
        }
        .FormContainer .ButtonContainer{
            top: 1rem;
        }
        .InputBlock{
            &+div{
                margin: 1.5rem 0 0;
            }
            div{
                margin: .2rem 0 0;
            }
            label{
                top: -.5rem;
            }
            input{
                margin: 0;
            }
        }
    }
`;

export default Container;
