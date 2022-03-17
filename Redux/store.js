import { configureStore } from '@reduxjs/toolkit'
import signinReducer from './Auth/authslice'

export const store = configureStore({
    
    reducer:{
        signin: signinReducer,
    },
}
);

