import axios from "axios";


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
      ] = `Bearer ${data.Token}`;

      axios.defaults.headers.common["Authorization"] = `Bearer ${data.Token}`;
    //  setCookie("token", data.Token);

      const result = {
        user: parseJwt(data.Token)["data"],
        token: data.Token,
      };

      axios.defaults.headers.common["Authorization"] = `Bearer ${data.Token}`;
    } catch (error) {
      reject(error.message);


    }
  });
};
