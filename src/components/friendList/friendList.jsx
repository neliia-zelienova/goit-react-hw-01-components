import React from 'react';
import FriendCard from './friendCard'
import PropTypes from 'prop-types';

function FriendList({ friends }) {
    return (
    <ul className="friend-list">
            {friends.map(friend => <FriendCard key={friend.id}  avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>)}
    </ul>
    );

}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
    })).isRequired
};


export default FriendList;