import { useState, useEffect } from "react";
import main from "./data/main";
import Comment from "../comment/Comment";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import "./comments.scss";

const Comments = ({ postId }) => {
  const queryClient = useQueryClient();

  const [desc, setDesc] = useState("");
  
  const { isLoading, error, data } = useQuery([`comments ${postId}`], () =>
    makeRequest.get(`/comments?postId=${postId}`).then((res) => {
      return res.data;
    })
  );

  // Mutations
  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries([`comments ${postId}`]);
      },
    }
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      mutation.mutate({ desc, postId });
    } catch (error) {
      console.log(error);
    }
    setDesc("");
  };

  return (
    <div className='comments'>
      <form className='write-comment' onSubmit={handleSubmit}>
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <input
            type='text'
            placeholder='Write your comment here'
            name='desc'
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
        <button>Send</button>
      </form>
      {error
        ? "Somethings Went wrong..."
        : isLoading
        ? "Loading..."
        : data?.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
    </div>
  );
};

export default Comments;
