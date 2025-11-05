import { setLanguage } from "./languageActions";

type Dispatch = (action: any) => void;
export const getEventMap = (dispatch: Dispatch) => ({
    'CHANGE_LANGUAGE': (payload: any) => dispatch(setLanguage(payload)),
});