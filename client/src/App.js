import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Topbar } from "./components";
import { Context } from "./context/Context";
import { Home, Login, Cadastro, Settings, Single, Escrever, Contato } from "./pages";

const App = () => {
    const { user } = useContext(Context);

    return (
        <Router>
            <Topbar />
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/post/:id" element={<Single />} />
                <Route path="/escrever" element={<Escrever />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/cadastro" element={user ? <Home /> : <Cadastro />} />
                <Route path="/login" element={user ? <Home /> : <Login />} />
                <Route path="/configuracoes" element={user ? <Settings /> : <Login />} />
            </Routes>
        </Router>
    );
}

export default App;