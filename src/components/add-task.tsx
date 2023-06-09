import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { addTask } from '../features/task';
import Input from './input';

function AddTask() {
    const [text, setText] = useState('');

    const currentUser  = useAppSelector(state => state.users.currentUser);
    const dispatch = useAppDispatch();

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => setText(event.target.value)

    const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            if (text) {
                dispatch(addTask(text, currentUser?.id))
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
            placeholder='Add tasks here...'
        />
    )
}

export default AddTask