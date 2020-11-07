import React, { useContext, CSSProperties } from 'react';
import { ThemeContext } from 'styled-components';
import { viewThemesContext } from '../../../Store/ContextApi/ViewThemes/context';
import ColorsContext from '../../../Store/ContextApi/theme/context';
import { Content } from './styles';

import {
  RiMoonClearFill,
  RiMoonLine,
} from 'react-icons/ri';
import { AiOutlineBgColors } from 'react-icons/ai';
import { IoIosSunny } from 'react-icons/io';
import { WiDaySunny } from 'react-icons/wi';

const Modal: React.FC = () => {
  //Contexts
  const { viewThemes, setViewThemes } = useContext(viewThemesContext);
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ColorsContext);
  
  //InlineStyles
  const toggleThemeStyle: CSSProperties = {
    padding: '5rem',
    backgroundColor: title === 'light' ? colors.buttonPrimary : colors.black,
  }

  const toggleSpanStyle: CSSProperties = {
    color: colors.white,
  }
  return (
    <Content
      style={viewThemes ? toggleThemeStyle : {}}
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
              style={viewThemes ? toggleSpanStyle : {}}
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
              style={viewThemes ? toggleSpanStyle : {}}
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
    </Content>
  );
};

export default Modal;
