import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();
  const handleSelection = (duration) => {
    navigate("/page2", { state: { issue_duration: duration } });
  };

  return (
    <div className="flex flex-col bg-black max-w-md mx-auto h-96 rounded-lg border border-gray-600 shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
      <div className="text-center mt-3">
        <h1 className="text-2xl font-bold text-white mb-6">
          How long have you been struggling with your sleep?
        </h1>
      </div>
      <div className="w-full flex flex-col items-center justify-center space-y-6 pt-9">
        <Button
          className="bg-purple-600 hover:bg-purple-800 text-white w-[95%] py-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-5px]"
          onClick={() => handleSelection("Less than 2 weeks")}
        >
          Less than 2 weeks
        </Button>
        <Button
          className="bg-purple-600 hover:bg-purple-800 text-white w-[95%] py-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-5px]"
          onClick={() => handleSelection("2 to 8 weeks")}
        >
          2 to 8 weeks
        </Button>
        <Button
          className="bg-purple-600 hover:bg-purple-800 text-white w-[95%] py-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-5px]"
          onClick={() => handleSelection("More than 8 weeks")}
        >
          More than 8 weeks
        </Button>
      </div>
    </div>
  );
};

export default Page1;
