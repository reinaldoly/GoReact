import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = ({
  data: {
    nameUser, hourPost, avatar, textPost,
  },
}) => (
  <Fragment>
    <div className="post">
      <PostHeader nameUser={nameUser} hourPost={hourPost} avatar={avatar} />
      <p className="text">{textPost}</p>
    </div>
  </Fragment>
);

Post.propTypes = {
  data: PropTypes.shape({
    textPost: PropTypes.string,
    nameUser: PropTypes.string,
    hourPost: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

export default Post;
