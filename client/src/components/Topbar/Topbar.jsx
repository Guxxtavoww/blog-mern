import { Link as LinkSroll } from "react-scroll";
import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import * as C from "./styles";
import ItemsData from "./ItemsData";
import { Context } from "../../context/Context";

const Topbar = () => {
    const PF = "https://blog-mern-server-api.herokuapp.com/images/";
    const { user, dispatch } = useContext(Context);

    const params = useLocation();

    const [ toggle, setToggle ] = useState(false);

    const [ search, setSearch ] = useState(false);

    const handleLogout = () => dispatch({ type: "LOGOUT" });
    
    const handleClick = () => setToggle(!toggle);

    const closeMenu = () => setToggle(false);

    return (
        <C.TopbarContainer searchState={search}>
            {
                params.pathname !== "/" || params.search ? <Link to="/" className="logo" onClick={closeMenu}>BLOG</Link>  : <LinkSroll to="topo" className="logo" onClick={closeMenu}>BLOG</LinkSroll>
            }
            <div className={toggle ? "menuBx active" : "menuBx"}>
                <ul className="list">
                    {
                        ItemsData.map((item, index) => (
                            <li className={params.pathname === item.to ? "item active" : "item"} key={index}>
                                <Link to={item.to} onClick={closeMenu} className="link">{item.name}</Link> 
                            </li>
                        ))
                    }
                    {
                        user && <li className="item"><button className="link" onClick={handleLogout} title="Sair da conta">Sair</button></li>
                    }
                </ul>
            </div>
            <div className="searchBx">
                {
                    user ? (    
                        <React.Fragment>
                            <Link to="/configuracoes" title="Configurações da Conta">
                                {
                                    user?.profilePic ? <img src={PF + user.profilePic} alt="userImg" className="userImg" /> : <img src="/img-user.png" alt="Icon User" className="userImg" />
                                }
                            </Link>
                        </React.Fragment>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">
                                    LOGIN
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/cadastro">
                                    CADASTRAR
                                </Link>
                            </li>
                        </ul>
                    )
                }
            </div>
            <div className="toggle" onClick={handleClick}>
                {toggle ? <FaTimes /> : <FaBars />}
            </div>
        </C.TopbarContainer>
    );
}

export default Topbar;