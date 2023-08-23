import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import TestCenterAudio from "./components/TestCenterAudio";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet>
        <Home></Home>
      </Outlet>
      <TestCenterAudio></TestCenterAudio>
    </>
  );
}

export default App;
