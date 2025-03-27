import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
