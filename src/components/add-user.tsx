import { useState } from 'react';
import { useAppDispatch } from '../store';
import Input from './input';
import { addUser } from '../features/user';

function AddUser() {
    const [text, setText] = useState('');

    const dispatch = useAppDispatch();

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => setText(event.target.value)

    const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            if (text) {
                dispatch(addUser(text))
                setText("");
            }
        }
    }

    return (
        <Input
            type='text'
            value={text}
            onKeyDown={onKeyDown}
            onChange={handleChange}
            placeholder='Add User'
        />
    )
}

export default AddUser;