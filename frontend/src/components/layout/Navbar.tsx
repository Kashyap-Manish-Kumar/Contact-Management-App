import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearContacts } from "../../redux/slices/contactSlice";

function Navbar() {
  const navigate = useNavigate();
const dispatch = useDispatch();

 const handleLogout = () => {
  dispatch(clearContacts());

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/", { replace: true });
};

  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">

        <Link
          className="navbar-brand fw-bold fs-3"
          to="/dashboard"
        >
          ContactHub
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbar"
        >

          <ul className="navbar-nav ms-4">

            <li className="nav-item">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold" : ""}`
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold" : ""}`
                }
              >
                Contacts
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/charts"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold" : ""}`
                }
              >
                Charts
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/maps"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold" : ""}`
                }
              >
                Maps
              </NavLink>
            </li>

          </ul>

          <div className="ms-auto">

            <button
              onClick={handleLogout}
              className="btn btn-outline-light"
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;