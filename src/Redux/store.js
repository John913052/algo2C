import { configureStore } from "@reduxjs/toolkit";

import WorkSettings from './Workspaceslice'

const store=configureStore({
    reducer:{
        WorkSetting1:WorkSettings,
    }
})

export default store;