import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Task, toggleTask } from "../features/task"
import { useAppDispatch, useAppSelector } from "../store"

interface Props {
    task: Task
}
dayjs.extend(relativeTime);

function TaskCard({ task }: Props) {
    const user = useAppSelector(state =>
        state.users.entities.find(
            user => user.id === task.userId
        )
    );

    const dispatch = useAppDispatch();

    const onCheckboxClick = () => {
        dispatch(toggleTask(task.id));
    }

    return (
        <div className="flex flex-col justify-start items-start p-4 w-96 shadow-md shadow-gray-200 rounded-md">
            <div className="flex justify-between item-center w-full">
                <div className="flex flex-col gap-2">
                    <h2 className='text-xl'>{task.text}</h2>
                    <p className='text-md text-gray-400'>{user ? user.name : 'Unassigned'}</p>
                </div>
                <input
                    checked={task.completed}
                    type="checkbox"
                    value=""
                    onChange={onCheckboxClick}
                    className="w-6 h-6 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2" />
            </div>
            <div className="my-3 h-0.25 border-2 w-full"></div>
            <p className='text-sm text-gray-400'>{dayjs(new Date(task.createdTS)).toNow(true)} ago</p>
        </div>
    )
}

export default TaskCard