import { Link, NavLink, Outlet } from 'react-router';

export default function Root() {
  return (
    <main className="max-w-3xl flex flex-col items-start gap-4 p-16 mx-auto antialiased">
      <nav className="w-full flex items-center font-semibold">
        <Link to="/">Ausath Ikram</Link>
        <div className="grow text-right space-x-4">
          <NavLink
            className={({ isActive }) =>
              `underline underline-offset-2 decoration-zinc-400 hover:text-blue-500 ${
                isActive ? 'text-blue-500' : 'text-black'
              }`
            }
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `underline underline-offset-2 decoration-zinc-400 hover:text-blue-500 ${
                isActive ? 'text-blue-500' : 'text-black'
              }`
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </nav>
      <Outlet />
      <footer className="space-x-4">
        <a
          className="text-blue-500 hover:text-blue-600"
          href="https://github.com/ausathdzil"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="text-blue-500 hover:text-blue-600"
          href="https://linkedin/com/in/ausathdzil"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </footer>
    </main>
  );
}
