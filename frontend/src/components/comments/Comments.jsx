import "./comments.scss";
import main from "./data/main";
import Comment from "../comment/Comment";

const Comments = () => {
  return (
    <div className='comments'>
      <div className='write-comment'>
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <input type='text' placeholder='Write your comment here' />
        </div>
        <button>Send</button>
      </div>
      {main?.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default Comments;
