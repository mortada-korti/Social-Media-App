import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Comments from "../comments/Comments";
import { AuthContext } from "../../context/AuthContext";
import { useState, useEffect, useContext } from "react";
import moment from "moment";
import { makeRequest } from "../../axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const queryClient = useQueryClient();
  const { currentUser } = useContext(AuthContext);
  const [openComments, setOpenComments] = useState(false);
  const [liked, setLiked] = useState(false);

  const { isLoading, error, data } = useQuery([`likes ${post.id}`], () =>
    makeRequest.get(`/likes?postId=${post.id}`).then((res) => {
      return res.data;
    })
  );

  // Mutations
  const mutation = useMutation(
    (liked) => {
      if (liked) return makeRequest.delete(`/likes?postId=${post.id}`);
      return makeRequest.post("/likes", { postId: post.id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(`likes ${post.id}`);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      mutation.mutate(data.includes(currentUser.id));
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className='post'>
      <div className='top'>
        <Link to={`/profile/${post.userId}`}>
          <img src={post.profilePic} alt='' />
          <span>
            {`${post.first_name} ${post.last_name}`}
            <span className='date'>{moment(post.createdAt).fromNow()}</span>
          </span>
        </Link>
      </div>

      <div className='mid'>
        {post.desc && <div className='title'>{post.desc}</div>}
        {post.img && <img src={`/uploads/${post.img}`} alt='' />}
      </div>
      <div className='bottom'>
        <div className='icon'>
          {data?.includes(currentUser.id) ? (
            <FavoriteOutlinedIcon
              className='liked'
              onClick={(e) => {
                setLiked(false), handleSubmit(e);
              }}
            />
          ) : (
            <FavoriteBorderOutlinedIcon
              onClick={(e) => {
                setLiked(true), handleSubmit(e);
              }}
            />
          )}
          {data && (
            <span>{`${data?.length} ${
              data.length === 1 ? "like" : "likes"
            }`}</span>
          )}
        </div>
        <div className='icon' onClick={() => setOpenComments(!openComments)}>
          <TextsmsOutlinedIcon />
          <span>12 comments</span>
        </div>
        <div className='icon'>
          <ShareOutlinedIcon />
          <span>12 shares</span>
        </div>
      </div>
      {openComments && <Comments postId={post.id} />}
    </div>
  );
};

export default Post;
