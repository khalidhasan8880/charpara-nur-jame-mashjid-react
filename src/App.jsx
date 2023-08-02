import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet>
        <Home></Home>
      </Outlet>
    </>
  );
}

export default App;
