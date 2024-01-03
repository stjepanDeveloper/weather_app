import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      {/* We make the Layout.js to apply the bootstrap elements (header/footer) to all pages/children */}
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/snowflake.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
             Weather App
          </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
            </ul>
        </div>
      </nav>

      <main>{children}</main>

      {/* Footer here */}
      <footer className="footer">
        © {new Date().getFullYear()} Developed by stjepanDeveloper
      </footer>
    </div>
  );
};

export default Layout;