import { BASE_URL } from "../constants/constants"
import axios from 'axios'
import { buildActionType } from "./actionType"

export const fetch = (endpoint, method, body, type) => (dispatch) => {

    return new Promise(async (resolve, reject) => {
        const actionType = buildActionType(type)
        dispatch({
            type: actionType.FETCHING
        })

        try {
            const res = await axios(BASE_URL + endpoint, {
                method,
                data: body
            })
            dispatch({
                type: actionType.SUCCESSFULL,
                payload: res.data
            })
            resolve()
        } catch (err) {
            console.log(err)
            reject()
        }
    })
}