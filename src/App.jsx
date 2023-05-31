import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import HomePage from "./pages/HomePage.jsx";
import Register from "./pages/Register.jsx";
import Habits from "./pages/Habits.jsx";
import Today from "./pages/Today.jsx";
import Historic from "./pages/Historic.jsx";

axios.defaults.headers.common['Authorization'] = 'QHuPiPmVdHshIxfAx1P0c7cn';


function App() {

  const [imgUser, setImgUser] = useState('');

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const [register, setRegister] = useState({
    email: "",
    name: "",
    image: "",
    password: ""
  });



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage login={login} setLogin={setLogin} setImgUser={setImgUser} />} />
          <Route path="/cadastro" element={<Register register={register} setRegister={setRegister} />} />
          <Route path="/habitos" element={<Habits imgUser={imgUser} />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
