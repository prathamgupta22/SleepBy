import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import Navbar from "@/components/ui/shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/shared/Footer";

const SignUp = () => {
  const [input, setInput] = useState({
    nickname: "",
    password: "",
  });
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP}/user/signup`,
        input
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Navbar />
      <div className="flex flex-grow items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-extrabold text-center text-gray-900">
            SignUp
          </h1>
          <form onSubmit={submitHandler} className="space-y-6">
            <div className="my-2">
              <Label htmlFor="nickname">Nickname</Label>
              <Input
                id="nickname"
                type="text"
                value={input.nickname}
                name="nickname"
                onChange={changeEventHandler}
                placeholder="Your nickname"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "
              />
            </div>
            <div className="my-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="••••••••"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-900 transition duration-200"
            >
              Sign Up
            </Button>
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-purple-500"
              >
                LogIn
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
