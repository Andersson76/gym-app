export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-100 p-4">
        <nav>
          <ul>
            <li>
              <a href="#" className="block py-2">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block py-2">
                Workouts
              </a>
            </li>
            <li>
              <a href="#" className="block py-2">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 bg-white p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold">Welcome to Your Fitness App</h1>
        <p className="mt-2 text-gray-600">
          Track your workouts, create plans, and more!
        </p>
      </main>
    </div>
  );
}
