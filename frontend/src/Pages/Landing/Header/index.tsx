import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import HeaderContent from './styles';

import logoImg from '../../../Assets/Images/logo.svg';
import logoDarkImg from '../../../Assets/Images/logo_dark.svg';
import ModalContext from '../../../Store/ContextApi/Modals/Landing/context';

const Header: React.FC = () => {
    const { title } = useContext(ThemeContext);
    const { viewModal } = useContext(ModalContext);
    return (
        <HeaderContent
            hasViewModal={viewModal}
        >
            <img src={title === 'light' ? logoImg : logoDarkImg} alt="happy" />
            <main>
                <strong>São Paulo</strong>
                <p>São Paulo, ZN</p>
            </main>
        </HeaderContent>
    );
};

export default Header;
