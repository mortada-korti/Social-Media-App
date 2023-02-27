import "./comment.scss";
import moment from "moment";
const Comment = ({ comment }) => {
  return (
    <div className='comment'>
      <div className='left'>
        <img src={comment.profilePic} alt='' />
        <span>
          {`${comment.first_name} ${comment.last_name}`}
          <p>{comment.desc}</p>
        </span>
      </div>
      <span className='date'>{moment(comment.createdAt).fromNow()}</span>
    </div>
  );
};

export default Comment;
