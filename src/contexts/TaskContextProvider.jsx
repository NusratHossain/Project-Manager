import { useImmerReducer } from "use-immer";
import { taskList } from "../data/Tasks";
import taskReducer from "../reducers/taskReducer";
import { TaskContext, TaskDispatchContext } from "./TaskContext";

export default function TaskContextProvider({ children }) {
  const [tasks, dispatch] = useImmerReducer(taskReducer, taskList);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
