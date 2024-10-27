import { useState } from "react";
import { toast } from "react-toastify";
import { useTaskDispatcher, useTasks } from "../contexts/TaskContext";
import TaskContextProvider from "../contexts/TaskContextProvider";
import {
  FormEdittingValidation,
  FormValidation,
} from "../utils/formValidation";
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
    console.log({ filteredTasks, tasks, filteredSearchedTasks });

    setFilteredTasks(filteredSearchedTasks);
  };

  const handleCreateTask = (event, task, isAdd) => {
    event.preventDefault();
    const { notValidated, fieldsNotFilled } = FormValidation(task);
    const hasTaskChanged = FormEdittingValidation(tasks, task);

    if (notValidated) {
      alert(`Please fill in all the mandatory fields: ${fieldsNotFilled}.`);
      return;
    }

    if (isAdd) {
      setFilteredTasks([...tasks, task]);
      addTask(task);
      toast.success("Task Created Successfully!");
      console.log({ tasks });
    } else {
      if (!hasTaskChanged) {
        alert(
          "You haven't changed the task at all. To proceed, either change something or cancel the transaction. Thank you!"
        );
        return;
      }
      updateTask(task);
      toast.success("Task Updated Successfully!");
      let newTaskList = tasks.filter((item) => item.id !== task.id);
      setFilteredTasks([...newTaskList, task]);
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
    <TaskContextProvider>
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <TopBar searchItem={searchItem} onSearch={handleSearch} />
        <TaskDetails
          handleAddEditTask={handleCreateTask}
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
          setSearchItem={setSearchItem}
        />
      </main>
    </TaskContextProvider>
  );
}
