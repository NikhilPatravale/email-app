import { fetch } from "../../api/api"
import { actions, DELETE, GET, POST } from "../../constants/actionConstants"

export const getMessages = (data) => (dispatch) => fetch(`messages/${data}`, GET, null, actions.GET_INBOX_MESSAGES)(dispatch)

export const createMessage = (data) => (dispatch) => fetch(`messages/`, POST, data, actions.CREATE_INBOX_MESSAGE)(dispatch)

export const createDraftMessage = (data) => (dispatch) => fetch(`messages/drafts`, POST, data, actions.CREATE_DRAFT_MESSAGE)(dispatch)

export const deleteDraftMessage = (data) => (dispatch) => fetch(`messages/drafts/${data}`, DELETE, null, actions.DELETE_DRAFT_MESSAGE)(dispatch)
