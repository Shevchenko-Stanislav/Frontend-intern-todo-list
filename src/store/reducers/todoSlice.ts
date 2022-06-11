import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoItem } from "../../types/types";

interface TodoState {
    tasks: ITodoItem[];
    isShowignList: boolean;
}

const initialState: TodoState = {
    tasks: [],
    isShowignList: false
}

const todoSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {

        showingList(state):void {
            state.isShowignList = true;
        },

        toggleShowingTodoList(state):void {
            state.isShowignList = !state.isShowignList;
        },

        addTask(state, action: PayloadAction<{message: string, id: string}>): void {
                const newTask = {
                    id: action.payload.id,
                    message: action.payload.message,
                    editMode: false,
                    isCompleted: false
            }
            state.tasks.push(newTask);
        },

        removeTask(state, action: PayloadAction<{id: string}>): void {
            state.tasks = state.tasks.filter(item => item.id !== action.payload.id); 
        },

        completeTheTask(state, action: PayloadAction<{id: string}>): void {
            const current = state.tasks.find(item => item.id === action.payload.id);
            if (current) {
                current.isCompleted = !current.isCompleted
            }
        }
    }
});

export const { 
    addTask, 
    showingList,
    removeTask,
    completeTheTask,
    toggleShowingTodoList,

} = todoSlice.actions;

export default todoSlice.reducer;