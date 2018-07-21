import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ nameUser, hourPost, avatar }) => (
  <div className="post-wrap">
    <img src={avatar} className="avatar" alt="" />
    <div className="info">
      <h2 className="username">{nameUser}</h2>
      <span className="time">há {hourPost} min</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  nameUser: PropTypes.string.isRequired,
  hourPost: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default PostHeader;
