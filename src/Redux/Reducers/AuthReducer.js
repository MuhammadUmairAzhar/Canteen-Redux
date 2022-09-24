import { AuthActionTypes } from "../ActionTypes/AuthActionTypes"

const initialState = {
    authToken: null
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {

        case AuthActionTypes.LOGIN:
            return {
                ...state,
                authToken: action.payload,
            }

        case AuthActionTypes.LOGOUT:
            return {
                authToken: null,
            }

        default:
            return state;
    }

}