import { useState } from "react";
import { useTasks } from "../contexts/TaskContext";
import TaskContextProvider from "../contexts/TaskContextProvider";
import TaskDetails from "./TaskDetails";
import TopBar from "./TopBar";

export default function TaskBoard() {
  const tasks = useTasks();
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchItem(searchTerm);

    const filteredTasks = searchTerm
      ? tasks.filter((task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [...tasks];

    setFilteredTasks(filteredTasks);
  };

  return (
    <TaskContextProvider>
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <TopBar searchItem={searchItem} onSearch={handleSearch} />
        <TaskDetails
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
          setSearchItem={setSearchItem}
        />
      </main>
    </TaskContextProvider>
  );
}
