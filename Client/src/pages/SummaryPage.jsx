import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/Navbar";
import React from "react";

const SummaryPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">
            Sleep Tracking Summary
          </h1>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700">
              You seem to have a sleep efficiency of 100%! That's great. A
              higher sleep efficiency score means a more refreshing and
              energizing sleep, which can help you move into your day with a
              sense of lightness and ease.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SummaryPage;
