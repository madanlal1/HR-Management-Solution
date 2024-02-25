import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import MyAttendance from './components/attendance/MyAttendance';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/attendance' element={<MyAttendance/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
