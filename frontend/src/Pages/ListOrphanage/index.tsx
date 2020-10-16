import React from 'react';

import { Container, Content, Title } from './styles';

import Form from './FormList'
import Aside from '../../Components/AsideBack';

const ListOrphanage: React.FC = () => {
  return (
    <Container>
      <Aside />
      <section>
        <main>
          <Content>
            <Title >
              Orfanato
            </Title>
            <Form />
          </Content>
        </main>
      </section>
    </Container>
  );
};

export default ListOrphanage;
