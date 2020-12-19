import { lighten, shade } from 'polished';
import styled from 'styled-components';

interface IContainer{
    hasViewThemes: boolean;
    hasViewDashboard: boolean;
}

interface IButton{
    hasViewModal:boolean;
    hasViewThemes: boolean;
}

export const DashboardContainer = styled.div<IContainer>`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    flex-direction: column;
    transition: 1s;
    position: relative;
    top: ${props => {
        if (props.hasViewDashboard) {
            return '-5.5rem';
        }
        if (props.hasViewThemes) {
            return '4rem';
        }
        return '1.5rem';
    }};
`;

export const Button = styled.button<IButton>`
    width: 100%;
    height: 3.1rem;
    font: 800 1.1rem Nunito;
    color: ${props => props.theme.colors.white};
    border: 0;
    opacity: ${props => (!props.hasViewModal ? 0 : 1)};
    outline: 0;
    z-index: 1;
    position: relative;
    border-radius: .8rem;
    background-color: ${props => props.theme.colors.green};
    cursor: pointer;
    margin: ${props => (props.hasViewThemes ? '2rem 0' : '0')};
    transition: .25s;
    :hover{
        background-color: ${props => shade(0.2, props.theme.colors.green)};
    }
`;

export const Profile = styled.div<{hasViewDashboard: boolean}>`
    display: flex;
    justify-content:space-between;
    transition: ${props => (props.hasViewDashboard ? '1s' : '.5s')};
    position: relative;
    top: ${props => (props.hasViewDashboard ? '1.5rem' : 0)};
    align-items:center;
    width: 100%;
    opacity: ${props => (!props.hasViewDashboard ? 0 : 1)};
`;
export const UserImage = styled.img`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 2.1rem;
    object-fit: cover;
    background-color: ${props => lighten(0.2, props.theme.colors.black)};
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;

export const Name = styled.p`
    font: 800 1.1rem Nunito;
`;
export const Surname = styled(Name)`

`;

export const Options = styled.div<{hasDashboard: boolean}>`
    display: flex;
    justify-content:space-between;
    align-items:center;
    transition: ${props => (props.hasDashboard ? '1s' : '.25s')};
    position: relative;
    top: ${props => (props.hasDashboard ? '10rem' : 0)};
    width: 100%;
    opacity: ${props => (props.hasDashboard ? 1 : 0)};
`;

export const Enter = styled.button`
    height: 3.2rem;
    border-radius: .8rem;
    border: 0;
    background-color: ${props => props.theme.colors.primaryDarker};
    outline: 0;
    cursor: pointer;
    width: calc(100% - 4rem);
    font: 800 1.1rem Nunito;
    transition: .25s;
    color: ${props => props.theme.colors.white};
    :hover{
        background-color: ${props => shade(0.2, props.theme.colors.primary)}
    }
`;

export const Leaveme = styled(Enter)`
    background-color: ${props => props.theme.colors.alert};
    border-radius: .8rem;
    width: 3.2rem;
    height: 3.2rem;
    span{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    :hover{
        background-color: ${props => shade(0.2, props.theme.colors.alert)}
    }
`;
