import React, { useState } from 'react';
import profilesData from '../data/profiles.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPanel = () => {
  const [profiles, setProfiles] = useState(profilesData);
  const [newProfile, setNewProfile] = useState({
    name: '',
    photo: '',
    description: '',
    address: '',
  });

  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  const handleAddProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
    setNewProfile({ name: '', photo: '', description: '', address: '' });
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className="admin-panel container mt-4">
      <h2>Admin Panel</h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newProfile.name}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={newProfile.photo}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProfile.description}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={newProfile.address}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <button className="btn btn-success" onClick={handleAddProfile}>
          Add Profile
        </button>
      </div>
      <ul className="list-group">
        {profiles.map((profile) => (
          <li key={profile.id} className="list-group-item d-flex justify-content-between align-items-center">
            {profile.name}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteProfile(profile.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;