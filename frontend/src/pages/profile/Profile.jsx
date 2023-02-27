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
import { useMutation, useQuery, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = useLocation().pathname.split("/")[2];

  const { isLoading, error, data } = useQuery(["users"], () =>
    makeRequest.get(`/users/find/${userId}`).then((res) => {
      return res.data;
    })
  );

  const { data: relationshipData, isLoading: rIsLoading } = useQuery(
    ["followers"],
    () =>
      makeRequest.get(`/followers?userId=${userId}`).then((res) => {
        return res.data;
      })
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // mutation.mutate()
  };
  return (
    <div className='profile'>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Something Went Wrong..."
      ) : (
        <>
          <div className='images'>
            <img className='cover-img' src={data?.coverPic} alt='' />
            <img className='profile-img' src={data?.profilePic} alt='' />
          </div>
          <div className='profile-container'>
            <form className='profile-info'>
              <span className='top'>{`${data?.first_name} ${data?.last_name}`}</span>
              {/* {data? && (
            <span className='followers'>
              {` (${data??.length} ${
                data??.length === 1 ? "Follower" : "Followers"
              })`}
            </span>
          )} */}
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
                    <span>{data?.city}</span>
                  </a>
                  <a href='#'>
                    <LanguageIcon />
                    <span>{data?.website}</span>
                  </a>
                </div>
                <div className='right'>
                  <a href='#'>
                    <EmailIcon />
                  </a>
                  <MoreVertIcon />
                </div>
              </div>
              {data?.id === currentUser.id ? (
                <button>Update</button>
              ) : (
                <button>
                  {rIsLoading
                    ? "Loading..."
                    : relationshipData?.includes(currentUser.id)
                    ? "Following"
                    : "Follow"}
                </button>
              )}
            </form>

            {/* <Posts /> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
