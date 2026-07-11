import { useState } from "react";

interface DeleteContactModalProps {
  contactName: string;
  onDelete: () => Promise<void>;
}

function DeleteContactModal({
  contactName,
  onDelete,
}: DeleteContactModalProps) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await onDelete();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="deleteContactModal"
      tabIndex={-1}
      aria-labelledby="deleteContactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">

        <div className="modal-content border-0 shadow">

          <div className="modal-header">

            <h5
              className="modal-title fw-bold"
              id="deleteContactModalLabel"
            >
              Delete Contact
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              disabled={loading}
            ></button>

          </div>

          <div className="modal-body text-center py-4">

            <i className="bi bi-exclamation-triangle-fill text-danger display-4"></i>

            <h5 className="mt-3">
              Are you sure?
            </h5>

            <p className="text-muted mb-0">
              You are about to delete
            </p>

            <p className="fw-bold fs-5">
              {contactName}
            </p>

            <small className="text-danger">
              This action cannot be undone.
            </small>

          </div>

          <div className="modal-footer">

            <button
              type="button"
              className="btn btn-outline-dark"
              data-bs-dismiss="modal"
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
              data-bs-dismiss="modal"
              disabled={loading}
            >
              <i className="bi bi-trash-fill me-2"></i>

              {loading ? "Deleting..." : "Delete"}
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default DeleteContactModal;