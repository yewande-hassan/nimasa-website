import { signInPending, signInSuccess, signInFailed } from "./authslice";
import { userSignin, userSignIn } from "../../api/userApi";
import {parseJwt} from '../../helpers/api'
export const signIn = (user) => async (dispatch) => {

    dispatch(signInPending())
    try {
        const users = await userSignIn(user);
        const result = {
            user: parseJwt(users.access_token),
            token: users.access_token,
          };

    dispatch(signInSuccess(result))
    }
    catch (e) {

        dispatch(signInFailed(e))


    }


};
