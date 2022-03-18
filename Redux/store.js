import { configureStore, } from '@reduxjs/toolkit'
import signInReducer from './Auth/authslice'
import thunk from 'redux-thunk';

export const store = configureStore({
    
    reducer:{
        auth: signInReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
      }),
}
);

