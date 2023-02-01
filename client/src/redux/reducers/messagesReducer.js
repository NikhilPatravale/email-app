import { actions } from '../../constants/actionConstants'
import { Actions } from '../../constants/constants'

const initialState = {
    messages: {
        inbox: [],
        sent: [],
        deleted: [],
        drafts: [],
        spam: []
    },
    loading: false,
    error: "",
    snackOpen: false
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
        case Actions.ADD_DRAFT_MESSAGE:
            let updatedDrafts,
                newMessage = state.messages.drafts.find(m => m._id === action.payload._id)

            if (newMessage) {
                updatedDrafts = state.messages.drafts.map((item) => {
                    if (item._id === action.payload._id) return action.payload
                    else return item
                })
            } else {
                updatedDrafts = [...state.messages.drafts, action.payload]
            }

            return {
                ...state,
                messages: {
                    ...state.messages,
                    drafts: updatedDrafts
                }
            }
        case Actions.ADD_SENT_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    sent: [...state.messages.sent, action.payload]
                }
            }
        case Actions.ADD_INBOX_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    inbox: [...state.messages.inbox, action.payload]
                }
            }
        case Actions.ADD_DELETED_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    deleted: [...state.messages.deleted, action.payload]
                }
            }
        case Actions.SET_SNACK_OPEN:
            return {
                ...state,
                snackOpen: action.payload
            }
        default:
            return state
    }
}