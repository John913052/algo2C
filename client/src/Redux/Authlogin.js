import { createSlice } from "@reduxjs/toolkit";
const Authlogin=createSlice({
    name:'authlogin',
    initialState:Boolean,
    reducer:{
        toggleloginame(state,action){
            return action.payload;
        },
    }
});

export const {toggleloginame}=Authlogin.actions
export default Authlogin.reducer