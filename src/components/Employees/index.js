import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
 
export default function Employee() {
    const [employees, setEmployees] = useState([]);
        
    useEffect(() => {
        fetch('http://localhost:5000/employees')
          .then(response => response.json())
          .then(data => {setEmployees(data)});
      },[]);
    return (
          <div className='employeelist'>
              <h3 className="list-of-employees">List of Employees</h3>
              <div className="parent">
                  {employees.map((data => <p>
                    <Link to={`/employees/${data.id}`}className="list1">{data.fname} { data.lname}</Link>
                    
                    </p>))}
              </div>
         </div>
      )
  }
