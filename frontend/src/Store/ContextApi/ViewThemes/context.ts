import { createContext } from "react";




interface IViewTheme {
    viewThemes: boolean;
    setViewThemes: (value: boolean) => void;
}

export const viewThemesContext = createContext<IViewTheme>({
    viewThemes: false,
    setViewThemes: () => { },
});
