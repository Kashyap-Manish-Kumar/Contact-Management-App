import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import MainLayout from "../components/layout/MainLayout";
import { createContact } from "../services/contactService";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  status: string;
}

function AddContact() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    try {
      setLoading(true);

      await createContact(data);

      toast.success("Contact added successfully");

      navigate("/contacts");
    } catch (error: any) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Failed to create contact"
      );
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
              Add Contact
            </h2>

            <p className="text-muted mb-0">
              Create a new contact for your contact manager.
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

        {/* Form Card */}

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
                    placeholder="John"
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
                    placeholder="Doe"
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
                    placeholder="john@example.com"
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
                    placeholder="+91 9876543210"
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
                    placeholder="Google"
                    {...register("company")}
                  />

                </div>

                {/* Address */}

                {/* Address */}

<div className="col-md-6 mb-4">

  <label className="form-label fw-semibold">
    Address
  </label>

  <input
    type="text"
    className="form-control"
    placeholder="Enter address"
    {...register("address")}
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

              {/* Buttons */}

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
                  <i className="bi bi-check-circle me-2"></i>
                  {loading ? "Saving..." : "Save Contact"}
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default AddContact;