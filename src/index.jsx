import React from 'react';
import { render } from 'react-dom';
import Likes from './Likes';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img
              className="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
            />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <Likes type="up" />
          <Likes type="down" />
        </div>
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
