import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Register from "./pages/Register.jsx";
import Habits from "./pages/Habits.jsx";
import Today from "./pages/Today.jsx";
import Historic from "./pages/Historic.jsx";
import { useState } from "react";


function App() {

  const [register, setRegister] = useState({
    email: "",
    name: "",
    image: "",
    password: ""
  });

  console.log(register);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<Register register={register} setRegister={setRegister} />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
