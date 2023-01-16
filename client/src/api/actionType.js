import { actions } from "../constants/actionConstants"

export const buildActionType = (type) => {
    return {
        FETCHING: `${actions[type]}.FETCHING`,
        SUCCESSFULL: `${actions[type]}.SUCCESSFULL`,
        REJECTED: `${actions[type]}.REJECTED`,
    }
}