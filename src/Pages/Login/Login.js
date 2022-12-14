import React, { useEffect } from "react";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
//step-1 start
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { useForm } from "react-hook-form";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  //step-1.5 start
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //step-1.5 end

  //step-5 start
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user || gUser);
  //step-5 End

  //step-8 start
  let signInError;

  const navigate = useNavigate(); //redirect location after login
  const location = useLocation(); //redirect location after login
  let from = location.state?.from?.pathname || "/"; //redirect location after login

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  // if (user || gUser) {
  //   navigate(from, { replace: true });
  //   //redirect location after login
  // }

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">{error?.message || error?.gError}</p>
    );
  }
  //step-8 End

  //step-2 start
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password); //step-7 only write this function
  };
  //step-2 End

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl font-bold text-center">Login</h2>
          {/* Step-3 */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*Email form Start*/}
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* Email field End Here */}

            {/* Password field Start Here */}

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/* Password field End */}

            {/* //step-9 */}
            {signInError}
            {/* //step-9 */}

            {/* Step-4 Style Submit button Start */}
            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Login"
            />
            {/* Step-4 End */}
          </form>

          <p>
            <small>New to Public Health Service?</small>
            <Link className="text-secondary" to="/signup">
              Create New Account
            </Link>
          </p>

          <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn btn-outline">
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
