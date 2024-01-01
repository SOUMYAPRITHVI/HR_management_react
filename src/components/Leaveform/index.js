import React,{useState} from "react";
import { useParams } from 'react-router-dom';
import './style.css';


const LeaveForm = ({ onLeaveSubmit }) => {
    const { id } = useParams();
    const [leaveData, setLeaveData] = useState({date: '',reason: '',});
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLeaveData({...leaveData, [name]: value });
      };
      const handleSubmit = async (e) => {
      e.preventDefault();
       try
        {
          const response = await fetch(`http://localhost:5000/leave/${id}`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(leaveData),
          });

          if (response.ok) {
            onLeaveSubmit();
            setLeaveData({ date: '', reason: '' });
            window.alert('Leave added successfully');
          } else {
           
            window.alert('Leave already taken in this date or Maximum number of leaves exceeds ');
            setLeaveData({ date: '', reason: '' });
        }
    }catch (error) {
      window.alert('Leave not submitted ');
    }

  };
  return (
    <form onSubmit={handleSubmit}>
        <br/>
        <table className="left-table" width="50%">
        <tr>
              <th colSpan="2"> <h3>Leave submission form</h3></th>
              
            </tr>
            <tr>
              <th> <label>Leave date: </label></th>
              <td> <input type="date" name="date" required value={leaveData.date} onChange={handleInputChange} /> </td>
            </tr>
            <tr>
              <th> <label>Leave Reason: </label></th>
              <td> <input type="text" name="reason" required value={leaveData.reason} onChange={handleInputChange} /> </td>
            </tr>
        </table>
     <br/>
     <table>
        <tr>
        <th colSpan="2" >  <button id="sub" type="submit">Submit Leave</button></th>
        </tr>
        </table>
    </form>
  );
};

export default LeaveForm;