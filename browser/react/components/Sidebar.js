import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

    return (
      <nav className="navbar-header">
        <section>
          <h4 className="menu-item">
            <Link to="/">Example Frontend Filter: colors with a search bar</Link>
          </h4>
        </section>
        <section>
          <h4 className="menu-item">
            <Link to="/grey">Example Backend Filter: "greys only" API route</Link>
          </h4>
        </section>
       
      </nav>
    );
}

export default Sidebar;
