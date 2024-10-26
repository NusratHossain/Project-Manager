import { createContext, useContext } from "react";
import { taskList } from "../data/Tasks";

export const TaskContext = createContext(taskList);
export const TaskDispatchContext = createContext(null);

export const useTasks = () => useContext(TaskContext);
export const useTaskDispatcher = () => useContext(TaskDispatchContext);
