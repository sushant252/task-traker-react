import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/task/TaskSlice";
const store = configureStore({
    reducer : {
        task:taskReducer
    }
})
export default store