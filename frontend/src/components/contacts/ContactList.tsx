import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../../redux/store";
import {
  setContacts,
  setLoading,
  setSelectedContact,
  setSearch,
  type Contact,
} from "../../redux/slices/contactSlice";

import { getContacts } from "../../services/contactService";

function ContactList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    contacts,
    loading,
    search,
  } = useSelector(
    (state: RootState) => state.contacts
  );

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      dispatch(setLoading(true));

      const data = await getContacts();

      dispatch(setContacts(data));
    } catch (error) {
      console.error("Failed to fetch contacts", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    contact.email
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    contact.phone.includes(search)
  );

  return (
    <div className="card border-0 shadow-sm h-100">

      {/* Header */}
      <div className="card-header bg-white border-bottom py-3">

        <h4 className="fw-bold mb-3">
          Contact List
        </h4>

        {/* Search */}
        <div className="input-group mb-3">
          <span className="input-group-text bg-white">
            <i className="bi bi-search"></i>
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="Search contacts..."
            value={search}
            onChange={(e) =>
              dispatch(setSearch(e.target.value))
            }
          />
        </div>

        {/* Add Contact */}
        <button
          className="btn btn-dark w-100 dashboard-action-btn"
          onClick={() => navigate("/contacts/add")}
        >
          <i className="bi bi-person-plus-fill me-2"></i>
          Add Contact
        </button>

      </div>

      {/* Contact List */}
      <div
        className="list-group list-group-flush"
        style={{
          maxHeight: "550px",
          overflowY: "auto",
        }}
      >
        {loading ? (
          <div className="text-center p-4">
            Loading...
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="text-center p-4 text-muted">
            No contacts found
          </div>
        ) : (
          filteredContacts.map((contact: Contact) => (
            <button
              key={contact._id}
              className="list-group-item list-group-item-action"
              onClick={() => dispatch(setSelectedContact(contact))}
            >
              <div className="fw-semibold">
                {contact.firstName} {contact.lastName}
              </div>

              <small className="text-muted">
                {contact.email}
              </small>
            </button>
          ))
        )}
      </div>

    </div>
  );
}

export default ContactList;