import React from "react";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
//step-1 start
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { useForm } from "react-hook-form";
import { async } from "@firebase/util";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  //step-1.5 start
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //step-1.5 end

  //step-5 start
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  //step-5 End
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user || gUser);

  const navigate = useNavigate(); //Navigation route setup

  if (loading || gLoading || updating) {
    console.log(user || gUser);
  }

  //step-8 start
  let signInError;

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-500">
        {error?.message || error?.gError || error?.updateError}
      </p>
    );
  }
  //step-8 End

  if (token) {
    navigate("/appoinment");
  }

  //step-2 start
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password); //step-7 only write this function
    await updateProfile({ displayName: data.name });
    console.log("Update done");
    navigate("/appointment"); //Navigation route setup
  };
  //step-2 End

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-2xl font-bold text-center">Sign Up</h2>

          {/* Step-3 */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name field start  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            {/* Name field start  */}

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
              value="Sign Up"
            />
            {/* Step-4 End */}
          </form>

          <p>
            <small>Already have an account ? </small>

            <Link className="text-secondary" to="/login">
              Login
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

export default SignUp;
