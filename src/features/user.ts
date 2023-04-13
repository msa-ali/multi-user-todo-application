import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

export interface User {
    id: string;
    name: string;
    createdTs: number;
}

interface UserState {
    entities: User[];
    currentUser?: User;
}
const adminUser = {
    id: 'admin',
    name: 'admin',
    createdTs: Date.now(),
};
const initialState: UserState = {
    entities: [adminUser],
    currentUser: adminUser,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: {
            reducer: (state, action: PayloadAction<User>) => {
                state.entities.unshift(action.payload);
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
            state.entities = state.entities.filter(user => user.id !== action.payload);
        },
        setCurrentUser: (state, action: PayloadAction<string>) => {
            state.currentUser = state.entities.find(user => user.id === action.payload);
        },
    }
});

export const { addUser, deleteUser, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;