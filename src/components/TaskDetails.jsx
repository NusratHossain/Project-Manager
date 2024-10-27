import { useState } from "react";
import AddTask from "./AddTask";
import AddTaskModal from "./AddTaskModal";
import ListBoard from "./ListBoard";

export default function TaskDetails({
  filteredTasks,
  setFilteredTasks,
  setSearchItem,
}) {
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>
        <AddTask setSearchItem={setSearchItem} setShowModal={setShowModal} />
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <div className="relative w-full max-w-xl p-8 mx-auto">
            <AddTaskModal
              setSearchItem={setSearchItem}
              filteredTasks={filteredTasks}
              taskToUpdate={taskToUpdate}
              setTaskToUpdate={setTaskToUpdate}
              setShowModal={setShowModal}
            />
          </div>
        </div>
      )}
      <ListBoard
        filteredTasks={filteredTasks}
        setFilteredTasks={setFilteredTasks}
        setShowModal={setShowModal}
        setTaskToUpdate={setTaskToUpdate}
      />
    </div>
  );
}
