import "./profile.scss";
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

const Profile = () => {
  return (
    <div className='profile'>
      <div className='images'>
        <img
          className='cover-img'
          src='https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <img
          className='profile-img'
          src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div>
      <div className='profile-container'>
        <div className='profile-info'>
          <span className='top'>Mortada Korti</span>
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
