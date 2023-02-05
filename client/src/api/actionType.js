import { Actions } from "../constants/constants"

export const buildActionType = (type) => {
    return {
        FETCHING: `${Actions[type]}.FETCHING`,
        SUCCESSFULL: `${Actions[type]}.SUCCESSFULL`,
        REJECTED: `${Actions[type]}.REJECTED`,
    }
}