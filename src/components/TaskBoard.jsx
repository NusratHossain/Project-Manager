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

    const filteredSearchedTasks = searchTerm
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [...tasks];

    setFilteredTasks(filteredSearchedTasks);
  };

  const handleCreateTask = (task, isAdd) => {
    if (isAdd) {
      addTask(task);
      toast.success("Task Created Successfully!");
      setFilteredTasks((prevTasks) => [...prevTasks, task]);
    } else {
      updateTask(task);
      toast.success("Task Updated Successfully!");
      setFilteredTasks((prevTasks) =>
        prevTasks.map((item) => (item.id === task.id ? task : item))
      );
    }
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
        handleAddEditTask={handleCreateTask}
        filteredTasks={filteredTasks}
        setFilteredTasks={setFilteredTasks}
        setSearchItem={setSearchItem}
      />
    </main>
  );
}
