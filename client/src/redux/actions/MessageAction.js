import { Actions } from "../../constants/constants"

export const addNewMessage = ({type, message, from=''}) => (dispatch) => {
    return dispatch({
        type,
        payload: {message, from}
    })
}

export const setSnackOpen = (val) => (dispatch) => {
    return dispatch({
        type: Actions.SET_SNACK_OPEN,
        payload: val
    })
}
