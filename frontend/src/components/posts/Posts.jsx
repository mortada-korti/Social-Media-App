import { useQuery } from "react-query";
import axios from "axios";
import Post from "../post/Post";
import main from "./data/main";
import { makeRequest } from "../../axios";
import "./posts.scss";

const Posts = () => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts").then((res) => {
      return res.data;
    })
  );

  return (
    <div className='posts'>
      {isLoading
        ? "Loading..."
        : error
        ? "Something went wrong..."
        : data?.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default Posts;
