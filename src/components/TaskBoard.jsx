import TaskDetails from "./TaskDetails";
import TopBar from "./TopBar";

export default function TaskBoard() {
  return (
    <main className="flex-1 overflow-y-auto overflow-x-hidden">
      <TopBar />
      <TaskDetails />
    </main>
  );
}
