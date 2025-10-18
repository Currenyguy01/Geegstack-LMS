import './App.css';
import Dashboard from './Components/Dashboard';
import Login from "./Components/Login";
import Lecture from './Components/Lecture';
import Challenges from './Components/Challenges';
import Projects from './Components/Projects';
import Leaderboard from './Components/Leaderboard';
import Submission from './Components/Submission';
import Quiz from './Components/Quiz';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseDetail from './Components/CourseDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Lecture" element={<Lecture/>} />
        <Route path="/Challenges" element={<Challenges/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/Leaderboard' element={<Leaderboard/>}/>
        <Route path='/Submission' element={<Submission/>}/>
        <Route path='/Quiz' element={<Quiz/>}/>
        <Route path='/CourseDetail' element={<CourseDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
