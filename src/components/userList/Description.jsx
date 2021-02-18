import React from 'react';

const Description = ({ avatar, name, tag, location }) => (
   <div className="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
    className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">{`@${tag}`}</p>
    <p className="location">{location}</p>
  </div>
);

export default Description;
