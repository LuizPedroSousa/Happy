import React from 'react';

import {
  Container,
  Content,
  Title,
} from './styles';

import Aside from './AsideCreateOrphanage';
import Form from './FormCreateOrphanage';

import Map from '../../Components/MapMarker';

const CreateOrphanage: React.FC = () => {
  return (
    <Container>
      <Aside />
      <section>
        <main>
          <Content>
            <Title>Adicione um orfanato</Title>
            <Form />
          </Content>
        </main>
      </section>
    </Container>
  );
};

export default CreateOrphanage;
