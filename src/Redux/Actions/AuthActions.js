import { AuthActionTypes } from "../ActionTypes/AuthActionTypes";


class AuthActions {

    static Login = (name, passsword) => {
        const token = name + passsword;
        console.log('userData in Action ==>', token);

        return {
            type: AuthActionTypes.LOGIN,
            payload: token
        };
    };

    static Logout = () => {
        return {
            type: AuthActionTypes.LOGOUT,
        };
    };


}

export default AuthActions;