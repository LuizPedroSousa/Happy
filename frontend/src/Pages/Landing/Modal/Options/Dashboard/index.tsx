import React, { useContext } from 'react';
import { AiOutlinePoweroff } from 'react-icons/ai';
import ModalContext from '../../../../../Store/ContextApi/Modal/context';

import {
    DashboardContainer,
    Button,
    Profile,
    UserImage,
    Name,
    Surname,
    TextContent,
    Options,
    Enter,
    Leaveme,
} from './styles';

const Dashboard: React.FC = () => {
    const {
        viewThemes,
        viewModal,
        viewDashboard,
        setViewThemes,
        toggleViewDashboard,
    } = useContext(ModalContext);

    const toggleDash = () => {
        setViewThemes(false);
        toggleViewDashboard();
    };

    return (
        <DashboardContainer
            hasViewThemes={viewThemes}
            hasViewDashboard={viewDashboard}
        >
            <Button
                onClick={toggleDash}
                hasViewThemes={viewThemes}
                hasViewModal={viewModal}
            >
              Acesso restrito
            </Button>
            <Profile
                hasViewDashboard={viewDashboard}
            >
                <UserImage
                    src="https://pbs.twimg.com/profile_images/1142473888733061122/PkczdiXG_400x400.jpg"
                    alt="image profile"
                />
                <TextContent>
                    <Name>
                        Luiz Pedro
                    </Name>

                    <Surname>
                        Sousa Lemos
                    </Surname>
                </TextContent>
            </Profile>
            <Options
                hasDashboard={viewDashboard}
            >
                <Enter>
                    Entrar
                </Enter>
                <Leaveme>
                    <span>
                        <AiOutlinePoweroff />
                    </span>
                </Leaveme>
            </Options>

        </DashboardContainer>
    );
};
export default Dashboard;
