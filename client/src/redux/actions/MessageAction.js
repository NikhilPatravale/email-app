import { Actions } from "../../constants/constants"

export const addNewMessage = ({type, message}) => (dispatch) => {
    return dispatch({
        type,
        payload: message
    })
}

export const setSnackOpen = (val) => (dispatch) => {
    return dispatch({
        type: Actions.SET_SNACK_OPEN,
        payload: val
    })
}
