import { Col } from "react-bootstrap";
import "./leftBar.scss";
import main from "./data/main";
import shortcuts from "./data/shortcuts";
import others from "./data/others";

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className='bar-container'>
        <div className='item user'>
          <img
            src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <span>Mortada Korti</span>
        </div>
        {main?.map((item) => (
          <div className='item' key={item.id}>
            <img src={item.img} alt='' />
            <span>{item.name}</span>
          </div>
        ))}
        <hr />
        <span className="title">Your Shortcuts</span>
        {shortcuts?.map((item) => (
          <div className='item' key={item.id}>
            <img src={item.img} alt='' />
            <span>{item.name}</span>
          </div>
        ))}
        <hr />
        <span className="title">Your Shortcuts</span>
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
