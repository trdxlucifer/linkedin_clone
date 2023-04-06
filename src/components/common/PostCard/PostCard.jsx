import React, { useMemo, useState } from "react";
import "./postcard.scss";
import { useNavigate } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";
import { getAllUsers, getCurrentUser } from "../../../api/FirestoreApi";

const PostCard = ({ posts, id }) => {
  let navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [allUser, setAllUser] = useState([]);

  useMemo(() => {
    getCurrentUser(setCurrentUser);
    getAllUsers(setAllUser);
  }, []);

  console.log(
    allUser.filter((i) => i.id === posts.userID).map((i) => i.imageLink)[0]
  );

  return (
    <div className="posts-card" key={id}>
      <div className="post-image-wrapper">
      <img
      alt='profile-image'
      className="profile-image"
        src={
          allUser
            .filter((i) => i.id === posts.userID)
            .map((i) => i.imageLink)[0]
        }
        
      />
      </div>
     
      <p
        className="name"
        onClick={() =>
          navigate("/profile", {
            state: { id: posts?.userID, email: posts.userEmail },
          })
        }
      >
        {posts.userName}
      </p>
      <p className="timestamp">{posts.timeStamp}</p>
      <p className="status">{posts.status}</p>
      <LikeButton
        userId={currentUser?.id}
        postId={posts.id}
        currentUser={currentUser}
      />
    </div>
  );
};

export default PostCard;
