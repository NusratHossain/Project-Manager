import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <HomePage />
      <ToastContainer
        position="bottom-right"
        transition={Zoom}
        autoClose={1500}
      />
    </>
  );
}

export default App;
