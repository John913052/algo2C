import { createSlice } from "@reduxjs/toolkit";
const initialState=1;
const WorkSettings=createSlice({
    name:"Worksetting",
    initialState,
    reducers:{
        darklight(state,action){
            return state=state+1
        }
    }
});


export const {darklight}=WorkSettings.actions;
export default WorkSettings.reducer