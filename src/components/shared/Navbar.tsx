import { Link, NavLink } from "react-router-dom";
import navbarLogo from "../../assets/navbarLogo.png";

const Navbar = () => {
  const activeLinkStyle = ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }) => (isPending ? "pending" : isActive ? "text-[#de2b43]" : "");

  const navLink = (
    <>
      <li>
        <NavLink to={"/"} className={activeLinkStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={activeLinkStyle} to={"rental"}>
          Rental
        </NavLink>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <a>Features</a>
      </li>
      <li>
        <a>About us</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 font-rajdhani">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <a>
          <img className="w-[10em]" src={navbarLogo} alt="Rideox" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" text-xl menu menu-horizontal px-1 font-medium">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"login"} className="btn text-lg">
          Login
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
