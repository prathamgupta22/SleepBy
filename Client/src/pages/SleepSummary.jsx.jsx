import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "./Chart";

const SleepSummary = () => {
  const [sleepData, setSleepData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSleepData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP}/sleep/summary`
        );

        const data = response.data;
        console.log("Fetched data: ", data);

        if (data.success) {
          setSleepData(data.sleepTracking);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSleepData();
  }, []);

  useEffect(() => {
    console.log("Sleep data state updated: ", sleepData);
  }, [sleepData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <Navbar />
      <main className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 mb-12">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Sleep Summary
        </h1>
        {error && <p className="text-red-600 text-lg">{error}</p>}
        {sleepData.length === 0 ? (
          <p className="text-gray-600 text-lg">No sleep tracking data found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wide">
                    Bedtime
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wide">
                    Wake Time
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wide">
                    Sleep Hours
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wide">
                    Issue Duration
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sleepData.map((record) => (
                  <tr key={record._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {new Date(record.bedtime).toLocaleTimeString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {new Date(record.waketime).toLocaleTimeString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {record.sleep_hours}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {record.issue_duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <div className="mb-10">
        <Chart sleepData={sleepData} />
      </div>
      <Footer />
    </div>
  );
};

export default SleepSummary;
