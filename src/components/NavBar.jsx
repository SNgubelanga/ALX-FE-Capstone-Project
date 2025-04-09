import { FaSearch, FaBell, FaFacebookMessenger } from "react-icons/fa";

function NavBar() {
  return (
    <nav>
      <form method="post" className="search__bar">
        <FaSearch className="search__icon" />
        <input type="text" placeholder="Search everything.." />
      </form>

      <div className="right__links flex gap-4 items-center">
        <div className="notification">
          <FaFacebookMessenger className="text-white" />
        </div>
        <div className="notification">
          <FaBell className="text-white" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
