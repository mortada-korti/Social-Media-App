import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Comments from "../comments/Comments";
import React, { useState, useEffect } from "react";

const Post = ({ post }) => {
  const [openComments, setOpenComments] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <div className='post'>
      <div className='top'>
        <img src={post.profilePic} alt='' />
        <span>
          {`${post.first_name} ${post.last_name}`}
          <span className='date'>a few seconds ago</span>
        </span>
      </div>

      <div className='mid'>
        {post.desc && <div className='title'>{post.desc}</div>}
        {post.img && <img src={post.img} alt='' />}
      </div>
      <div className='bottom'>
        <div className='icon'>
          {liked ? (
            <FavoriteOutlinedIcon
              className='liked'
              onClick={() => setLiked(!liked)}
            />
          ) : (
            <FavoriteBorderOutlinedIcon onClick={() => setLiked(!liked)} />
          )}
          <span>12 Likes</span>
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
      {openComments && <Comments />}
    </div>
  );
};

export default Post;
