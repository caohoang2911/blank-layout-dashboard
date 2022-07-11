import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoState } from "./types";

const initialState : TodoState = {
    todos:[],
    pending: false    
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        fecthTodoRequest: (state) => {
            state.pending = true;
        },
        fecthTodoSuccess: (state,action: PayloadAction<Todo[]>) => {
            state.todos = action.payload;
            state.pending = false;
        },
        fecthTodoFailure: (state) => {
            state.pending = false;
        }
    },
    extraReducers:{

    }
})

export const {fecthTodoRequest,fecthTodoSuccess} = todoSlice.actions;

export default todoSlice.reducer;