import { taskList } from "../data/Tasks";
import SortAsending from "./svg/SortAsending";
import TaskCard from "./TaskCard";

export default function ListBoard() {
    
  const toDoList = taskList.filter((item) => item.status === "to-do");
  const onProgressList = taskList.filter(
    (item) => item.status === "on-progress"
  );
  const doneList = taskList.filter((item) => item.status === "done");
  const reviseList = taskList.filter((item) => item.status === "revise");

  return (
    <div className="-mx-2 mb-6 flex flex-wrap">
      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className="rounded-lg bg-indigo-600 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">To-Do ({toDoList.length})</h3>
            <SortAsending />
          </div>
          <div>
            {toDoList.map((task, index) => (
              <TaskCard key={index} task={task} color={"text-indigo-600"} />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className="rounded-lg bg-yellow-500 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              On Progress ({onProgressList.length})
            </h3>
            <SortAsending />
          </div>
          <div>
            {onProgressList.map((task, index) => (
              <TaskCard key={index} task={task} color={"text-yellow-500"} />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className="rounded-lg bg-teal-500 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Done ({doneList.length})</h3>
            <SortAsending />
          </div>

          <div>
            {doneList.map((task, index) => (
              <TaskCard key={index} task={task} color={"text-teal-500"} />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className="rounded-lg bg-rose-500 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              Revise ({reviseList.length})
            </h3>
            <SortAsending />
          </div>
          <div>
            {reviseList.map((task, index) => (
              <TaskCard key={index} task={task} color={"text-rose-500"} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
