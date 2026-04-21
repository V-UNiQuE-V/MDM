import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch API Data
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  // Filter Data
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>User Search App</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "250px" }}
      />

      {/* User List */}
      <ul style={{ listStyle: "none", marginTop: "20px" }}>
        {filteredUsers.map(user => (
          <li key={user.id} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
            <strong>{user.name}</strong><br/>
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

