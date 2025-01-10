import { useState } from "react";
import { useDispatch } from "react-redux";
import {  createStagiaire } from "./thunkSlice";

const Nouveau = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [niveau, setNiveau] = useState("Technicien"); // Ajout du niveau
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStagiaire = { nom, email, phone, niveau };
    dispatch(createStagiaire(newStagiaire))
  }
    // Exemple avec une requête vers un backend
  //   fetch("http://localhost:5000/stagiaires", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newStagiaire),
  //   })
  //     .then(() => {
  //       // Une fois ajouté, naviguez vers Tous les stagiaires
  //       navigate("/a/Tous");
  //     })
  //     .catch((error) => console.error("Erreur lors de l'ajout :", error));
  // };

  return (
    <div className="container mt-4">
      <h2>Ajouter un Nouveau Stagiaire</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom complet</label>
          <input
            type="text"
            className="form-control"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Entrez le Nom"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez l'Email"
          />
        </div>
        <div className="form-group">
          <label>Numéro de téléphone</label>
          <input
            type="number"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Entrez le numéro de téléphone"
          />
        </div>
        <div className="form-group">
          <label>Niveau</label>
          <select
            className="form-control"
            value={niveau}
            onChange={(e) => setNiveau(e.target.value)}
          >
            <option value="t">Technicien</option>
            <option value="ts">Technicien spécialisé</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Nouveau;
