import React from 'react';
import { CircularProgress } from "@material-ui/core";

import Post from './Post/Post';
import { PostBx } from "./styles";

const Posts = ({ posts }) => {
    return ( 
        <PostBx>
            {
                posts.length ? posts.map((post, index) => (
                    <Post key={index} post={post} />
                )) : <CircularProgress color="inherit"/>
            }
        </PostBx>
    );
};

export default Posts;