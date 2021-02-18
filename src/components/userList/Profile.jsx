import React from 'react';
import Description from './Description';
import Stats from './Stats';

function Profile({ name, tag, location, avatar, stats }) {
  return (<div className="profile">
    <Description avatar={avatar} name={name} tag={tag} location={location} />
    <Stats stats={stats} />
  </div>)
};

export default Profile;


