import React from 'react';
import FriendCard from './friendCard'

function FriendList({ friends }) {
    return (
    <ul className="friend-list">
            {friends.map(friend => <FriendCard key={friend.id}  avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>)}
    </ul>
    );

}
export default FriendList;