import { shade } from 'polished';
import styled from 'styled-components';

const ContainerFail = styled.div`
  background-color: ${props => props.theme.colors.alert};
  div{
    p{
      margin: 1rem 0;
      max-width: 16.2rem;
    }
    button{
      background-color: ${props => shade(0.2, props.theme.colors.alert)};
      :hover{
        background-color: ${props => shade(0.4, props.theme.colors.alert)};
      }
    }
  }

  @media(min-width: 1120px){
    div p{
      max-width: 20.2rem;
    }
  }
`;

export default ContainerFail;
