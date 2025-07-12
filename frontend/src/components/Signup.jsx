import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    console.log(userInfo);
    // simulate form submission
    navigate("/"); // redirect to login page
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="relative border-[2px] shadow-md p-5 rounded-md bg-white text-black dark:bg-slate-800 dark:text-white">
          {/* Close Button */}
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg mb-4">Signup</h3>

          {/* Signup Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className='mt-4 space-y'>
              <span>Name</span>
              <br />
              <br />
              <input
                type="text"
                placeholder="username"
                className='w-80 px-3 py-1 border rounded-md bg-white dark:bg-slate-700 dark:text-white'
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Email */}
            <div className='mt-4 space-y'>
              <span>Email</span>
              <br />
              <br />
              <input
                type="email"
                placeholder="enter your email"
                className='w-80 px-3 py-1 border rounded-md bg-white dark:bg-slate-700 dark:text-white'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Password */}
            <div className='mt-4 space-y'>
              <span>Password</span>
              <br />
              <br />
              <input
                type="password"
                placeholder="enter your password"
                className='w-80 px-3 py-1 border rounded-md bg-white dark:bg-slate-700 dark:text-white'
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Submit + Login Link */}
            <div className='flex justify-around mt-6'>
              <button
                type="submit"
                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
              >
                Signup
              </button>
              <p>
                Have Account?{' '}
                <Link to="/" className='underline text-blue-500 cursor-pointer'>Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
