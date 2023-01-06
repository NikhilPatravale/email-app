import { Actions, FeedConstants } from "../../constants/constants"

const defaultState = {
    selectedOption: FeedConstants.Inbox,
    isSidebarClose: true
}

export const sidebarReducer = (state=defaultState, action) => {
    switch(action.type){
        case Actions.SIDEBAR_OPTION_CHANGE:
            return {
                ...state,
                selectedOption: action.payload
            }
        case Actions.SIDEBAR_DISPLAY_CHANGE:
            return {
                ...state,
                isSidebarClose: action.payload
            }
        default:
            return state
    }
}