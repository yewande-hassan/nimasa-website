import axios from "axios";
import {parseJwt} from "../helpers/api"


export const userSignIn = (user) => {
  return new Promise(async (resolve, reject) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({
            
           ...user
         },)
      };
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}auth/login`, requestOptions);
      const fetchResult = await response.json();



      if (response.ok) {
       

        resolve(fetchResult);
      } else {
 
        const responseError = {
            type: 'Error',
            message: fetchResult.message || 'Something went wrong',
            data: fetchResult.data || '',
            code: fetchResult.code || '',
          };
          let error = new Error();
          error = { ...error, ...responseError };
        throw (error);
      }
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.access_token}`;

      axios.defaults.headers.common["Authorization"] = `Bearer ${data.access_token}`;
    //  setCookie("token", data.Token);



      axios.defaults.headers.common["Authorization"] = `Bearer ${data.access_token}`;
      
    } catch (error) {
      reject(error.message);


    }
  });
};
