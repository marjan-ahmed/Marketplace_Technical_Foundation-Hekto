"use client";

import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { TrackingData } from "../../../type";

const TrackingPage = () => {
  const [labelId, setLabelId] = useState("");
  const [trackingInfo, setTrackingInfo] = useState<TrackingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const queryLabelId = searchParams?.get("labelId") || "";

  useEffect(() => {
    if (queryLabelId) {
      setLabelId(queryLabelId);
      fetchTrackingData(queryLabelId);
    }
  }, [queryLabelId]);

  const fetchTrackingData = async (id: string) => {
    if (!id) {
      setErrorMessage("Label ID is required.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      router.replace(`/tracking?labelId=${id}`);

      const { data } = await axios.get(`/api/shipengine/tracking/${id}`);
      setTrackingInfo(data);
    } catch (error) {
      console.error("Error fetching tracking data:", error);
      setErrorMessage("Unable to track shipment. Please verify the Label ID.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchTrackingData(labelId);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-6">
          Shipment Tracking
        </h1>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label htmlFor="labelId" className="block text-lg font-medium text-gray-300">
              Label ID / Tracking Number
            </label>
            <input
              type="text"
              id="labelId"
              value={labelId}
              onChange={(e) => setLabelId(e.target.value)}
              placeholder="Enter your Label ID"
              className="w-full mt-2 p-3 border border-gray-600 bg-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all ${
              isLoading ? "bg-blue-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Tracking..." : "Track Shipment"}
          </button>
        </form>

        {errorMessage && (
          <div className="mt-6 p-4 text-red-400 bg-red-900 border border-red-500 rounded-lg">
            {errorMessage}
          </div>
        )}

        {trackingInfo && (
          <div className="mt-8 p-6 bg-gray-700 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Tracking Information</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="text-lg">
                <strong>Tracking Number:</strong> {trackingInfo.trackingNumber}
              </li>
              <li className="text-lg">
                <strong>Status:</strong> {trackingInfo.statusDescription}
              </li>
              <li className="text-lg">
                <strong>Carrier Status:</strong> {trackingInfo.carrierStatusDescription || "N/A"}
              </li>
              <li className="text-lg">
                <strong>Estimated Delivery:</strong> {trackingInfo.estimatedDeliveryDate || "N/A"}
              </li>
              <li className="text-lg">
                <strong>Actual Delivery:</strong> {trackingInfo.actualDeliveryDate || "N/A"}
              </li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
};

const App = () => (
  <Suspense fallback={<div className="text-center py-10 text-gray-300">Loading...</div>}>
    <TrackingPage />
  </Suspense>
);

export default App;