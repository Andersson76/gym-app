import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/4 bg-blue-600 p-4 rounded-3xl my-3 mx-3 flex flex-col items-center">
      <nav>
        <ul>
          <li>
            <Link
              href="/"
              className="text-white text-2xl block py-5 px-10 mt-8"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/workouts"
              className="text-white text-2xl block py-5 px-10"
            >
              Workouts
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="text-white text-2xl block py-5 px-10"
              data-testid="settings-link"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
