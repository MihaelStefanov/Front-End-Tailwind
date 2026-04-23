import { Routes, Route, useNavigate, useLocation  } from "react-router";
import { useState } from 'react'
import './App.css'
import Home from "./components/Home/Home";

import FirstRegularExam from "./components/Regular-Exam-23-June-2024-Page/FirstRegularExam";
import Postcard from './components/01.exams/01-Postcard/Postcard'
import AnimalRescue from './components/01.exams/02-AnimalRescue/AnimalRescue';
import Musicfy from "./components/01.exams/03-Musicfy/Musicfy";

import SecondRegularExam from "./components/HTML & CSS Retake-Exam - 21-December-2022/SecondRegularExam";
import FinancialServices from "./components/02.exams/01.Financial Services/FinancialServices";
import Luxury from "./components/02.exams/02. Luxury/Luxury";

function App() {
  const [count, setCount] = useState(0);

  const location = useLocation();

  return (
    <>
    {location.pathname === '/' && <Home />}
    {/* {location.pathname.includes('Regular-Exam') && <Home />}
    {location.pathname.includes('Retake-Exam') && <Home />} */}

      <Routes>
        <Route path="/Regular-Exam-23-June-2024" element={<FirstRegularExam />} />
        <Route path="/Postcard" element={<Postcard />} />
        <Route path="/AnimalRescue" element={<AnimalRescue />} />
        <Route path="/Musicfy" element={<Musicfy />} />

        <Route path="/HTML & CSS Retake-Exam - 21-December-2022" element={<SecondRegularExam />} />
        <Route path="/Financial-Fervices" element={<FinancialServices />} />
        <Route path="/Luxury" element={<Luxury />} />
      </Routes>

    </>
  )
}

export default App
