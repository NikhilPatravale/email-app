import { Actions } from "../../constants/constants";

export const setFeedHeader = (value) => ({
    type: Actions.FEED_HEADER_CHANGE,
    payload: value   
})

export const setSelectedMessage = (message) => ({
    type: Actions.SELECTED_MESSAGE_CHANGE,
    payload: message
})

export const setNewMessage = (value) => ({
    type: Actions.SET_NEW_MESSAGE,
    payload: value
})