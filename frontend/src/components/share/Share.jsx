import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { makeRequest } from "../../axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

import "./share.scss";
const Share = () => {
  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries("posts");
      },
    }
  );
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/uploads", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
  };

  return (
    <form className='share' onSubmit={handleSubmit}>
      <div className='top'>
        <img src={currentUser?.profilePic} alt='' />
        <input
          type='text'
          name='desc'
          placeholder={`What's on your mind ${currentUser.first_name}!`}
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <div className='right'>
          {file && (
            <img className='file' alt='' src={URL.createObjectURL(file)} />
          )}
        </div>
      </div>
      <div className='bottom'>
        <div className='items'>
          <div className='bottom--item'>
            <input
              type='file'
              id='file'
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor='file'>
              <div className='bottom--item'>
                <img src='../../assets/image.png' alt='' />
                <span>Add Image</span>
              </div>
            </label>
          </div>
          <div className='bottom--item'>
            <img src='../../assets/map.png' alt='' />
            <span>Add Place</span>
          </div>
          <div className='bottom--item'>
            <img src='../../assets/friends.png' alt='' />
            <span>Add Friends</span>
          </div>
        </div>
        <button>Share</button>
      </div>
    </form>
  );
};

export default Share;
