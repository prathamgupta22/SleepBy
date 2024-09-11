import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/Navbar";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <Navbar />
      <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex-grow flex items-center justify-center">
        <div className="max-w-3xl bg-white shadow-lg rounded-lg p-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            About Wysa
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <span className="font-semibold text-purple-500">Wysa</span>, we
            believe mental health support should be available to everyone, no
            matter who you are or where you are. Our AI-driven platform offers
            personalized care that’s always available, helping individuals,
            organizations, healthcare providers, and young people thrive.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
