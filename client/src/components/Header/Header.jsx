import React from 'react';
import * as C from "./styles";

const Header = () => {
    return (
        <C.HeaderBox>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleSm">Blog</span>
            </div>
            <img className='headerImg' src='/headerImg.jpg' alt='Header Img' />
        </C.HeaderBox>
    );
};

export default Header;
