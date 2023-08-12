import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header>
        <Link to="/">
          <div>Integer20</div>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </header>
      <Outlet />
      <footer>&copy; 2023 Integer</footer>
    </>
  );
}
