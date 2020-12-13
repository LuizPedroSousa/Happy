import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { RiMoonClearFill, RiMoonLine } from 'react-icons/ri';
import { IoIosSunny } from 'react-icons/io';
import { WiDaySunny } from 'react-icons/wi';
import ColorsContext from '../../../../../Store/ContextApi/theme/context';
import {
    ThemesContainer,
    Button,
    ThemesContent,
    SpanGreen,
    MoonIcon,
    SunnyIcon,
    SpanPink,
} from './styles';

import ModalContext from '../../../../../Store/ContextApi/Modal/context';

const Themes: React.FC = () => {
    const { title } = useContext(ThemeContext);
    const { toggleTheme } = useContext(ColorsContext);
    const {
        viewThemes,
        viewModal,
        viewDashboard,
        setViewDashboard,
        toggleViewThemes,
    } = useContext(ModalContext);

    const toggleThemes = () => {
        setViewDashboard(false);
        return toggleViewThemes();
    };

    return (
        <ThemesContainer
            hasViewDashboard={viewDashboard}
            hasViewThemes={viewThemes}
        >
            <Button
                hasViewModal={viewModal}
                onClick={toggleThemes}
            >
                Temas
            </Button>
            <ThemesContent
                hasViewThemes={viewThemes}
            >
                <SpanGreen
                    hasViewThemes={viewThemes}
                />
                <SpanPink hasViewThemes={viewThemes} />
                <MoonIcon
                    hasViewThemes={viewThemes}
                    onClick={toggleTheme}
                >
                    {title === 'dark' ? <RiMoonClearFill /> : <RiMoonLine />}
                </MoonIcon>
                <SunnyIcon
                    hasViewThemes={viewThemes}
                    onClick={toggleTheme}
                >
                    {title === 'light' ? <IoIosSunny /> : <WiDaySunny />}
                </SunnyIcon>
            </ThemesContent>
        </ThemesContainer>
    );
};

export default Themes;
