import { useTasks } from "../contexts/TaskContext";
import TaskListEmpty from "../TaskListEmpty";
import SortAsending from "./svg/SortAsending";
import TaskCard from "./TaskCard";

export default function ListBoard({
  filteredTasks,
  setShowModal,
  setTaskToUpdate,
}) {
  const originalTasks = useTasks();
  const tasks = filteredTasks?.length > 0 ? filteredTasks : originalTasks;

  const toDoList = tasks.filter((item) => item.category === "to-do");
  const onProgressList = tasks.filter(
    (item) => item.category === "on-progress"
  );
  const doneList = tasks.filter((item) => item.category === "done");
  const reviseList = tasks.filter((item) => item.category === "revise");

  return (
    <div className="-mx-2 mb-6 flex flex-wrap">
      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className="rounded-lg bg-indigo-600 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">To-Do ({toDoList.length})</h3>
            <SortAsending />
          </div>
          <div>
            {toDoList.length > 0 ? (
              toDoList.map((task, index) => (
                <TaskCard
                  setTaskToUpdate={setTaskToUpdate}
                  setShowModal={setShowModal}
                  key={index}
                  task={task}
                  color={"text-indigo-600"}
                />
              ))
            ) : (
              <TaskListEmpty />
            )}
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
            {onProgressList.length > 0 ? (
              onProgressList.map((task, index) => (
                <TaskCard
                  setTaskToUpdate={setTaskToUpdate}
                  setShowModal={setShowModal}
                  key={index}
                  task={task}
                  color={"text-yellow-500"}
                />
              ))
            ) : (
              <TaskListEmpty />
            )}
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
            {doneList.length > 0 ? (
              doneList.map((task, index) => (
                <TaskCard
                  setTaskToUpdate={setTaskToUpdate}
                  setShowModal={setShowModal}
                  key={index}
                  task={task}
                  color={"text-teal-500"}
                />
              ))
            ) : (
              <TaskListEmpty />
            )}
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
            {reviseList.length > 0 ? (
              reviseList.map((task, index) => (
                <TaskCard
                  setTaskToUpdate={setTaskToUpdate}
                  setShowModal={setShowModal}
                  key={index}
                  task={task}
                  color={"text-rose-500"}
                />
              ))
            ) : (
              <TaskListEmpty />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
