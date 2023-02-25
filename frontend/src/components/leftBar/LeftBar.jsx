import { Col } from "react-bootstrap";
import "./leftBar.scss";
import main from "./data/main";
import shortcuts from "./data/shortcuts";
import others from "./data/others";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='leftBar'>
      <div className='bar-container'>
        <div className='item user'>
          <Link to={`profile/${currentUser.id}`}>
            <img src={currentUser.profilePic} alt='' />
            <span>{`${currentUser.first_name}  ${currentUser.last_name}`}</span>
          </Link>
        </div>
        {main?.map((item) => (
          <div className='item' key={item.id}>
            <img src={item.img} alt='' />
            <span>{item.name}</span>
          </div>
        ))}
        <hr />
        <span className='title'>Your Shortcuts</span>
        {shortcuts?.map((item) => (
          <div className='item' key={item.id}>
            <img src={item.img} alt='' />
            <span>{item.name}</span>
          </div>
        ))}
        <hr />
        <span className='title'>Your Shortcuts</span>
        {others?.map((item) => (
          <div className='item' key={item.id}>
            <img src={item.img} alt='' />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
