// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { afficheStagiaire, deleteStagiaire } from "./thunkSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const TousStagiere = () => {
  const { filteredList, loading, error } = useSelector((state) => state.tutoo || {});
  const [filter, setFilter] = useState("All");
  const dispatch = useDispatch();

  // Fetch stagiaires on component mount
//   useEffect(() => {
   
//   }, []);

  
//   const filteredList = list.filter((e) => filter === "All" || e.niveau === filter);

  return (
    <div className="container">{console.log(filteredList)
    }
        <button onClick={()=>{ dispatch(afficheStagiaire());}}>ffffff</button>
      <center>
        <h2>Tous les stagiaires</h2>
        <div className="m-3">
          <label>
            <input
              type="radio"
              name="niveau"
              value="All"
              checked={filter === "All"}
              onChange={(e) => setFilter(e.target.value)}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="niveau"
              value="Technicien spécialisé"
              checked={filter === "Technicien spécialisé"}
              onChange={(e) => setFilter(e.target.value)}
            />
            Technicien spécialisé
          </label>
          <label>
            <input
              type="radio"
              name="niveau"
              value="Technicien"
              checked={filter === "Technicien"}
              onChange={(e) => setFilter(e.target.value)}
            />
            Technicien
          </label>
        </div>
      </center>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div className="d-flex flex-wrap">
        {filteredList ? (
          filteredList.map((e) => (
            <div className="card m-2" style={{ width: "22rem" }} key={e.id}>
              <div className="card-body">
                <h5 className="card-title">{e.nom}</h5>
                <p className="card-text">{e.email}</p>
                <p className="card-text">{e.niveau}</p>
                <button className="btn btn-primary m-2">Afficher</button>
                <Link to={`/a/b/${e.id}`}>
                  <button className="btn btn-secondary m-2">Modifier</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteStagiaire(e.id))}
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun stagiaire trouvé.</p>
        )}
      </div>
    </div>
  );
};

export default TousStagiere;
