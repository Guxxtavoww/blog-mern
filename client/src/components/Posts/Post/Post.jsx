import React from 'react';
import { Link } from "react-router-dom";

import { PostBx } from "./styles";

const Post = ({ post }) => {
    const PF = "https://blog-mern-server-api.herokuapp.com/images/";

    return (
        <PostBx>
            {
                post?.photo && <img src={PF + post.photo} alt="Post Img" className="postImg" />
            }
            <div className="postInfo">
                <span className="postTitle">
                    <Link to={`/post/${post?._id}`} className="link">
                        {post?.title}
                    </Link>
                </span>
                <span className="postDate">{new Date(post?.createdAt).toDateString()}</span>
            </div>
            <div className="postDescBx">
                <p className="postDesc">{post?.desc.substr(0, 100)}...</p>
            </div>
        </PostBx>
    );
};

export default Post;