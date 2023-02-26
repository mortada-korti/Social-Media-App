import { Link, useNavigate } from "react-router-dom";
import { makeRequest } from "../../axios";

// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

// Context
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

// Styles
import "./topBar.scss";
import { Col } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";

const TopBar = () => {
  const navigate = useNavigate();

  const { currentUser, logout } = useContext(AuthContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className='topBar'>
      <Col md={4} className='nav--left'>
        <span>
          <Link to='/'>MyChat</Link>
        </span>
        <div className='nav--search'>
          <input type='text' placeholder='Search' />
          <SearchOutlinedIcon />
        </div>
      </Col>

      <Col md={4} className='nav--mid'>
        <Link to='/'>
          <HomeOutlinedIcon />
        </Link>

        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={() => toggleDarkMode()} />
        ) : (
          <DarkModeOutlinedIcon onClick={() => toggleDarkMode()} />
        )}

        <Link to='/profile/:id'>
          <PersonOutlineOutlinedIcon />
        </Link>
        <Link to='/'>
          <AppsOutlinedIcon />
        </Link>
      </Col>

      <Col md={4} className='nav--right'>
        <Link to=''>
          <NotificationsNoneOutlinedIcon onClick={handleLogout} />
        </Link>
        <Link to=''>
          <MailOutlineOutlinedIcon />
        </Link>
        <div className='user'>
          <img src={currentUser?.profilePic} alt='' />
          <span>{`${currentUser?.first_name} ${currentUser?.last_name}`}</span>
        </div>
      </Col>
    </div>
  );
};

export default TopBar;
