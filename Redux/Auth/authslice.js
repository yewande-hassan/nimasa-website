import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    isLoading:false,
    isAuth: false,
    error: null
}

export const signinSlice = createSlice({
    name:'Signin',
    initialState,
    reducer:{
        signinPending:(state)=>{
            state.isLoading = true;
        },
        signinSuccess:(state)=>{
            state.isLoading = false;
            state.isAuth = true;
            state.error = "";
        },
       signinFailed:(state,action)=>{
            state.isLoading = false;
            state.error = action.payLoad
        }
    }
});

const {reducer, actions} = signinSlice;

export const {signinPending,signinSuccess,signinFailed} = actions;
export default reducer;