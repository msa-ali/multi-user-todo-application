import AddTask from "../components/add-task";
import TaskCard from "../components/task-card";
import { deleteTask } from "../features/task";
import { useAppDispatch, useAppSelector } from "../store";
import { MdDeleteForever } from 'react-icons/md';

function TaskPage() {
  const tasks = useAppSelector(state => state.tasks.entities);

  const dispatch = useAppDispatch();

  const onTaskDelete = (id: string) => {
    dispatch(deleteTask(id));
  }

  return (
    <div className="flex flex-col justify-center items-center h-full ">
      {tasks.length === 0 && <div className="text-gray-300">No Task found 🫤</div>}
      <AddTask />
      {tasks.map(task => {
        return (
          <div key={task.id} className="flex items-center gap-4">
            <TaskCard key={task.id} task={task} />
            <MdDeleteForever 
              className="text-3xl text-gray-600 cursor-pointer hover:text-red-600"
              onClick={() => onTaskDelete(task.id)}
            />
          </div>
          
        );
      })}
    </div>
  )
}

export default TaskPage