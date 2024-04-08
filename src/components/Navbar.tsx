import { Book, Home } from "lucide-react";
import { Link } from "react-router-dom";
import UserDropdown from "./UserDropdown";

export default function Navbar() {
  function isActive(string: string) {
    return window.location.pathname === string ? "text-primary" : "";
  }

  return (
    <div className="navbar border-b bg-white">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="flex-1">
          <Link to={"/"} className="flex gap-2 text-xl">
            <span className="font-bold">Matigsalug Archive</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"} className={`btn btn-ghost ${isActive("/")}`}>
                <Home height={30} width={30} />
              </Link>
            </li>
            <li>
              <Link
                to={"/dictionary"}
                className={`btn btn-ghost ${isActive("/dictionary")}`}
              >
                <Book height={30} width={30} />
              </Link>
            </li>
            <li>
              <UserDropdown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}