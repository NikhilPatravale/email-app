import { fetch } from "../../api/api"
import { actions, GET } from "../../constants/actionConstants"

export const getMessages = (data) => (dispatch) => {
    return fetch(`messages/${data}`, GET, null, actions.GET_INBOX_MESSAGES)(dispatch)   
}