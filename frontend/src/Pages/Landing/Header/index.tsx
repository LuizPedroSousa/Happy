import React, { useContext } from 'react';

import { HeaderContent } from './styles';

import logoImg from '../../../Assets/Images/logo.svg';
import logoDarkImg from '../../../Assets/Images/logo_dark.svg';
import { ThemeContext } from 'styled-components';
import { viewThemesContext } from '../../../Store/ContextApi/ViewThemes/context';


const Header: React.FC = () => {
  const { title } = useContext(ThemeContext);
  const { viewThemes, setViewThemes } = useContext(viewThemesContext);

  return (
    <HeaderContent
      style={viewThemes ? { opacity: '10%' } : {}}
      onClick={() => setViewThemes(false)}
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
