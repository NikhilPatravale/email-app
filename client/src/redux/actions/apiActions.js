import { fetch } from "../../api/api"
import { Actions, RequestMethod } from "../../constants/constants"

const {GET, POST } = RequestMethod

export const getMessages = (data) => (dispatch) => fetch(`messages/${data}`, GET, null, Actions.GET_INBOX_MESSAGES)(dispatch)

export const createMessage = (data) => (dispatch) => fetch(`messages/`, POST, data, Actions.CREATE_INBOX_MESSAGE)(dispatch)

export const createDraftMessage = (data) => (dispatch) => fetch(`messages/drafts`, POST, data, Actions.CREATE_DRAFT_MESSAGE)(dispatch)

export const deleteMessage = (data) => (dispatch) => fetch(`messages/delete/${data}`, POST, null, Actions.DELETE_MESSAGE)(dispatch)
