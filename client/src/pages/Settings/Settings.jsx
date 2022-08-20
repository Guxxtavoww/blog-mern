import { FaUserCircle } from "react-icons/fa";
import React, { useContext, useState } from "react";

import Api from "../../Api";
import { SettingsSection } from "./styles";
import { Context } from "../../context/Context";

const Settings = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "https://blog-mern-server-api.herokuapp.com/images/";

    const [ file, setFile ] = useState(null);
    const [ email, setEmail ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const [success, setSuccess] = useState(false);
    
    const handleSubmit = async e => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            username,
            email, 
            password,
        }
        if(file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            updatedUser.profilePic = fileName;
            try {
                await Api.post("https://blog-mern-server-api.herokuapp.com/server/upload", data);
            } catch (error) {
                console.log(error);
            }
        }
        try {
            const res = await Api.put(`https://blog-mern-server-api.herokuapp.com/server/users/${user._id}`, updatedUser);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
            window.location.replace("/");
            setSuccess(true);
        } catch (error) {
            dispatch({ type: "UPDATE_FAILURE" });
            setSuccess(false);
        }   
    }

    return (
        <SettingsSection>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Atualize sua Conta</span>
                    <button className="settingsTitleDelete">Delete sua Conta</button>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <span>Foto de Perfil</span>
                    <div className="settingsPP">
                        {
                            user?.profilePic ? <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="Foto de Perfil" /> : <img src="/img-user.png" alt="Foto de Perfil" />
                        }
                        <label htmlFor="fileInput" title="Mude sua foto de Perfil">
                            <FaUserCircle className="iconUser" />
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
                    </div>
                    <div className="inputBx">
                        <label htmlFor="username">Nome de Usuário: </label>
                        <input type="text" id="username" placeholder={user.username} autoFocus onChange={e => setUsername(e.target.value)} autoComplete="current-username" />
                    </div>
                    <div className="inputBx">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} autoComplete="current-email" />
                    </div>
                    <div className="inputBx">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" placeholder="Senha Atual" onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
                    </div>
                    <button type="submit">Atualizar</button>
                    { success && <span>Usuário Atualizado com sucesso!</span> }
                </form>
            </div>
        </SettingsSection>
    );
}

export default Settings;