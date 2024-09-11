import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "@/components/ui/shared/Navbar";
import Footer from "@/components/ui/shared/Footer";

const Page4 = () => {
  const [hoursOfSleep, setHoursOfSleep] = useState(6);
  const navigate = useNavigate();
  const location = useLocation();
  const { issue_duration, bedtime, waketime } = location.state;

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP}/sleep/start`,
        {
          issue_duration,
          bedtime,
          waketime,
          sleep_hours: hoursOfSleep,
        }
      );
      console.log(response.data);
      navigate("/summary");
    } catch (error) {
      console.error("Error submitting sleep data:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-black rounded-lg shadow-lg text-white transform transition-all duration-300 hover:scale-105">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Ok. How many hours of sleep do you get in a typical night?
          </h1>
          <div className="my-4">
            <input
              type="range"
              min="1"
              max="10"
              value={hoursOfSleep}
              onChange={(e) => setHoursOfSleep(Number(e.target.value))}
              className="w-full"
              step="1"
            />
            <div className="flex justify-between mt-2">
              <span>1 hr</span>
              <span>10 hrs</span>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:bg-purple-700 hover:translate-y-[-5px]"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page4;
