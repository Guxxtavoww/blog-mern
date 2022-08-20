import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState, useContext } from 'react';

import Api from "../../Api";
import { SingleBox } from "./styles";
import { Context } from '../../context/Context';

const SingleC = () => {
    const location = useLocation();
    const { user } = useContext(Context);
    const id = location.pathname.split("/")[2];
    
    const [ data, setData ] = useState({});
    const [ desc, setDesc ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ updateMode, setUpdateMode ] = useState(false);

    const PF = "https://blog-mern-server-api.herokuapp.com/images/";

    useEffect(() => {
        const getPost = async () => {
            const response = await Api.get(`/posts/${id}`);       
            setData(response.data);
            setDesc(response.data.desc);
            setTitle(response.data.title);
        }
        scrollTo(0, 0);
        getPost();
    }, [ id ]);

    const handleDelete = async () => {
        try {
            await Api.delete(`https://blog-mern-server-api.herokuapp.com/server/posts/${data._id}`, { data: { username: user.username } });
            window.location.replace("/");
        } catch (error) {}
    }

    const handleUpdate = async () => {
        try {
            await Api.put(`https://blog-mern-server-api.herokuapp.com/server/posts/${data._id}`, { username: user.username, title: title, desc: desc } );
            window.location.reload();
            setUpdateMode(false);
        } catch (error) {}
    }

    return (
        <SingleBox>
            <div className="singleWrapper">
                { data.photo && <img src={PF + data.photo} alt="Img Post Single" /> }
                <div className={data.username === user?.username ? "head edit" : "head"}>
                    {updateMode ? <input type="text" name="title" className="inputTitle" autoFocus value={title} placeholder="Edite seu Título..." onChange={e => setTitle(e.target.value)} /> : <h1 className='title'>{title}</h1>}
                    {
                        data.username === user?.username && (
                            <div className="postEditBx">
                                <button className='acao' onClick={() => setUpdateMode(!updateMode)}>
                                    <FaEdit className="acaoIcon iconEdit" />
                                </button>
                                <button className='acao' onClick={handleDelete}>
                                    <FaTrashAlt className="acaoIcon iconDel" />
                                </button>
                            </div>
                        )
                    }
                </div>
                <div className="singlePostInfo">
                    <span className="linkBx">
                        Autor:
                        <Link className="link" to={`/?user=${data.username}`}>{data.username}</Link>
                    </span>
                    <span className="date">{new Date(data.createdAt).toDateString()}</span>
                </div>
                <div className="content">
                    {
                        updateMode ? <textarea style={{ width: "100%", margin: "1rem 0", padding: "8px", fontSize: "1.1em", resize: "none", minHeight: "10rem", background: "transparent" }} placeholder="Nova Descrição" value={desc} name="desc" onChange={e => setDesc(e.target.value)} /> : <p>{desc}</p>
                    }
                </div>
                {updateMode && <button className='submit' type="submit" onClick={handleUpdate}>Atualizar</button>}
            </div>
        </SingleBox>
    );
};

export default SingleC;