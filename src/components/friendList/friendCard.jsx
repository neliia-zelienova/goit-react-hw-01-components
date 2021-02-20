import React from 'react';


function FriendCard({ avatar, name, isOnline }) {
    return (
    <li className="item">
        <span className="status"></span>
        <img className="avatar" src={avatar} alt="" width="48" />
            <p className="name">{name}</p>
    </li>
    );

}
export default FriendCard;