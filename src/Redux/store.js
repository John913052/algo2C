import { configureStore } from "@reduxjs/toolkit";

import Selectlang1 from './Workspaceslice'

const store=configureStore({
    reducer:{
        Selectlang1:Selectlang1,
    }
})

export default store;