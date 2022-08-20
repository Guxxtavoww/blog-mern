import React from 'react';
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
 
import * as C from "./styles";

const Sidebar = () => {
    return (
        <C.SidebarBox>
            <div className="sidebarItem">
                <span className="sidebarTitle main">Sobre Mim</span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="Sidebar Item Img" />
                <p>Desenvolvedor WEB procurando Emprego!</p>
            </div>
            <div className="sidebarItem">

                <div className="sidebarItem">
                    <span className="sidebarTitle">Me siga</span>
                    <div className="sidebarSocial">
                        <a href="https://www.instagram.com/programador_freelancer_web/" target="_blank" rel="noreferrer noopener">
                            <FaInstagramSquare className='sidebarIcon' />
                        </a>
                        <a href="https://www.linkedin.com/in/gustavo-augusto-3a513b1b5/" target="_blank" rel="noreferrer noopener">
                            <FaLinkedin className='sidebarIcon' />
                        </a>
                        <a href="https://github.com/Guxxtavoww" target="_blank" rel="noreferrer noopener">
                            <FaGithubSquare className='sidebarIcon' />
                        </a>
                        <a href="https://twitter.com/AugustoGus" target="_blank" rel="noreferrer noopener">
                            <FaTwitterSquare className='sidebarIcon' />
                        </a>
                    </div>
                </div>
            </div>
        </C.SidebarBox>
    );
};

export default Sidebar;