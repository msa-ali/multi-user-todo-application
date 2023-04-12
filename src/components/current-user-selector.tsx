import { useState } from 'react';
import tw from 'tailwind-styled-components';

const Select = tw.select`
    px-2 
    py-1 
    text-lg 
    appearance-none 
    border-b-2 
    tracking-wide
`;

function CurrentUserSelector() {
    const users = ['user1', 'user2', 'user3', 'user4'];
    const [selected, setSelected] = useState(users[0]);
    return (
        <Select value={selected} onChange={e => setSelected(e.target.value)}>
            {users.map(user => <option key={user}>{user}</option>)}
        </Select>
    )
}

export default CurrentUserSelector