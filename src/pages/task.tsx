import AddTask from "../components/add-task";
import { useAppSelector } from "../store"

function TaskPage() {
  const tasks = useAppSelector(state => state.tasks.entities);

  return (
    <div className="flex flex-col justify-between items-center h-full ">
      {tasks.length === 0 && <div className="text-gray-300">No Task found 🫤</div>}
      {tasks.map(task => {
        return (
          <div key={task.id}>{task.text}</div>
        );
      })}
      <AddTask />
    </div>
  )
}

export default TaskPage