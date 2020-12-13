import React, { useContext } from 'react';

import Container from './styles';

import Header from '../Header';
import ContentWrapper from '../ContentWrapper';
import ModalContext from '../../../Store/ContextApi/Modal/context';

const LandingContent: React.FC = () => {
    const {
        viewModal,
        handleExitModal,
    } = useContext(ModalContext);
    return (
        <Container
            hasViewModal={viewModal}
            onClick={handleExitModal}
        >
            <Header />
            <ContentWrapper />
        </Container>
    );
};

export default LandingContent;
