import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "@/components/ui/shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/shared/Footer";
import { useAuth } from "@/context/auth";
import { toast } from "sonner";

const Login = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve nickname from sessionStorage
    const storedNickname = sessionStorage.getItem("nickname");
    if (storedNickname) {
      setNickname(storedNickname);
      sessionStorage.removeItem("nickname"); // Clear the stored value
    }
  }, []);

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    if (name === "nickname") {
      setNickname(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_APP}/user/login`, {
        nickname,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (auth.user) {
      navigate("/");
    }
  }, [auth.user, navigate]);

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen flex flex-col justify-between bg-gray-50">
      <Navbar />
      <div className="flex flex-grow items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-extrabold text-center text-gray-900">
            LogIn
          </h1>
          <form onSubmit={submitHandler} className="space-y-6">
            <div className="my-2">
              <Label htmlFor="nickname">Nickname</Label>
              <Input
                id="nickname"
                type="text"
                value={nickname}
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
                value={password}
                name="password"
                onChange={changeEventHandler}
                placeholder="••••••••"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-purple-700 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-900 transition duration-200"
            >
              Login
            </Button>
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-purple-500"
              >
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
