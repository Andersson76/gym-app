"use client";
import { useState } from "react";

export default function Settings() {
  const [enabled, setEnabled] = useState(false);

  const toggleSetting = () => {
    setEnabled(!enabled);
  };

  return (
    <div className="p-6 bg-blue-600 rounded-lg shadow-md max-w-sm">
      <h2 className="text-xl font-semibold text-white mb-4">Settings</h2>
      <button
        data-testid="toggle-setting"
        onClick={toggleSetting}
        className={`px-4 py-2 rounded-lg text-white font-medium transition ${
          enabled
            ? "bg-green-500 hover:bg-green-600"
            : "bg-red-500 hover:bg-red-600"
        }`}
      >
        {enabled ? "Disable setting" : "Enable setting"}
      </button>
      <p
        data-testid="setting-status"
        className={`mt-4 text-lg font-semibold ${
          enabled ? "text-green-400" : "text-red-400"
        }`}
      >
        {enabled ? "Enabled" : "Disabled"}
      </p>
    </div>
  );
}
