import './App.css';

import userData from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friendsData from './json/friends.json';
import transactions from './json/transactions.json'

import Container from './components/Container/Container'
import Profile from './components/Profile/Profile'
import Statistics from './components/Statistic/Statistics';
import FriendsList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <Container>
      <Profile name={userData.name} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      <Statistics title="" stats={statisticalData} />
      <FriendsList friends={friendsData} />
      <TransactionHistory transactions={transactions}/>
    </Container>
  );
}

export default App;
