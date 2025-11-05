import { setLanguage, setLanguageUpdated } from "./languageActions";

type Dispatch = (action: any) => void;
export const getEventMap = (dispatch: Dispatch) => ({
    'CHANGE_LANGUAGE': (payload: any) => {
        dispatch(setLanguage(payload));
        dispatch(setLanguageUpdated(true));
    },
});