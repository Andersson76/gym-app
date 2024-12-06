import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/4 bg-blue-900 p-4 rounded-3xl my-3 mx-3">
      <nav>
        <ul>
          <li>
            <Link href="/" className="text-white text-2xl block py-2">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/workouts" className="text-white text-2xl block py-2">
              Workouts
            </Link>
          </li>
          <li>
            <Link href="/settings" className="text-white text-2xl block py-2">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
