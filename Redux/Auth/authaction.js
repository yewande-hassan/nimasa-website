import { signinPending,signinSuccess,signinFailed} from './authslice';
import { userSignin } from '../../pages/api/userApi';
export const Signin = (user) => async(dispatch)=>{
    try {
        dispatch(signinPending())
        const users = await userSignin(user)
        console.log(user)
        dispatch(signinSuccess(user))
    } catch (error) {
        // dispatch(signinFailed("error.message"))
    };
}