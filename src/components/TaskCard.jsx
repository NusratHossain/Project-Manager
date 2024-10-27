import { useTaskDispatcher, useTasks } from "../contexts/TaskContext";
import { formattedDate } from "../utils/formatDate";
import Delete from "./svg/Delete";
import Edit from "./svg/Edit";

export default function TaskCard({
  setFilteredTasks,
  setTaskToUpdate,
  setShowModal,
  task,
  color,
}) {
  const tasks = useTasks();
  const dispatch = useTaskDispatcher();
  const handleEdit = (task) => {
    setShowModal(true);
    setTaskToUpdate(task);
  };

  const handleDelete = (taskId) => {
    alert(`Are you sure you want to delete the task??`);
    dispatch({ type: "deleted", id: taskId });
    setFilteredTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className={`mb-2 flex-1 font-semibold ${color}`}>{task.title}</h4>

        <div className="flex gap-2">
          <button onClick={() => handleDelete(task.id)}>
            <Delete />
          </button>
          <button onClick={() => handleEdit(task)}>
            <Edit />
          </button>
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{task.description}</p>

      <p className="mt-6 text-xs text-zinc-400">{formattedDate(task.date)}</p>
    </div>
  );
}
