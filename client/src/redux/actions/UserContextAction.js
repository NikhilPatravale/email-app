import { Actions } from "../../constants/constants";

export const setUserContext = (val) => ({
    type: Actions.SET_USER_CONTEXT,
    payload: val
})