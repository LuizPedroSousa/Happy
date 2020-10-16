import { lighten, shade } from 'polished';
import styled from 'styled-components';

import OpenInHoursImg from '../../../../Assets/Images/open_in_hours.svg';

export const Container = styled.div`
    padding: 1rem 0 1rem 1rem;
    display: flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction: column;
    width: 10rem;

    border: 1px solid ${props => props.theme.colors.outlineBase};
    border-radius: .8rem;
    background: url(${OpenInHoursImg}) center;
    span{
        color: ${props => lighten(0.1, props.theme.colors.primary)};
        font-size: 2rem;
    }
    p{
        max-width: 9rem;
        font-size: 1rem;
        color: ${props => props.theme.colors.textComplement};
    }
`;
