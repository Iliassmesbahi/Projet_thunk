import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifie } from "./thunkSlice";
import { useParams, Link, useNavigate } from "react-router-dom";

const Modifier = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); 
  const list = useSelector((state) => state.tuto.list);

  const prf = list.find((e) => e.id === id); 

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (prf) {
      setNom(prf.nom || "");
      setEmail(prf.email || "");
      setPhone(prf.phone || "");
    }
  }, [prf]);

  const handleModifier = (e) => {
    e.preventDefault();
    if (!nom || !email || !phone) {
      alert("Veuillez remplir tous les champs avant de modifier.");
      return;
    }
    dispatch(
      modifie({
        nom: nom,
        email: email,
        phone: phone
      })
    );
    navigate("/a/Tous");
  };

  if (!prf) {
    return (
      <div className="alert alert-danger mt-4">
        <strong>Erreur :</strong> Tutoriel introuvable.
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Modifier le Tutoriel {id}</h3> {/* Fix: Use 'noma' instead of 'id' */}
      <form onSubmit={handleModifier}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Nom
          </label>
          <input
            id="nom"
            type="text"
            className="form-control"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Entrez le nom du tutoriel"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez l'email du tutoriel"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            className="form-control"
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Entrez le téléphone du tutoriel"
          />
        </div>

        <div className="d-flex justify-content-between">
          <Link to="/a/Tous" className="btn btn-secondary">
            Retour
          </Link>

          <button type="submit" className="btn btn-primary" >
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modifier;
