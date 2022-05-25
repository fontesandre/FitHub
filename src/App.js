import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import logoGde from "./FitHub-Logo.png"
import Perfil from "./Componentes/Perfil";
import ConfiguraTreino from "./Componentes/ConfiguraTreino";
import Medidas from "./Componentes/Medidas";
import Historico from "./Componentes/Historico";
import CalculaIMC from "./Componentes/CalculaIMC";
import Home from "./Componentes/Home";




function App() {
  return (
    
    <BrowserRouter>
      <nav className="navbar is-dark has-shadow	">
        <div className="navbar-brand">
          <img alt="Logo" style={{ width: "50px" }} src={"./FitHub-Logo-800x500.png"}></img>
        </div>
        <div className="navbar-menu ">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
             </Link>
            <Link className="navbar-item" to="/Perfil">
              Perfil
            </Link>
            <Link className="navbar-item" to="/ConfiguraTreino">
              Seu Treino
            </Link>
             <Link className="navbar-item" to="/Medidas">
              Medidas
            </Link>
            <Link className="navbar-item" to="/Historico">
             Historico
            </Link>
            <Link className="navbar-item" to="/CalculaIMC">
              Calcule seu IMC
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Perfil" element={<Perfil></Perfil>}></Route>
        <Route path="/ConfiguraTreino" element={<ConfiguraTreino></ConfiguraTreino>}></Route>
        <Route path="/Medidas" element={<Medidas></Medidas>}></Route>
        <Route path="/Historico" element={<Historico></Historico>}></Route>
        <Route path="/CalculaIMC" element={<CalculaIMC></CalculaIMC>}></Route>
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
