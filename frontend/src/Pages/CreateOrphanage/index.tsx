import React from 'react';

import {
    Container,
    Content,
    Title,
} from './styles';

import Aside from '../../Components/AsideBack';
import Form from './FormCreateOrphanage';

const CreateOrphanage: React.FC = () => (
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

export default CreateOrphanage;
