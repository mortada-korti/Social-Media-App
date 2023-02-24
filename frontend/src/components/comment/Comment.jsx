import "./comment.scss";

const Comment = ({ comment }) => {
  return (
    <div className='comment'>
      <div className='left'>
        <img src={comment.img} alt='' />
        <span>
          {comment.name}
          <p>{comment.comment}</p>
        </span>
      </div>
      <span className='date'>1 hour ago</span>
    </div>
  );
};

export default Comment;
