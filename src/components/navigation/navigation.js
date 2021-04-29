import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <header className="row">
      <nav className="navbar navbar-light bg-light">
        <form className="container-fluid justify-content-start">
          <NavLink to="/" className="nav-link" exact>
            home page
          </NavLink>
          <NavLink to="/todo" exact className="nav-link">
            todo home
          </NavLink>
          <NavLink to="/counter" exact className="nav-link">
            counter
          </NavLink>
          <NavLink to="/profile" exact className="nav-link">
            profile
          </NavLink>
          <NavLink to="/auth" exact className="nav-link">
            ავტორიზაცია
          </NavLink>
        </form>
      </nav>
    </header>
  );
}

export default Navigation;
