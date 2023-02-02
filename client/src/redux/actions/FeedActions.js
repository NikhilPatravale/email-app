import { Actions } from "../../constants/constants";

export const setFeedHeader = (value) => ({
    type: Actions.FEED_HEADER_CHANGE,
    payload: value
})

export const setSelectedMessage = (message) => (dispatch) => {
    return dispatch({
        type: Actions.SELECTED_MESSAGE_CHANGE,
        payload: message
    })
}

export const setNewMessage = (value) => (dispatch) => {
    return dispatch({
        type: Actions.SET_NEW_MESSAGE,
        payload: value
    })
}

export const setSaveAsDraft = (value) => (dispatch) => {
    return dispatch({
        type: Actions.SET_SAVE_AS_DRAFT,
        payload: value
    })
}