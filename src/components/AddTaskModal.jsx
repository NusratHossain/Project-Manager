import { useState } from "react";
import { toast } from "react-toastify";
import { useTaskDispatcher, useTasks } from "../contexts/TaskContext";
import { defaultTask } from "../data/Tasks";
import {
  FormEdittingValidation,
  FormValidation,
} from "../utils/formValidation";

export default function AddTaskModal({
  setSearchItem,
  taskToUpdate = null,
  setTaskToUpdate,
  setShowModal,
}) {
  const [task, setTask] = useState(taskToUpdate || defaultTask);
  const isAdd = Object.is(taskToUpdate, null);

  const tasks = useTasks();
  const dispatch = useTaskDispatcher();

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleCreateTask = (event, task) => {
    event.preventDefault();
    const { notValidated, fieldsNotFilled } = FormValidation(task);
    const hasTaskChanged = FormEdittingValidation(tasks, task);

    if (notValidated) {
      alert(`Please fill in all the mandatory fields: ${fieldsNotFilled}.`);
      return;
    }

    if (isAdd) {
      addTask(task);
      toast.success("Task Created Successfully !");
    } else {
      if (!hasTaskChanged) {
        toast.warning("Task Not Changed!");
        alert(
          "You haven't changed the task at all. To proceed, either change something or cancel the transaction. Thank you!"
        );
        return;
      }
      updateTask(task);
      toast.success("Task Updated Successfully!");
    }
    resetForm();
  };

  const handleClose = () => {
    setTaskToUpdate(null);
    setShowModal(false);
  };

  const addTask = (task) => {
    dispatch({
      type: "added",
      task,
      id: crypto.randomUUID(),
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const resetForm = () => {
    setSearchItem("");
    setTask(defaultTask);
    setTaskToUpdate(null);
    setShowModal(false);
  };

  return (
    <div className="">
      <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
        <div className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-green-400">
            {isAdd ? "Create Task" : "Edit Task"}
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="taskName"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Task Name
              </label>
              <input
                type="text"
                id="taskName"
                name="title"
                value={task.title}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={task.description}
                onChange={handleChange}
                rows="3"
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="dueDate"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                name="date"
                value={task.date}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="mb-1 block text-sm font-medium text-gray-300"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={task.category}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="" disabled hidden>
                  Select Category
                </option>
                <option value="to-do">To-Do</option>
                <option value="on-progress">On Progress</option>
                <option value="done">Done</option>
                <option value="revise">Revised</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={(event) => handleCreateTask(event, task)}
              >
                {isAdd ? "Create Task" : "Edit Task"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
