import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProfileDetail = ({ profile, onBack }) => {
  if (!profile) return null;
  return (
    <div className="profile-detail container mt-4">
      <button className="btn btn-secondary mb-4" onClick={onBack}>
        Back to Profiles
      </button>
      <div className="card mb-4">
        <img src={profile.photo} className="card-img-top" alt={profile.name} />
        <div className="card-body">
          <h5 className="card-title">{profile.name}</h5>
          <p className="card-text">{profile.description}</p>
          <p className="card-text">
            <strong>Address:</strong> {profile.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;