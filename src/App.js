import './App.css';

import userData from './json/userData.json';

import Profile from './components/userList/Profile'
function App() {
  return (
    <>
      <Profile name={userData.name} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats}/>
    </>
  );
}

export default App;
