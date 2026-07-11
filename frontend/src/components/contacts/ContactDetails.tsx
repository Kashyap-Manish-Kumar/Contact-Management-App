import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

import type { RootState } from "../../redux/store";

import { deleteContact as deleteContactAPI } from "../../services/contactService";

import {
  deleteContact,
  setSelectedContact,
} from "../../redux/slices/contactSlice";

import DeleteContactModal from "./DeleteContactModal";

function ContactDetails() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { selectedContact } = useSelector(
    (state: RootState) => state.contacts
  );

  if (!selectedContact) {
    return (
      <div className="card border-0 shadow-sm h-100">
        <div className="card-body d-flex justify-content-center align-items-center">
          <div className="text-center">
            <i className="bi bi-person-circle display-3 text-secondary"></i>

            <h5 className="mt-3">
              Select a Contact
            </h5>

            <p className="text-muted">
              Choose a contact from the left panel.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleDelete = async () => {
    try {
      await deleteContactAPI(selectedContact._id);

      dispatch(deleteContact(selectedContact._id));

      dispatch(setSelectedContact(null));

      toast.success("Contact deleted successfully");
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete contact");
    }
  };

  return (
    <div className="card border-0 shadow-sm h-100">

      {/* Header */}
      <div className="card-header bg-white py-2">
        <h5 className="fw-bold mb-0">
          Contact Details
        </h5>
      </div>

      <div className="card-body p-4">

        {/* Avatar */}
        <div className="text-center mb-3">

          <div
            className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center shadow-sm"
            style={{
              width: "75px",
              height: "75px",
              fontSize: "26px",
              fontWeight: "bold",
            }}
          >
            {selectedContact.firstName.charAt(0)}
            {selectedContact.lastName.charAt(0)}
          </div>

          <h4 className="fw-bold mt-2 mb-0">
            {selectedContact.firstName} {selectedContact.lastName}
          </h4>

          <small className="text-muted">
            {selectedContact.status}
          </small>

        </div>

        {/* Contact Information */}

        <div className="row g-3 mb-4">

          {/* Email */}
          <div className="col-md-6">
            <div className="border rounded p-3 h-100">
              <div className="d-flex align-items-center">
                <i className="bi bi-envelope-fill fs-4 me-3 text-dark"></i>

                <div>
                  <small className="text-muted d-block">
                    Email
                  </small>

                  <span className="fw-semibold">
                    {selectedContact.email}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <div className="border rounded p-3 h-100">
              <div className="d-flex align-items-center">
                <i className="bi bi-telephone-fill fs-4 me-3 text-dark"></i>

                <div>
                  <small className="text-muted d-block">
                    Phone
                  </small>

                  <span className="fw-semibold">
                    {selectedContact.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="col-md-6">
            <div className="border rounded p-3 h-100">
              <div className="d-flex align-items-center">
                <i className="bi bi-building fs-4 me-3 text-dark"></i>

                <div>
                  <small className="text-muted d-block">
                    Company
                  </small>

                  <span className="fw-semibold">
                    {selectedContact.company || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="col-md-6">
            <div className="border rounded p-3 h-100">
              <div className="d-flex align-items-center">
                <i className="bi bi-geo-alt-fill fs-4 me-3 text-dark"></i>

                <div>
                  <small className="text-muted d-block">
                    Address
                  </small>

                  <span className="fw-semibold">
                    {selectedContact.address || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons */}

        <div className="row g-2">

          <div className="col-6">
            <button
              className="btn btn-dark w-100 py-2 dashboard-action-btn"
              onClick={() =>
                navigate(`/contacts/edit/${selectedContact._id}`)
              }
            >
              <i className="bi bi-pencil-square me-2"></i>
              Edit
            </button>
          </div>

          <div className="col-6">
            <button
              className="btn btn-outline-dark w-100 py-2 dashboard-action-btn"
              data-bs-toggle="modal"
              data-bs-target="#deleteContactModal"
            >
              <i className="bi bi-trash-fill me-2"></i>
              Delete
            </button>
          </div>

        </div>

      </div>

      <DeleteContactModal
        contactName={`${selectedContact.firstName} ${selectedContact.lastName}`}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default ContactDetails;