import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/Navbar";
import React from "react";
import Page1 from "./Page1";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 border-b-2 shadow-md">
      <Navbar />
      <Page1 />
      <Footer />
    </div>
  );
};

export default HomePage;
