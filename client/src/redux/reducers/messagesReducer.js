import { actions } from '../../constants/actionConstants'

const initialState = {
    messages: {
        inbox: [],
        sent: [],
        deleted: [],
        drafts: [],
        spam: []
    },
    loading: false,
    error: ""
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case `${actions.GET_INBOX_MESSAGES}.FETCHING`:
            return {
                ...state,
                loading: true
            }
        case `${actions.GET_INBOX_MESSAGES}.SUCCESSFULL`:
            return {
                ...state,
                loading: false,
                messages: action.payload
            }
        case `${actions.GET_INBOX_MESSAGES}.REJECTED`:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}