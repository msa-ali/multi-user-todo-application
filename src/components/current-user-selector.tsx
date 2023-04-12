import { useState } from 'react';
import tw from 'tailwind-styled-components';
import { useAppSelector } from '../store';

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
    const { entities: users, currentUser } = useAppSelector(state => state.users);
    const [selected, setSelected] = useState(currentUser?.id || users[0]?.id);
    return (
        <Select
            value={selected}
            onChange={e => setSelected(e.target.value)}
        >
            {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
        </Select>
    )
}

export default CurrentUserSelector