import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { register as registerUser } from "../services/authService";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit = async (data: RegisterForm) => {
    try {
      setLoading(true);

      const response = await registerUser(
        data.name,
        data.email,
        data.password
      );

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      toast.success(response.message);

      navigate("/dashboard", { replace: true });
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row min-vh-100">

        {/* Left Side */}
        <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center bg-dark text-white p-5">

          <h1 className="display-4 fw-bold">
            Contact Manager
          </h1>

          <p className="lead mt-3 text-center">
            Create an account to securely manage your contacts.
          </p>

        </div>

        {/* Right Side */}
        <div className="col-lg-6 d-flex align-items-center   justify-content-center">

          <div
            className="card shadow-lg border-0 overflow-hidden"
            style={{
    width: "430px",
    borderRadius: "24px",
  }}
          >
            <div className="card-body p-5 bg-dark text-white ">
            

              <h1 className="fw-bold text-center text-white mb-1">
  Maven
</h1>

<h2 className="fw-bold text-center text-white">
  Create Account
</h2>
              <p className="text-center text-white mb-4">
                Register to get started
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                  <label className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    {...register("name", {
                      required: "Full name is required",
                    })}
                  />

                  {errors.name && (
                    <small className="text-danger">
                      {errors.name.message}
                    </small>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
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

                <div className="mb-4">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message:
                          "Password must be at least 6 characters",
                      },
                    })}
                  />

                  {errors.password && (
                    <small className="text-danger">
                      {errors.password.message}
                    </small>
                  )}
                </div>

               <button
  className="btn btn-light text-dark fw-semibold w-100"
  disabled={loading}
>
  {loading ? "Creating Account..." : "Register"}
</button>

              </form>

              <p className="text-center mt-4">

                Already have an account?

                <Link
                  to="/"
                  className="ms-2 fw-semibold"
                >
                  Login
                </Link>

              </p>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;