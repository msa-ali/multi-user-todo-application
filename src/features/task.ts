import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { deleteUser } from "./user";

export interface Task {
    id: string;
    text: string;
    completed: boolean;
    userId?: string;
    createdTS: number;
}

interface TaskState {
    entities: Task[];
}

const initialState: TaskState = {
    entities: [],
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: {
            reducer: (state, action: PayloadAction<Task>) => {
                state.entities.unshift(action.payload);
            },
            prepare: (text: string, userId?: string) => {
                return {
                    payload: {
                        id: nanoid(),
                        createdTS: Date.now(),
                        text,
                        completed: false,
                        userId,
                    }
                };
            }
        },
        toggleTask: (state, action: PayloadAction<string>) => {
            const taskToComplete = state.entities.find(task => task.id === action.payload);
            if (taskToComplete) {
                taskToComplete.completed = !taskToComplete.completed;
            }
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.entities = state.entities.filter(task => task.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(deleteUser, (state, action) => {
            state.entities = state.entities.filter(task => task.userId !== action.payload);
        });
    }
});

export const { addTask, deleteTask, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;