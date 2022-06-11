import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";
import todosCompletedSlice from "./reducers/todosCompletedSlice";

const rootReducer = combineReducers({
    tasks: todoReducer,
    completedTasks: todosCompletedSlice
})

const store = configureStore({
    reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store }