import TaskContextProvider from "../contexts/TaskContextProvider";
import Sidebar from "./Sidebar";
import TaskBoard from "./TaskBoard";

export default function HomePage() {
  return (
    <TaskContextProvider>
      <div className="bg-gray-900 text-white">
        <div className="flex h-screen">
          <Sidebar />
          <TaskBoard />
        </div>
      </div>
    </TaskContextProvider>
  );
}
