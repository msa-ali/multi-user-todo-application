import { useState } from 'react';
import tw from 'tailwind-styled-components'
import { useAppDispatch } from '../store';
import { addTask } from '../features/task';

const Input = tw.input`
    m-2
    p-4
    text-xl
    placeholder:text-lg
    placeholder:text-gray-300
    border-b-2
    outline-none
    w-11/12
`;

function AddTask() {
    const [text, setText] = useState('');

    const dispatch = useAppDispatch();

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => setText(event.target.value)

    const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            if (text) {
                dispatch(addTask(text))
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