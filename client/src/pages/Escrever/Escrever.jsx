import { FaPlus } from "react-icons/fa";
import React, { useState, useContext } from 'react';

import Api from "../../Api";
import { WriteBox } from "./styles";
import { Context } from '../../context/Context';

const Escrever = () => {
    const { user } = useContext(Context);
    const [ title, setTitle ] = useState("");
    const [ file, setFile ] = useState(null);
    const [ desc, setDesc ] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc, 
            photo: ""
        }
        if(file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.photo = fileName;
            try {
                await Api.post("/upload", data);
            } catch (error) {
                console.log(error);
            }
        }
        try {
            const res = await Api.post("/posts/", newPost);
            window.location.replace(`/post/${res.data._id}`);
            console.log(newPost);
        } catch (error) {
            console.log(error);
        }   
    }

    return (
        <React.Fragment>
            {
                user ? (
                    <WriteBox>
                        {file && <img src={URL.createObjectURL(file)} alt="Escrever Img" className="writeImg" />}
                        <form className="writeForm" onSubmit={handleSubmit}>
                            <div className="writeFormGroup">
                                <label htmlFor="fileInput" title='Adicione uma imagem'>
                                    <FaPlus className="writeIcon" />
                                </label>
                                <input id="fileInput" type="file" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
                                <input
                                    className="writeInput text"
                                    placeholder="Título"
                                    type="text"
                                    autoFocus
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="writeFormGroup">
                                <textarea
                                    className="writeInput writeText"
                                    placeholder="Conte sua história..."
                                    autoFocus
                                    onChange={e => setDesc(e.target.value)}
                                />
                            </div>
                            <button className="writeSubmit" type="submit">Publicar</button>
                        </form>
                    </WriteBox>
                ) : (
                    <WriteBox>
                        <h1>Por favor faça seu Login para criar um post...</h1>
                    </WriteBox>
                )
            }
            
        </React.Fragment>
    );
};

export default Escrever;