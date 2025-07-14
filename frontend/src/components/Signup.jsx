import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      console.log(res.data);
      toast.success("signup Successfully");
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    } catch (err) {
      if(err.response){
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className="relative border-[2px] shadow-md p-5 rounded-md bg-white text-black dark:bg-slate-800 dark:text-white">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg mb-4">Signup</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mt-4'>
              <span>Name</span>
              <br /><br />
              <input
                type="text"
                placeholder="username"
                className='w-80 px-3 py-1 border rounded-md bg-white dark:bg-slate-700 dark:text-white'
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            <div className='mt-4'>
              <span>Email</span>
              <br /><br />
              <input
                type="email"
                placeholder="enter your email"
                className='w-80 px-3 py-1 border rounded-md bg-white dark:bg-slate-700 dark:text-white'
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            <div className='mt-4'>
              <span>Password</span>
              <br /><br />
              <input
                type="password"
                placeholder="enter your password"
                className='w-80 px-3 py-1 border rounded-md bg-white dark:bg-slate-700 dark:text-white'
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

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
