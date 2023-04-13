import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { MdDeleteForever } from 'react-icons/md';

import { useAppDispatch, useAppSelector } from "../store"
import { User, deleteUser } from '../features/user';

interface Props {
    user: User
}
dayjs.extend(relativeTime);

function UserCard({ user }: Props) {
    const currentUser = useAppSelector(state =>
        state.users.currentUser
    );

    const dispatch = useAppDispatch();

    const onUserDelete = () => {
        dispatch(deleteUser(user.id));
    }

    return (
        <div className="flex flex-col justify-start items-start p-4 w-96 shadow-md shadow-gray-200 rounded-md">
            <div className="flex justify-between item-center w-full">
                <div className="flex flex-col gap-2">
                    <h2 className='text-xl'>{user.name}</h2>
                    {user.id === "admin" && <p className='text-md text-gray-400'>Admin</p>}
                </div>
                {user.id !== "admin" && <MdDeleteForever 
                    className="text-xl text-gray-600 cursor-pointer hover:text-red-600"
                    onClick={onUserDelete}
                />}
            </div>
            <div className="my-3 h-0.25 border-2 w-full"></div>
            {user.id === currentUser?.id && <p>🟢</p>}
        </div>
    )
}

export default UserCard