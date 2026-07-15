import "../styles/Header.css";
import { FaBell, FaMoon } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <div className="header">

      <div className="header-left">
        <FiMenu className="menu-icon" />
        <div>
          <h2>Good Afternoon</h2>
          <p>Faculty Attendance Portal</p>
        </div>
      </div>

      <div className="header-right">

        <button className="icon-btn">
          <FaMoon />
        </button>

        <button className="icon-btn">
          <FaBell />
        </button>

        <div className="profile">

          <img
            src="https://i.pravatar.cc/100?img=5"
            alt="Faculty"
          />

          <div>
            <h4>Dr. Priya Sharma</h4>
            <span>Faculty</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Header;