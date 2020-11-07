import React, { useContext } from 'react';

import { Content, ImgDesk } from './styles';

import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import heroImg from '../../../Assets/Images/hero.svg';
import heroDarkImg from '../../../Assets/Images/hero_dark.svg';
import { ThemeContext } from 'styled-components';
import { viewThemesContext } from '../../../Store/ContextApi/ViewThemes/context';

const ContentWrapper: React.FC = () => {
  const { title } = useContext(ThemeContext);
  const { viewThemes, setViewThemes } = useContext(viewThemesContext);
  return (
    <Content
      style={viewThemes ? { opacity: '10%' } : {}}
      onClick={() => viewThemes && setViewThemes(false)}
    >
      <div>
        <h1>Leve a felicidade para o mundo.</h1>
        <p>
          Visite orfanatos e mude o dia
          de muitas crianças.
        </p>
      </div>
      <img src={title === 'light' ? heroImg : heroDarkImg} alt="crianças" />
      <ImgDesk>

      </ImgDesk>
      <Link to="map">
        <span>
          <BsArrowRightShort />
        </span>
      </Link>
    </Content>
  );
};

export default ContentWrapper;
