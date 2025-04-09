import { Link } from "react-router-dom";
import {BiCompass, BiHeart, BiCalendar, BiHome} from "react-icons/bi";

function SideBar() {
  return (
    <div className="sidebar">
        {/* Logo */}
      <div className="sidebar__logo">
        <Link to={"/auth/sign-up"} className="logo__link">
          Film<span>Hub</span>
        </Link>
      </div>
      {/* Sidebar Links */}
      <div className="sidebar__links">
        <div className="links__title">New Jam.</div>
        <div className="links">
        <Link className="link__wrapper" to={"/"}>
                <div className="link__icon">
                    <BiHome/>
                </div>
                <span>Home</span>
            </Link>
            <Link className="link__wrapper" to={"/movies"}>
                <div className="link__icon">
                    <BiCompass/>
                </div>
                <span>Browse</span>
            </Link>
            <Link className="link__wrapper" to={""}>
                <div className="link__icon">
                    <BiHeart/>
                </div>
                <span>Watch List</span>
            </Link>
            <Link className="link__wrapper" to={""}>
                <div className="link__icon">
                    <BiCalendar/>
                </div>
                <span>New Films</span>
            </Link>
        </div>

        {/* Category */}
        <div className="links__title mt-10">More Links.</div>
        <div className="links">
            <Link className="link__wrapper" to={""}>
                <div className="link__icon">
                    <BiCompass/>
                </div>
                <span>Browse</span>
            </Link>
            <Link className="link__wrapper" to={""}>
                <div className="link__icon">
                    <BiHeart/>
                </div>
                <span>Watch List</span>
            </Link>
            <Link className="link__wrapper" to={""}>
                <div className="link__icon">
                    <BiCalendar/>
                </div>
                <span>New Films</span>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
