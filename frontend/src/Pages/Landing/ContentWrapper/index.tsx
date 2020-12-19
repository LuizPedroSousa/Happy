import React, { useContext } from 'react';

import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { Content, ImgDesk } from './styles';

import heroImg from '../../../Assets/Images/hero.svg';
import heroDarkImg from '../../../Assets/Images/hero_dark.svg';
import ModalContext from '../../../Store/ContextApi/Modals/Landing/context';

const ContentWrapper: React.FC = () => {
    const { title } = useContext(ThemeContext);
    const { viewModal } = useContext(ModalContext);
    return (
        <Content
            hasViewModal={viewModal}
        >
            <div>
                <h1>Leve felicidade para o mundo.</h1>
                <p>
                    Visite orfanatos e mude o dia
                    de muitas crianças.
                </p>
            </div>
            <img src={title === 'light' ? heroImg : heroDarkImg} alt="crianças" />
            <ImgDesk />
            <Link to="map">
                <span>
                    <BsArrowRightShort />
                </span>
            </Link>
        </Content>
    );
};

export default ContentWrapper;
