import axios from "axios";

const signinUrl ='https://ankarapay.herokuapp.com/user/login';

export const userSignin = 
(user) =>{
return new Promise(async(resolve, reject)=>{
    try {
        const res = await axios.post(signinUrl,user)
        console.log(res);
        const user = res.data.data.user
        resolve(res.data);
        if(res.data.status ==="success")
        sessionStorage.setItem('token', res.user.token)
        localStorage.setItem('nimasawebsite', JSON.stringify({token:res.user.token}))
    } catch (error) {
        console.log(error.message)
        reject(error)
    }
})
}