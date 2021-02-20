import React from 'react';
import Description from './Description';
import Stats from './Stats';
import PropTypes from 'prop-types';
import noAvatar from './no-avatar.png';

function Profile({ name, tag, location, avatar, stats }) {
  return (<div className="profile">
    <Description avatar={avatar} name={name} tag={tag} location={location} />
    <Stats stats={stats} />
  </div>)
};

Profile.defaultProps = {
  avatar: noAvatar,
  location: "Planet Earth"
}


Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,                                       
    views: PropTypes.number,
    likes: PropTypes.number
  })
  
}


export default Profile;


