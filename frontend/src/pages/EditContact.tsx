import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import MainLayout from "../components/layout/MainLayout";

import {
  getContact,
  updateContact as updateContactAPI,
} from "../services/contactService";

import { updateContact } from "../redux/slices/contactSlice";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  status: string;
}

function EditContact() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      const contact = await getContact(id!);

      reset(contact);
    } catch {
      toast.error("Failed to load contact");
    }
  };

  const onSubmit = async (data: ContactForm) => {
    try {
      setLoading(true);

      const updated = await updateContactAPI(id!, data);

      dispatch(updateContact(updated));

      toast.success("Contact updated");

      navigate("/contacts");
    } catch {
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="container">

        {/* Page Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <h2 className="fw-bold mb-1">
              Edit Contact
            </h2>

            <p className="text-muted mb-0">
              Update the selected contact information.
            </p>
          </div>

          <Link
            to="/contacts"
            className="btn btn-outline-dark"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back
          </Link>

        </div>

        {/* Form */}
        <div className="card border-0 shadow-sm">

          <div className="card-body p-4">

            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="row">

                {/* First Name */}
                <div className="col-md-6 mb-4">
                  <label className="form-label fw-semibold">
                    First Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />

                  {errors.firstName && (
                    <small className="text-danger">
                      {errors.firstName.message}
                    </small>
                  )}
                </div>

                {/* Last Name */}
                <div className="col-md-6 mb-4">
                  <label className="form-label fw-semibold">
                    Last Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    {...register("lastName")}
                  />
                </div>

                {/* Email */}
                <div className="col-md-6 mb-4">
                  <label className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />

                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                {/* Phone */}
                <div className="col-md-6 mb-4">
                  <label className="form-label fw-semibold">
                    Phone
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                  />

                  {errors.phone && (
                    <small className="text-danger">
                      {errors.phone.message}
                    </small>
                  )}
                </div>

                {/* Company */}
                <div className="col-md-6 mb-4">
                  <label className="form-label fw-semibold">
                    Company
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    {...register("company")}
                  />
                </div>

                {/* Status */}
                <div className="col-md-6 mb-4">
                  <label className="form-label fw-semibold">
                    Status
                  </label>

                  <select
                    className="form-select"
                    {...register("status")}
                  >
                    <option value="active">
                      Active
                    </option>

                    <option value="inactive">
                      Inactive
                    </option>
                  </select>
                </div>

              </div>

              <hr />

              {/* Action Buttons */}
              <div className="d-flex justify-content-end gap-3">

                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => navigate("/contacts")}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn btn-dark"
                  disabled={loading}
                >
                  <i className="bi bi-pencil-square me-2"></i>
                  {loading ? "Updating..." : "Update Contact"}
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default EditContact;