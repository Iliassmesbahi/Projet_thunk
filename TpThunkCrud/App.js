import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import TousStagiere from "./TousStagiere";
import Nouveau from "./Nouveau";
// import Modifier from "./modifier";
const App=()=>{
    return(<>
      <BrowserRouter>
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ReduxCRUDAPP</a>
      
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link to={"/"}>
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          </Link>

        </li>
        <li className="nav-item">
        <Link to={"/Nouveau"}>
          <a className="nav-link" href="#">Nouveau stagiere</a>
          </Link>
        </li>
        <li className="nav-item">
        <Link to={"/a/Tous"}>
          <a className="nav-link" href="#">Tous les stagieres</a>
          </Link>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control" type="search" placeholder="chercher par nom" aria-label="Search"/>
      </form>
    </div>
  </div>
</nav><br/><br/>
<center>
    <h2>Bienvenue a l'application de gestion des stagieres!</h2><br/><br/>
    
    
    </center>
    </div>
    

  
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Nouveau" element={<Nouveau/>}></Route>
        <Route path="/a/Tous" element={<TousStagiere/>}></Route>
        {/* <Route path="/a/b/:id" element={<Modifier/>}></Route> */}

        </Routes>
    </BrowserRouter>
    </>)
}
export default App;