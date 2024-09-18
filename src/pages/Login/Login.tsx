import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/authApi/authApi";

const Login = () => {
  const [login, {}] = useLoginUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const res = await login(data);
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
      <div className="hero-content bg-white  lg:w-1/2 rounded">
        <div className="w-full lg:p-12">
          <h3 className="mb-8 font-medium text-xl text-[#f4364f]">
            Login / Sign up
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 mb-5">
              <label className="font-medium">Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
                className="input border-0 border-dotted border-b-4 border-[#f4364f] focus:border-[#f4364f] max-w-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-medium">Password</label>
              <input
                type="text"
                placeholder="Enter Your password"
                {...register("password", { required: true })}
                className="input border-0 border-dotted  border-b-4 border-[#f4364f] focus:border-[#f4364f] max-w-lg"
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
                <Link className="underline text-sm font-medium" to="/sign-up">
                  New to Rideox? SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
