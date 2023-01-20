import { configureStore } from "@reduxjs/toolkit";

import Selectlang1 from './Workspaceslice';
import FontSlice from "./FontSlice";

const store=configureStore({
    reducer:{
        Selectlang1:Selectlang1,
        FontSlice:FontSlice
    }
})

export default store;