import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/4 bg-blue-900 p-4">
      <nav>
        <ul>
          <li>
            <Link href="/" className="text-white block py-2">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/workouts" className="text-white block py-2">
              Workouts
            </Link>
          </li>
          <li>
            <Link href="/settings" className="text-white block py-2">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
