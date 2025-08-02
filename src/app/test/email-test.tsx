"use client";

import { useState } from "react";
import { addEmailToWaitlist } from "@/lib/actions";

export default function EmailTest() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTest = async () => {
    if (!email) {
      setResult("Please enter an email");
      return;
    }

    setIsLoading(true);
    setResult("Testing...");

    try {
      const response = await addEmailToWaitlist(email);
      setResult(JSON.stringify(response, null, 2));
    } catch (error) {
      setResult(`Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Email Capture Test</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Test Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="test@example.com"
            />
          </div>

          <button
            onClick={handleTest}
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Testing..." : "Test Email Capture"}
          </button>

          {result && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Result:
              </label>
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
                {result}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
