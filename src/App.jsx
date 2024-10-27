import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./components/HomePage";
import TaskContextProvider from "./contexts/TaskContextProvider";

function App() {
  return (
    <TaskContextProvider>
      <HomePage />
      <ToastContainer
        position="bottom-right"
        transition={Zoom}
        autoClose={1500}
      />
    </TaskContextProvider>
  );
}

export default App;
