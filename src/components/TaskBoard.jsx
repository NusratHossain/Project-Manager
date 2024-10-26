import { useState } from "react";
import { useTasks } from "../contexts/TaskContext";
import TaskContextProvider from "../contexts/TaskContextProvider";
import TaskDetails from "./TaskDetails";
import TopBar from "./TopBar";

export default function TaskBoard() {
  const tasks = useTasks();
  const [filteredTasks, setFilteredTasks] = useState([]);

  return (
    <TaskContextProvider filteredTasks={tasks}>
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <TopBar setFilteredTasks={setFilteredTasks} />
        <TaskDetails filteredTasks={filteredTasks} />
      </main>
    </TaskContextProvider>
  );
}
