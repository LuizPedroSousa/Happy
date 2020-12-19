/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ModalContext from './context';

const { Provider, Consumer } = ModalContext;
const ViewModalProvider: React.FC = ({ children }) => {
    const [viewModal, setModalAction] = useState(false);
    const [viewThemes, setThemesAction] = useState(false);
    const [viewDashboard, setDashBoardAction] = useState(false);

    const setViewThemes = (value: boolean) => setThemesAction(value);
    const setViewModal = (value: boolean) => setModalAction(value);
    const setViewDashboard = (value: boolean) => setDashBoardAction(value);

    const toggleViewThemes = () => setViewThemes(!viewThemes);

    const toggleViewDashboard = () => setViewDashboard(!viewDashboard);

    const handleExitModal = () => {
        setViewDashboard(false);
        setViewThemes(false);
        return setViewModal(false);
    };

    return (
        <Provider
            value={{
                viewModal,
                viewThemes,
                viewDashboard,
                setViewModal,
                setViewThemes,
                setViewDashboard,
                toggleViewThemes,
                toggleViewDashboard,
                handleExitModal,
            }}
        >
            {children}
        </Provider>
    );
};

export { ViewModalProvider as Provider, Consumer };
