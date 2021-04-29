import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <header className="row">
      <nav className="navbar navbar-light bg-light">
        <form className="container-fluid justify-content-start">
          <NavLink to="/" className="nav-link" exact>
            home page
          </NavLink>
          <NavLink to="/pagination" exact className="nav-link">
            პაგინაცია
          </NavLink>
          <NavLink to="/add-company" exact className="nav-link">
            კომპანიის დამატება
          </NavLink>
          <NavLink to="/companies" exact className="nav-link">
            კომპანიები
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
