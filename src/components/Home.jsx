import React, { useState } from 'react';
import Nav from './Nav';
import UserTable from './UserTable';
import AdminTable from './AdminTable';

function Home() {
  const [showUserTable, setShowUserTable] = useState(false);
  const [showAdminTable, setShowAdminTable] = useState(false);

  const [usersData, setUsersData] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    position: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); 
  };

  const handleAddUser = () => {
    if (!formData.name || !formData.lastName || !formData.position) {
      setError('All fields are required.');
      return;
    }

    const newUser = {
      id: usersData.length + 1,
      ...formData
    };
    setUsersData([...usersData, newUser]);
    setFormData({ name: '', lastName: '', position: '' });
    setError(''); 
  };

  const handleDeleteUser = (id) => {
    setUsersData(usersData.filter(user => user.id !== id));
  };

  return (
    <div>
      <Nav />
      <main>
        <h2>Generation Thailand Home - {showUserTable ? "User Sector" : "Admin Sector"}</h2>
        <div>
          <button onClick={() => { setShowUserTable(true); setShowAdminTable(false); }}>
            User Home Sector
          </button>
          <button onClick={() => { setShowUserTable(false); setShowAdminTable(true); }}>
            Admin Home Sector
          </button>
        </div>

        {showAdminTable && (
          <div>
            <h3>Create User Here</h3>
            <div>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Name" 
              />
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                placeholder="Last Name" 
              />
              <input 
                type="text" 
                name="position" 
                value={formData.position} 
                onChange={handleChange} 
                placeholder="Position" 
              />
              <button onClick={handleAddUser}>
                Save
              </button>
            </div>
            {error && <p>{error}</p>}
          </div>
        )}

        {showUserTable && <UserTable users={usersData} />}
        {showAdminTable && <AdminTable users={usersData} onDelete={handleDeleteUser} />}
      </main>
    </div>
  );
}

export default Home;
