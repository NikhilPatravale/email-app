import { BASE_URL } from "../constants/constants"
import axios from 'axios'
import { buildActionType } from "./actionType"
import { DELETE } from "../constants/actionConstants"

export const fetch = (endpoint, method, body, type) => async (dispatch) => {

    const actionType = buildActionType(type)
    dispatch({
        type: actionType.FETCHING
    })

    try {
        await axios(BASE_URL + endpoint, {
            method,
            data: body
        }).then(res => {
            dispatch({
                type: actionType.SUCCESSFULL,
                payload: res.data
            })
            return Promise.resolve()
        })
    } catch (err) {
        dispatch({
            type: actionType.REJECTED,
            payload: err
        })
        return Promise.reject(err)
    }
}