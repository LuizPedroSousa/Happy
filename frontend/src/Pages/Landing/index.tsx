import React from 'react';

import {
  Container,
} from './styles';

import Header from './Header';
import { ViewThemesProvider, Consumer } from '../../Store/ContextApi/ViewThemes/Provider';
import Modal from './Modal';
import ContentWrapper from './ContentWrapper';
const Landing: React.FC = () => {
  return (
    <ViewThemesProvider>
      <Consumer>
        {() =>
          <Container>
            <Header />
            <ContentWrapper />
            <Modal />
          </Container>
        }
      </Consumer>
    </ViewThemesProvider>
  );
};

export default Landing;
