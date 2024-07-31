import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProfileCard = ({ profile, onSelectProfile }) => {
  return (
    <div className="card mb-4">
      <img src={profile.photo} className="card-img-top" alt={profile.name} />
      <div className="card-body">
        <h5 className="card-title">{profile.name}</h5>
        <p className="card-text">{profile.description}</p>
        <button
          className="btn btn-primary"
          onClick={() => onSelectProfile(profile)}
        >
          View on Map
        </button>
      </div>
    </div>
  );
};
export default ProfileCard;