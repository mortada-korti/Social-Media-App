import Post from "../post/Post";
import main from "./data/main";
import "./posts.scss";

const Posts = () => {

  return (
    <div className='posts'>
      {main?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
