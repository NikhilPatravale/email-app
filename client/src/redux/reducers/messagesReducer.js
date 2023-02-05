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
    snackOpen: {
        open: false,
        message: '',
        type: ''
    }
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case `${Actions.GET_INBOX_MESSAGES}.FETCHING`:
            return {
                ...state,
                loading: true
            }
        case `${Actions.GET_INBOX_MESSAGES}.SUCCESSFULL`:
            return {
                ...state,
                loading: false,
                messages: action.payload
            }
        case `${Actions.GET_INBOX_MESSAGES}.REJECTED`:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case Actions.ADD_DRAFT_MESSAGE:
            let updatedDrafts,
                newMessage = state.messages.drafts.find(m => m._id === action.payload.message._id),
                msg = action.payload.message
            if (newMessage) {
                updatedDrafts = state.messages.drafts.map((item) => {
                    if (item._id === msg._id) return msg
                    else return item
                })
            } else {
                updatedDrafts = [...state.messages.drafts, msg]
            }

            return {
                ...state,
                messages: {
                    ...state.messages,
                    drafts: updatedDrafts
                }
            }
        case Actions.ADD_SENT_MESSAGE:
            let updatedInbox = action.payload.from === 'self' ? [...state.messages.inbox, action.payload.message] : state.messages.inbox
            return {
                ...state,
                messages: {
                    ...state.messages,
                    inbox: updatedInbox,
                    sent: [...state.messages.sent, action.payload.message]
                }
            }
        case Actions.ADD_INBOX_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    inbox: [...state.messages.inbox, action.payload.message]
                }
            }
        case Actions.ADD_DELETED_MESSAGE:
            let { message, from } = action.payload
            if (from === 'drafts') {
                return {
                    ...state,
                    messages: {
                        ...state.messages,
                        drafts: state.messages.drafts.filter(m => m._id !== message._id),
                        deleted: [...state.messages.deleted, message]
                    }
                }
            } else if (from === 'inbox') {
                return {
                    ...state,
                    messages: {
                        ...state.messages,
                        inbox: state.messages.inbox.filter(m => m._id !== message._id),
                        deleted: [...state.messages.deleted, message]
                    }
                }
            } else if (from === 'sent') {
                return {
                    ...state,
                    messages: {
                        ...state.messages,
                        sent: state.messages.sent.filter(m => m._id !== message._id),
                        deleted: [...state.messages.deleted, message]
                    }
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