import React, { useState, useEffect } from 'react'
import './Final.css';
import axios from 'axios';


const Final = () => {
  const [users, setUsers] = useState([]);
  const testUsers=[
    {
      "name" : "Naga",
      "username" : "Vadlapudi",
      "email" : "naga@gmail.com"
    },
    {
      "name" : "Kalyan",
      "username" : "Kommerla",
      "email" : "kalyan@gmail.com"
    }
  ]
  useEffect(() => {
    loadUser();

  }, []);
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users");
    //setUsers(result.data);
    setUsers(testUsers);
  }


  return (
    <div className="table-border">
      <table className="table">
        <thead>
          <tr className="bg-dark text-white">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>edit and delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default Final;