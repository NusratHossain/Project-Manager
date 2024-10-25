import Sidebar from "./components/Sidebar";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex h-screen">
        <Sidebar />
        <TaskBoard />
      </div>
    </div>
  );
}

export default App;
