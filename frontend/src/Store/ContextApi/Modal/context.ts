import { createContext } from 'react';

interface IModal {
    viewModal: boolean;
    viewThemes: boolean;
    viewDashboard: boolean;
    setViewModal: (value: boolean) => void;
    setViewThemes: (value: boolean) => void;
    setViewDashboard: (value: boolean) => void;
    toggleViewThemes: () => void;
    toggleViewDashboard: () => void;
    handleExitModal: () => void;
}

const viewModalContext = createContext<IModal>({
    viewThemes: false,
    viewModal: false,
    viewDashboard: false,
    setViewModal: () => { },
    setViewThemes: () => {},
    setViewDashboard: () => {},
    toggleViewThemes: () => {},
    toggleViewDashboard: () => {},
    handleExitModal: () => {},
});

export default viewModalContext;
