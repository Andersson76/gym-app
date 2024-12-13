"use client";

import Dashboard from "@/components/DashboardOutput";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen text-blue-500">
      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold">Welcome to Your Fitness App</h1>
        <p className="mt-2 text-gray-600">
          Track your workouts, create plans, and more!
        </p>
        <Dashboard />
      </main>
    </div>
  );
}
