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
    },
    saveAsDraft: true,
    isForward: false
}

export const feedReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Actions.FEED_HEADER_CHANGE:
            return {
                ...state,
                header: action.payload
            }
        case Actions.SELECTED_MESSAGE_CHANGE:
            return {
                ...state,
                selectedMessage: action.payload
            }
        case Actions.SET_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.payload,
            }
        case Actions.SET_SAVE_AS_DRAFT:
            return {
                ...state,
                saveAsDraft: action.payload
            }
        case Actions.SET_IS_FORWARD:
            return {
                ...state,
                isForward: action.payload
            }
        default:
            return state
    }
}