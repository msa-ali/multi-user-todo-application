import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

export interface User {
    id: string;
    name: string;
    createdTs: number;
}

interface UserState {
    users: User[];
    currentUser?: User;
}

const initialState: UserState = {
    users: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: {
            reducer: (state, action: PayloadAction<User>) => {
                state.users.unshift(action.payload);
            },
            prepare: (name: string) => {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        createdTs: Date.now(),
                    }
                };
            },
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        setCurrentUser: (state, action: PayloadAction<string>) => {
            state.currentUser = state.users.find(user => user.id === action.payload);
        },
    }
});

export const { addUser, deleteUser, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;