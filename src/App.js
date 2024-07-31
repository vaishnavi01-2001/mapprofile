import React, { useState, useEffect } from 'react';
import ProfileList from './components/ProfileList';
import MapView from './components/MapView';
import ProfileDetail from './components/ProfileDetail';
import AdminPanel from './components/AdminPanel';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilesData from './data/profiles.json'; 
function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [profiles, setProfiles] = useState(profilesData); 
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    setProfiles(profilesData); 
  }, [profilesData]);
  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile);
  };
  const handleBack = () => {
    setSelectedProfile(null);
  };
  return (
    <div className="App">
      <header className="bg-primary text-white p-4">
        <h1 className="text-center">User Profile Map Application</h1>
      </header>
      <div className="container mt-4">
        <button
          className="btn btn-secondary mb-4"
          onClick={() => setShowAdminPanel(!showAdminPanel)}
        >
          {showAdminPanel ? 'Hide Admin Panel' : 'Show Admin Panel'}
        </button>
      </div>
      {showAdminPanel && <AdminPanel />}
      {!showAdminPanel && !selectedProfile && (
        <>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ProfileList profiles={filteredProfiles} onSelectProfile={handleSelectProfile} />
        </>
      )}
      {selectedProfile && (
        <>
          <ProfileDetail profile={selectedProfile} onBack={handleBack} />
          <MapView profile={selectedProfile} />
        </>
      )}
    </div>
  );
}
export default App;