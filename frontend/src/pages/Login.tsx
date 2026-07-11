import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { login } from "../services/authService";

interface LoginForm {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      setLoading(true);

      const response = await login(data.email, data.password);

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      toast.success(response.message);

      navigate("/dashboard", { replace: true });
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Login failed"
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
            Manage your contacts securely with a modern dashboard.
          </p>

        </div>

        {/* Right Side */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center">

          <div
            className="card shadow-lg border-0 bg-dark text-white"
            style={{ width: "430px" }}
          >
            <div className="card-body p-5">
            
                <h1 className="fw-bold text-center text-white mb-1">
  Maven
</h1>

              <h2 className="fw-bold text-center">
                Welcome Back
              </h2>

              <p className="text-center text-white mb-4">
                Login to your account
              </p>

              <form onSubmit={handleSubmit(onSubmit)}>

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
  {loading ? "Logging in..." : "Login"}
</button>

              </form>

              <p className="text-center mt-4">

                Don't have an account?

                <Link
                  to="/register"
                  className="ms-2 fw-semibold"
                >
                  Register
                </Link>

              </p>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;