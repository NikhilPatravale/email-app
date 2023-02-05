import { Actions } from "../../constants/constants"

const initialState = {
    user:{
        id: null,
        email: ''
    }
}

export const userContextReducer = (state=initialState, action) => {
    switch(action.type){
        case Actions.SET_USER_CONTEXT:
            return {
                ...state,
                user: action.payload
            }
        default:
            return {
                ...state
            }
    }
}