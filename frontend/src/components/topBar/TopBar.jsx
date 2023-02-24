import { Link } from "react-router-dom";

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

const TopBar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className='topBar'>
      <Col md={4} className='nav--left'>
        <span>MyChat</span>
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
          <NotificationsNoneOutlinedIcon />
        </Link>
        <Link to=''>
          <MailOutlineOutlinedIcon />
        </Link>
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <span>Mortada Korti</span>
        </div>
      </Col>
    </div>
  );
};

export default TopBar;
