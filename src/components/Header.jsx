/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(true);

  const changeTheme = () => {
    setDarkTheme(!darkTheme);

    document.querySelector('body').classList.toggle('light-mode');
  };

  return (
    <header className="shadow-box">
      <h1>Where in the world?</h1>
      <div className="switcher-container">
        <i className={`${darkTheme ? 'far' : 'fas'} fa-sun`} />
        <div className="theme-switcher">
          <button className="switcher-button" type="button" onClick={changeTheme} />
        </div>
        <i className={`${darkTheme ? 'fas' : 'far'} fa-moon`} />
      </div>
    </header>
  );
}
