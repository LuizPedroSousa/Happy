import React, { useContext, useState } from 'react';

import {
  Container,
  ToggleTheme,
  ContentWrapper,
  Header,
  ImgDesk,
} from './styles';


import { BsArrowRightShort } from 'react-icons/bs';
import {
  RiMoonClearFill,
  RiMoonLine,
} from 'react-icons/ri';
import { AiOutlineBgColors } from 'react-icons/ai';
import { IoIosSunny } from 'react-icons/io';
import { WiDaySunny } from 'react-icons/wi';

import { Link } from 'react-router-dom';
import logoImg from '../../Assets/Images/logo.svg';
import logoDarkImg from '../../Assets/Images/logo_dark.svg';
import heroImg from '../../Assets/Images/hero.svg';
import heroDarkImg from '../../Assets/Images/hero_dark.svg';
import { ThemeContext } from 'styled-components';
import ThemeChangeContext from '../../Store/ContextApi/theme/context';
const Landing: React.FC = () => {
  //Contexts
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeChangeContext);

  //States
  const [viewThemes, setViewThemes] = useState(false);

  //InlineStyles
  const toggleThemeStyle = {
    padding: '5rem',
    backgroundColor: title === 'light' ? colors.buttonPrimary : colors.black,
  }

  const toggleSpanStyle = {
    color: colors.white,
  }
  return (
    <Container>
      <ToggleTheme
        style={viewThemes ? { ...toggleThemeStyle } : {}}
        onClick={() => setViewThemes(true)}
      >

        {
          viewThemes
            ?
            <div>
              <span
                style={title === 'dark' ? { top: '1.3rem' } : {}}
              >
              </span>
              <span
                style={title === 'dark' ? { top: '5.1rem' } : {}}
              >

              </span>
              <span
                onClick={toggleTheme}
                style={viewThemes ? { ...toggleSpanStyle } : {}}
              >
                {
                  title === 'dark'
                    ?
                    <RiMoonClearFill />
                    :
                    <RiMoonLine />
                }
              </span>
              <span
                onClick={toggleTheme}
                style={viewThemes ? { ...toggleSpanStyle } : {}}
              >
                {title === 'light'
                  ?
                  < IoIosSunny />
                  :
                  <WiDaySunny />
                }
              </span>
            </div>
            :
            <span>
              <AiOutlineBgColors />
            </span>
        }
      </ToggleTheme>
      <Header
        onClick={() => viewThemes && setViewThemes(false)}
      >
        <img src={title === 'light' ? logoImg : logoDarkImg} alt="happy" />
        <main>
          <strong>São Paulo</strong>
          <p>São Paulo, ZN</p>
        </main>
      </Header>
      <ContentWrapper
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
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
