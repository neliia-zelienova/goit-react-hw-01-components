import './App.css';

import userData from './json/user.json';
import statisticalData from './json/statistical-data.json';

import Profile from './components/userList/Profile'
import Statistics from './components/statistic/Statistics';

function App() {
  return (
    <>
      <Profile name={userData.name} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      <Statistics title="" stats={statisticalData}/>
    </>
  );
}

export default App;
