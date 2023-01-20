import { createSlice } from "@reduxjs/toolkit";
const initialState='javascript'
const Selectlang=createSlice({
    name:"Selectlang1",
    initialState,
    reducers:{
        lang1(state,action){
             return state
        }
    }
});


export const {lang1}=Selectlang.actions;
export default Selectlang.reducer