import { useState } from 'react';
import tw from 'tailwind-styled-components';
import { useAppDispatch, useAppSelector } from '../store';
import { setCurrentUser } from '../features/user';

const Select = tw.select`
    px-2 
    py-1 
    text-lg 
    appearance-none 
    border-b-2 
    tracking-wide
    outline-none
`;

function CurrentUserSelector() {
    const dispatch = useAppDispatch();
    const { entities: users, currentUser } = useAppSelector(state => state.users);
    return (
        <Select
            value={currentUser?.id}
            onChange={e => {
                dispatch(setCurrentUser(e.target.value));
            }}
            name={currentUser?.name}
        >
            {users.map(user => <option key={user.id} label={user.name} value={user.id}>{user.name}</option>)}
        </Select>
    )
}

export default CurrentUserSelector