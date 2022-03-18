import { signInPending, signInSuccess, signInFailed } from "./authslice";
import { userSignin, userSignIn } from "../../api/userApi";
export const signIn = (user) => async (dispatch) => {

    dispatch(signInPending())
    try {
        const users = await userSignIn(user);
        dispatch(signInSuccess(users))
    }
    catch (e) {

        dispatch(signInFailed(e))


    }


};
