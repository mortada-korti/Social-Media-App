import "./comment.scss";

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
      <span className='date'>1 hour ago</span>
    </div>
  );
};

export default Comment;
