import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';

import * as C from "./styles";
import Api from "../../Api";
import { Header, Posts, SideBar, Footer } from "../../components";

const Home = () => {
    const [ posts, setPosts ] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await Api.get(`/posts/${search}`);
            setPosts(response.data);
        }
        fetchPosts();
    }, [ search ]); 

    return (
        <C.AbsoluteBox>
            <Header />
            <C.HomeInnerBx>
                <Posts posts={posts} />
                <SideBar />
            </C.HomeInnerBx>
            <Footer />
        </C.AbsoluteBox>
    );
};

export default Home;