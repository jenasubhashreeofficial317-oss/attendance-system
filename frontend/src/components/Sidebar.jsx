import {
  FaHome,
  FaClipboardCheck,
  FaChalkboardTeacher,
  FaChartBar,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "../styles/Sidebar.css";
import logo from "../assets/niis.logo.png";

function Sidebar() {
  return (
    <div className="sidebar">

      <div>

        <div className="logo-section">

          <img src={logo} alt="NIIS Logo" className="logo" />

          <div>
            <h2>NIIS</h2>
            <p>Faculty Portal</p>
          </div>

        </div>

        <div className="menu">

          <div className="menu-item">
            <FaHome />
            <span>Dashboard</span>
          </div>

          <div className="menu-item active">
            <FaClipboardCheck />
            <span>Attendance</span>
          </div>

          <div className="menu-item">
            <FaChalkboardTeacher />
            <span>My Classes</span>
          </div>

          <div className="menu-item">
            <FaChartBar />
            <span>Reports</span>
          </div>

          <div className="menu-item">
            <FaUser />
            <span>Profile</span>
          </div>

          <div className="menu-item">
            <FaCog />
            <span>Settings</span>
          </div>

        </div>

      </div>

      <div className="logout">

        <FaSignOutAlt />

        <span>Logout</span>

      </div>

    </div>
  );
}

export default Sidebar;