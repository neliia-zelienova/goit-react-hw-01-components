import './App.css';

import userData from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friendsData from './json/friends.json';
import transactions from './json/transactions.json'

import Profile from './components/userList/Profile'
import Statistics from './components/statistic/Statistics';
import FriendsList from './components/friendList/friendList';
import TransactionHistory from './components/transactionHistory/transactionHistory';

function App() {
  return (
    <>
      <Profile name={userData.name} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      <Statistics title="" stats={statisticalData} />
      <FriendsList friends={friendsData} />
      <TransactionHistory transactions={transactions}/>
    </>
  );
}

export default App;
