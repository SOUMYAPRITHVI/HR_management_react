import './App.css';
import Nav from './components/Header/index.js';
import Home from './components/Home/index.js';
import About from './components/About/index.js';
import Employees from './components/Employees/index.js'
import EmployeeDetails from './components/Employeedetail/index.js';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/*" element={<Home />}/>
        <Route path="about" element = {<About />}/>
        <Route path="employees" element={<Employees />}/>
        <Route path="employees/:id" element={<EmployeeDetails />}/>
       </Routes>
    </div>
  );
}

export default App;
