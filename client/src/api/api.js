import { BASE_URL } from "../constants/constants"
import axios from 'axios'
import { buildActionType } from "./actionType"

export const fetch = (endpoint, method, body, type) => async (dispatch) => {

    const actionType = buildActionType(type)
    dispatch({
        type: actionType.FETCHING
    })

    try {
        let res = await axios(BASE_URL + endpoint, {
            method,
            data: body
        })
        dispatch({
            type: actionType.SUCCESSFULL,
            payload: res.data
        })
        return Promise.resolve(res.data)
    } catch (err) {
        dispatch({
            type: actionType.REJECTED,
            payload: err
        })
        return Promise.reject(err)
    }
}