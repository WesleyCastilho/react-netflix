import React from 'react'
import './Header.css'

export default () => {
    return (
      <header>
        <div className="header--logo">
          <a href="/">
            <img
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt="Netflix"
            />
          </a>
        </div>
        <div className="header--user">
          <a href="/">
            <img
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt="Usuário"
            />
          </a>
        </div>
      </header>
    );
}

