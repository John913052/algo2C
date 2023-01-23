import { configureStore } from "@reduxjs/toolkit";

import Selectlang1 from './Workspaceslice';
import FontSlice from "./FontSlice";
import CodeSlice from "./CodeSlice";

const store=configureStore({
    reducer:{
        Selectlang1:Selectlang1,
        FontSlice:FontSlice,
        CodeSlice:CodeSlice

    }
})

export default store;