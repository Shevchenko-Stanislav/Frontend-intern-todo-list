import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoItem } from "../../types/types";

interface TodoState {
    completedTasks: ITodoItem[];
    isShowignList: boolean;
}

const initialState: TodoState = {
    completedTasks: [],
    isShowignList: false
}

const todosCompletedSlice = createSlice({
    name: "completedTasks",
    initialState: initialState,
    reducers: {

        showingCompletedList(state):void {
            state.isShowignList = true;
        },

        toggleShowingCompletedList(state):void {
            state.isShowignList = !state.isShowignList;
        },

        addTask(state, action: PayloadAction<{message: string, id: string}>): void {
                const newTask = {
                    id: action.payload.id,
                    message: action.payload.message,
                    editMode: false,
                    isCompleted: true
            }
            state.completedTasks.push(newTask);
        },

        removeAllTask(state): void {
            state.completedTasks = [];
        },
    }
});

export const { 
    removeAllTask,
    showingCompletedList,
    toggleShowingCompletedList,
    addTask

} = todosCompletedSlice.actions;

export default todosCompletedSlice.reducer;