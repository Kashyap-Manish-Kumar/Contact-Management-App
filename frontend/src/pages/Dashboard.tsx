import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import type { RootState } from "../redux/store";

import MainLayout from "../components/layout/MainLayout";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getContacts } from "../services/contactService";
import {
  setContacts,
  setLoading,
} from "../redux/slices/contactSlice";


function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { contacts } = useSelector(
    (state: RootState) => state.contacts
  );

  useEffect(() => {
  if (contacts.length === 0) {
    const fetchContacts = async () => {
      try {
        dispatch(setLoading(true));

        const data = await getContacts();

        dispatch(setContacts(data));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchContacts();
  }
}, [dispatch, contacts.length]);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <MainLayout>
      <div className="container py-4">

        {/* Welcome Section */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <h2 className="fw-bold mb-2">
              Welcome Back, {user.name} 👋
            </h2>

            <p className="text-muted mb-0">
              Manage your contacts and explore worldwide COVID-19 statistics
              from one centralized dashboard.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="row g-4 mb-4">

          {/* Contacts */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100 dashboard-card">
              <div className="card-body d-flex align-items-center p-4">

                <div className="dashboard-icon bg-dark text-white">
                  <i className="bi bi-people-fill fs-3"></i>
                </div>

                <div className="ms-4">
                  <h2 className="display-5 fw-bold text-primary mb-1">
                    {contacts.length}
                  </h2>

                  <p className="text-uppercase text-muted small mb-0">
                    Total Contacts
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100 dashboard-card">
              <div className="card-body d-flex align-items-center p-4">

                <div className="dashboard-icon bg-dark text-white">
                  <i className="bi bi-bar-chart-fill fs-3"></i>
                </div>

                <div className="ms-4">
                  <h2 className="fw-bold mb-1">Charts</h2>
                  <p className="text-muted mb-0">
                    COVID Analytics
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Maps */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm h-100 dashboard-card">
              <div className="card-body d-flex align-items-center p-4">

                <div className="dashboard-icon bg-dark text-white">
                  <i className="bi bi-globe-americas fs-3"></i>
                </div>

                <div className="ms-4">
                  <h2 className="fw-bold mb-1">Maps</h2>
                  <p className="text-muted mb-0">
                    Interactive World Map
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">

            <h3 className="fw-bold mb-4">
              Quick Actions
            </h3>

            <div className="row g-3">

              <div className="col-lg-3 col-md-6">
                <button
                  className="btn btn-dark w-100 py-3 fw-semibold dashboard-action-btn"
                  onClick={() => navigate("/contacts")}
                >
                  <i className="bi bi-person-lines-fill me-2"></i>
                  View Contacts
                </button>
              </div>

              <div className="col-lg-3 col-md-6">
                <button
                  className="btn btn-dark w-100 py-3 fw-semibold dashboard-action-btn"
                  onClick={() => navigate("/contacts/add")}
                >
                  <i className="bi bi-person-plus-fill me-2"></i>
                  Add Contact
                </button>
              </div>

              <div className="col-lg-3 col-md-6">
                <button
                  className="btn btn-dark w-100 py-3 fw-semibold dashboard-action-btn"
                  onClick={() => navigate("/contacts")}
                >
                  <i className="bi bi-pencil-square me-2"></i>
                  Edit Contact
                </button>
              </div>

              <div className="col-lg-3 col-md-6">
                <button
                  className="btn btn-dark w-100 py-3 fw-semibold dashboard-action-btn"
                  onClick={() => navigate("/contacts")}
                >
                  <i className="bi bi-trash-fill me-2"></i>
                  Delete Contact
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </MainLayout>
  );
}

export default Dashboard;