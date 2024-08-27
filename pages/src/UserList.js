import React, { useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  const handleSelectChange = async (event) => {
    const page = event.target.value;
    const response = await fetch('https://reqres.in/api/users?page=${page}');
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <div>
      <h1>User List Page</h1>
      <select onChange={handleSelectChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;