import { Actions, FeedConstants
 } from '../../constants/constants'
import DummyData from '../../static/dummy.json'

const defaultState = {
    header: FeedConstants.Inbox,
    list: DummyData,
    selectedMessage: null,
    newMessage: {
        type: "",
        defaultMessage: null
    }
}

export const feedReducer = (state = defaultState, action) => {
    switch(action.type){
        case Actions.FEED_HEADER_CHANGE:
            return {
                ...state,
                header: action.payload
            }
        case Actions.SELECTED_MESSAGE_CHANGE:
            return {
                ...state,
                selectedMessage: action.payload,
                newMessage: ""
            }
        case Actions.SET_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.payload,
                selectedMessage: null
            }
        default:
            return state
    }
}