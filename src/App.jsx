import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
// import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
