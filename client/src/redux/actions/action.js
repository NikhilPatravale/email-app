import { Actions } from "../../constants/constants";

export const SidebarOption = (option) => ({
    type: Actions.SIDEBAR_OPTION_CHANGE,
    payload: option
})

export const SidebarDisplayChange = (value) => ({
    type: Actions.SIDEBAR_DISPLAY_CHANGE,
    payload: value
})