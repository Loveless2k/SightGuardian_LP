"use client";

import { useState } from "react";
import { addEmailToWaitlist } from "@/lib/actions";

export default function EmailTest() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [testResults, setTestResults] = useState<string[]>([]);

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

  const runComprehensiveTests = async () => {
    setIsLoading(true);
    setTestResults([]);
    const results: string[] = [];

    const testCases = [
      // Valid emails
      { email: "test@example.com", description: "Valid email #1" },
      {
        email: "test@example.com",
        description: "Duplicate of valid email #1 (should fail)",
      },
      { email: "user@domain.org", description: "Valid email #2" },
      {
        email: "USER@DOMAIN.ORG",
        description: "Same email uppercase (should fail)",
      },

      // Invalid emails
      { email: "invalid-email", description: "Invalid: no @ symbol" },
      { email: "test@", description: "Invalid: no domain" },
      { email: "@domain.com", description: "Invalid: no username" },
      {
        email: "test..test@domain.com",
        description: "Invalid: consecutive dots",
      },
      { email: "test@domain", description: "Invalid: no TLD" },
      { email: "test@.com", description: "Invalid: domain starts with dot" },
      { email: "test@domain.", description: "Invalid: domain ends with dot" },
    ];

    for (const testCase of testCases) {
      try {
        const response = await addEmailToWaitlist(testCase.email);
        const result = `${testCase.description}: ${response.success ? "✅ SUCCESS" : "❌ FAILED"} - ${response.message}`;
        results.push(result);
        setTestResults([...results]);

        // Small delay between tests
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (error) {
        const result = `${testCase.description}: ❌ ERROR - ${error}`;
        results.push(result);
        setTestResults([...results]);
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Manual Test Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
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

            <div className="flex gap-4">
              <button
                onClick={handleTest}
                disabled={isLoading}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {isLoading ? "Testing..." : "Test Single Email"}
              </button>

              <button
                onClick={runComprehensiveTests}
                disabled={isLoading}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50"
              >
                {isLoading ? "Running Tests..." : "Run Comprehensive Tests"}
              </button>
            </div>

            {result && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Single Test Result:
                </label>
                <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
                  {result}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Comprehensive Test Results */}
        {testResults.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">
              Comprehensive Test Results
            </h2>
            <div className="space-y-2">
              {testResults.map((result, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-md text-sm ${
                    result.includes("✅")
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {result}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-3">
            Test Instructions
          </h2>
          <div className="text-blue-800 space-y-2">
            <p>
              <strong>Manual Testing:</strong> Enter an email and click
              &quot;Test Single Email&quot;
            </p>
            <p>
              <strong>Comprehensive Testing:</strong> Click &quot;Run
              Comprehensive Tests&quot; to test:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Valid email formats</li>
              <li>Duplicate email prevention</li>
              <li>Invalid email rejection</li>
              <li>Case sensitivity handling</li>
            </ul>
            <p className="mt-3">
              <strong>Expected Results:</strong>
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>✅ First valid email should succeed</li>
              <li>
                ❌ Duplicate emails should fail with &quot;already
                registered&quot; message
              </li>
              <li>❌ Invalid emails should fail with validation error</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
