import Settings from "@/components/Settings";

export default function Workouts() {
  return (
    <div className="p-6 text-blue-500">
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="text-gray-600">Here you can toggle your settings.</p>
      <Settings />
    </div>
  );
}
