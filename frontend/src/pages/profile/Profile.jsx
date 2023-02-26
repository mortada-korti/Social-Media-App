import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmailIcon from "@mui/icons-material/Email";
import Posts from "../../components/posts/Posts";

// Style
import "./profile.scss";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='profile'>
      <div className='images'>
        <img className='cover-img' src={currentUser.coverPic} alt='' />
        <img className='profile-img' src={currentUser.profilePic} alt='' />
      </div>
      <div className='profile-container'>
        <div className='profile-info'>
          <span className='top'>{`${currentUser.first_name} ${currentUser.last_name}`}</span>
          <div className='mid'>
            <div className='socials'>
              <a href='#' className='icon'>
                <FacebookOutlinedIcon />
              </a>
              <a href='#' className='icon'>
                <InstagramIcon />
              </a>
              <a href='#' className='icon'>
                <TwitterIcon />
              </a>
              <a href='#' className='icon'>
                <LinkedInIcon />
              </a>
              <a href='#' className='icon'>
                <GitHubIcon />
              </a>
            </div>
            <div className='info'>
              <a href='#'>
                <LocationOnIcon />
                <span>ALgeria</span>
              </a>
              <a href='#'>
                <LanguageIcon />
                <span>mora.com</span>
              </a>
            </div>
            <div className='right'>
              <a href='#'>
                <EmailIcon />
              </a>
              <MoreVertIcon />
            </div>
          </div>
          <button>Follow</button>
        </div>

        <Posts />
      </div>
    </div>
  );
};

export default Profile;
