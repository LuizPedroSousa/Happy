import React, { useContext } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsX } from 'react-icons/bs';
import ModalContext from '../../../Store/ContextApi/Modal/context';
import {
    Content,
    Exit,
    ColorsIcon,
} from './styles';

import Themes from './Options/Themes';
import Dashboard from './Options/Dashboard';

const Modal:React.FC = () => {
    const {
        viewModal,
        viewThemes,
        viewDashboard,
        setViewModal,
        handleExitModal,
    } = useContext(ModalContext);

    return (
        <Content
            onClick={() => !viewModal && setViewModal(true)}
            hasViewModal={viewModal}
            hasViewThemes={viewThemes}
            hasViewDashboard={viewDashboard}
        >
            {
                viewModal
                    ? (
                        <>
                            <Exit
                                onClick={handleExitModal}
                            >
                                <span>
                                    <BsX />
                                </span>
                            </Exit>
                            <Themes />
                            <Dashboard />
                        </>
                    )
                    : (
                        <ColorsIcon
                            hasViewModal={viewModal}
                        >
                            <AiOutlineSetting />
                        </ColorsIcon>
                    )
            }
        </Content>
    );
};

export default Modal;
