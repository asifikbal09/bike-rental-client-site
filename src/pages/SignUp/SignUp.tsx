import React from "react";
import { Link } from "react-router-dom";
import BRInput from "../../components/form/BRInput";
import { FieldValues, useForm } from "react-hook-form";
import { useSignUpUserMutation } from "../../redux/authApi/authApi";

const SignUp = () => {
  const [signUpUser,{}] = useSignUpUserMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const res = await signUpUser({...data,role:"user"})
    console.log(res)
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/1mR16qt/login-sign-up-bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content bg-white sm:w-full  lg:w-1/2 rounded">
        <div className="w-full lg:p-5">
          <h3 className="mb-8 font-medium text-xl text-[#f4364f]">
            Login / Sign up
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-5">
              <BRInput
                label="Name"
                placeholder="Enter your name"
                register={register}
                name="name"
              />
              <BRInput
                label="Email"
                placeholder="Enter your email"
                register={register}
                name="email"
              />
              <BRInput
                label="Password"
                placeholder="Enter your password"
                register={register}
                name="password"
              />
              <BRInput
                label="Address"
                placeholder="Enter your address"
                register={register}
                name="address"
              />
              <BRInput
                label="Phone No"
                placeholder="Enter your phone No"
                register={register}
                name="phone"
              />
            </div>
            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="btn px-12 text-lg font-normal mt-10"
              >
                Login
              </button>
              <p>
                <Link className="underline text-sm font-medium" to="/login">
                  Already account? Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
