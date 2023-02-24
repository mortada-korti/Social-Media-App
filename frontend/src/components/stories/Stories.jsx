import "./stories.scss";
import main from "./data/main";

const Stories = () => {
  return (
    <div className='stories'>
      <div className='story user'>
        <img
          src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <button>+</button>
      </div>
      {main?.map((story) => (
        <div className='story' key={story.id}>
          <img src={story.img} alt='' />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
