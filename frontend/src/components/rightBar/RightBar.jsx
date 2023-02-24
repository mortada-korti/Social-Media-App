import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className='bar-container'>
        <div className='item'>
          <span>Suggestions For You</span>
          <div className='user'>
            <div className='user-info'>
              <img
                src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <span>Mortada Korti</span>
            </div>
            <div className='buttons'>
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className='user'>
            <div className='user-info'>
              <img
                src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <span>Mortada Korti</span>
            </div>
            <div className='buttons'>
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className='item'>
          <span>Latest Activities</span>
          <div className='user'>
            <div className='user-info'>
              <img
                src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <p className='activity'>
                <span>Mortada Korti</span>Changed their profile picture
              </p>
            </div>
            <span className='date'>1 min ago</span>
          </div>
          <div className='user'>
            <div className='user-info'>
              <img
                src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <p className='activity'>
                <span>Mortada Korti</span>Liked a post
              </p>
            </div>
            <span className='date'>1 min ago</span>
          </div>
          <div className='user'>
            <div className='user-info'>
              <img
                src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <p className='activity'>
                <span>Mortada Korti</span>Liked a comment
              </p>
            </div>
            <span className='date'>1 min ago</span>
          </div>
          <div className='user'>
            <div className='user-info'>
              <img
                src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <p className='activity'>
                <span>Mortada Korti</span>Posted a new photo
              </p>
            </div>
            <span className='date'>1 min ago</span>
          </div>
        </div>

        <div className='item'>
          <span>Online Friends</span>
          <div className='user'>
            <div className='user-info'>
              <div className='online' />
              <img
                src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <span>Mortada Korti</span>
            </div>
          </div>
          <div className='user'>
            <div className='user-info'>
              <div className='online' />
              <img
                src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <span>Mortada Korti</span>
            </div>
          </div>
          <div className='user'>
            <div className='user-info'>
              <div className='online' />
              <img
                src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <span>Mortada Korti</span>
            </div>
          </div>
          <div className='user'>
            <div className='user-info'>
              <div className='online' />
              <img
                src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <span>Mortada Korti</span>
            </div>
          </div>
          <div className='user'>
            <div className='user-info'>
              <div className='online' />
              <img
                src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <span>Mortada Korti</span>
            </div>
          </div>
          <div className='user'>
            <div className='user-info'>
              <div className='online' />
              <img
                src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <span>Mortada Korti</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
