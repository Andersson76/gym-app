import axios from "axios";
import { useEffect, useState } from "react";

interface Workout {
  id: number;
  title: string;
  description: string;
  date: string;
}

export default function Dashboard() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/workouts`
        );
        setWorkouts(response.data);
      } catch (err) {
        console.error("Error fetching workouts:", err);
        setError(`Failed to fetch workouts: ${error}`);
      }
    };

    fetchWorkouts();
  }, [error]);

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        {workouts.length === 0 ? (
          <p>No workouts available</p>
        ) : (
          <ul>
            {workouts.map((workout) => (
              <li
                key={workout.id}
                className="mb-4 p-4 bg-white rounded-md shadow"
              >
                <h3 className="text-xl font-semibold">{workout.title}</h3>
                <p>{workout.description}</p>
                <p className="text-sm text-gray-500">
                  {new Date(workout.date).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
