import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Employee from '../Employees/index.js';
import LeaveForm from '../Leaveform/index.js';
import './style.css';


export default function EmployeeDetails() {
  const { id } = useParams();
  const [employeedetails, setEmployeedetails] = useState([]);
  const [updateEmployeeDetails, setUpdateEmployeeDetails] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (parseInt(id, 10) >=100) {
      navigate('/error'); 
      return;
    }

    fetch(`http://localhost:5000/employees/${id}`)
      .then(response => response.json())
      .then(data => {
        setEmployeedetails(data);
      })
      .catch(error => console.error('Fetching data error:', error));
  }, [id,updateEmployeeDetails,navigate]);

  const handleUpdateEmployeeDetails = () => {
    setUpdateEmployeeDetails(prevState => !prevState);
  };

  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-3">
        <div>
          <Employee />
        </div>
      </div>
      <div className="col-9">
        {employeedetails.map(data => (
          <div className='empdetail'>
             <table className="top-table">
            <tr>
              <th> <h3>Details for{data.fname} {data.lname} :{data.title}</h3></th>
              </tr>
            </table>
          
          <table className="left-table" width="50%">
            <tr>
              <th> First name </th>
              <td> {data.fname}</td>
            </tr>
            <tr>
              <th> Last name </th>
              <td> {data.lname}</td>
            </tr>
            <tr>
              <th> Email </th>
              <td> {data.email}</td>
            </tr>
          <tr>
          <th> Phone </th>
          <td> {data.phone}</td>
          </tr>
          <tr>
          <th >  Leave taken : </th>
          <td > {data.leave}</td>
          </tr>
          <tr>
          <th> Maximum leave allowed : </th>
          <td> {data.max_leaves}</td>
          </tr>
          <tr>
          <th>  Remaining leaves : </th>
          <td> {data.leave_remain}</td>
          </tr>
          </table>
            <LeaveForm onLeaveSubmit={handleUpdateEmployeeDetails} />
          </div>
        ))}
      </div>
    </div>
  </div>


  );
}

