"use client";

import { useState } from "react";

export default function WorkoutInput() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !date) {
      alert("All fields are required");
      return;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/workouts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, date }),
      }
    );

    const textResponse = await response.text();
    console.log("Response Text:", textResponse);

    if (!response.ok) {
      alert("Error adding workout: " + textResponse);
      return;
    }

    try {
      const responseData = JSON.parse(textResponse);
      console.log("Parsed Response:", responseData);
    } catch (err) {
      console.error("Error parsing response:", err);
    }

    alert("Workout added successfully!");
    setTitle("");
    setDescription("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-bold mb-4">Add New Workout</h2>
      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-gray-700">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Workout
      </button>
    </form>
  );
}
