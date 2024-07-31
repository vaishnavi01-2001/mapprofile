import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles, onSelectProfile }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {profiles.map((profile) => (
          <div className="col-md-4" key={profile.id}>
            <ProfileCard profile={profile} onSelectProfile={onSelectProfile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;