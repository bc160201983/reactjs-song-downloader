import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
