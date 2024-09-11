import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/Navbar";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Page2 = () => {
  const [bedtime, setBedtime] = useState("01:50 AM");
  const navigate = useNavigate();
  const location = useLocation();
  const { issue_duration } = location.state;

  const handleNext = () => {
    navigate("/page3", { state: { issue_duration, bedtime } });
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-black rounded-lg shadow-lg text-white transform transition-all duration-300 hover:scale-105">
          <h1 className="text-2xl font-bold mb-6 text-center">
            What time do you go to bed for sleep?
          </h1>
          <input
            type="time"
            className="w-full px-4 py-2 mb-4 text-gray-800 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            value={bedtime}
            onChange={(e) => setBedtime(e.target.value)}
          />
          <button
            onClick={handleNext}
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:bg-purple-700 hover:translate-y-[-5px]"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page2;
