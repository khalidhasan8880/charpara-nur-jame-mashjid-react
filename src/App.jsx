import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import AudioPlayer from "./pages/AudioPlayer/AudioPlayer";
import  { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet>
        <Home></Home>
      </Outlet>
      <AudioPlayer></AudioPlayer>
      
     <Toaster />
    </>
  );
}

export default App;
