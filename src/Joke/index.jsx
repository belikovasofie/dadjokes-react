import React from 'react';
import Likes from '../Likes';
import './style.css';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <Likes type="up" initialCount={likes} />
        <Likes type="down" initialCount={dislikes} />
      </div>
    </div>
  );
};

export default Joke;
