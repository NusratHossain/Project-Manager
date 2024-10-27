import { useState } from "react";
import { toast } from "react-toastify";
import { useTaskDispatcher, useTasks } from "../contexts/TaskContext";
import TaskDetails from "./TaskDetails";
import TopBar from "./TopBar";

export default function TaskBoard() {
  const tasks = useTasks();
  const dispatch = useTaskDispatcher();

  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchItem(searchTerm);

    const trimmedSearchTerm = searchTerm.trim().toLowerCase(); // trimming whitespaces
    const filteredSearchedTasks = trimmedSearchTerm
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(trimmedSearchTerm)
        )
      : [...tasks]; // if empty return original taskList
    setFilteredTasks(filteredSearchedTasks);
  };

  const handleCreateEditTask = (task, isAdd) => {
    if (isAdd) {
      addTask(task);
      toast.success("Task Created Successfully!");
      setFilteredTasks([...tasks, task]); // update with original taskList
    } else {
      updateTask(task);
      toast.success("Task Updated Successfully!");
      setFilteredTasks(
        tasks.map((item) => (item.id === task.id ? task : item))
      ); // new list with updated task
    }
    setSearchItem("");
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

  return (
    <main className="flex-1 overflow-y-auto overflow-x-hidden">
      <TopBar searchItem={searchItem} onSearch={handleSearch} />
      <TaskDetails
        handleAddEditTask={handleCreateEditTask}
        filteredTasks={filteredTasks}
        setFilteredTasks={setFilteredTasks}
      />
    </main>
  );
}
