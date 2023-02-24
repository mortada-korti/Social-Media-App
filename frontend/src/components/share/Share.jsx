import "./share.scss";

const Share = () => {
  return (
    <div className='share'>
      <div className='top'>
        <img
          src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <input type='text' placeholder="What's on your mind John?" />
      </div>
      <div className='bottom'>
        <div className='items'>
          <div className='bottom--item'>
            <img src='../../assets/image.png' alt='' />
            <span>Add Image</span>
          </div>
          <div className='bottom--item'>
            <img src='../../assets/map.png' alt='' />
            <span>Add Place</span>
          </div>
          <div className='bottom--item'>
            <img src='../../assets/friends.png' alt='' />
            <span>Add Friends</span>
          </div>
        </div>
        <button>Share</button>
      </div>
    </div>
  );
};

export default Share;
