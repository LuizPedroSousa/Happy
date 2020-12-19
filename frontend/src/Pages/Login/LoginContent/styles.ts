import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  flex-direction: column;

  @media(min-width: 1120px){
    flex-direction: row;
    overflow: hidden;
  }
`;

export default Container;
