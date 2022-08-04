import React from "react";
import Navigation from "../components/Navigation";

function prices() {
  return (
    <div>
      <Navigation />
      <h1 className="d-flex align-items-center justify-content-center me-auto page-title">
        Tarifs & prestations
      </h1>
      <div class="container mt-5 price-wrap">
        <div class="row d-flex flex-wrap">
          <div class="col-4 col-price fst-italic">Juste moi</div>
          <div class="col-4 col-price fst-italic">Pour deux</div>
          <div class="col-4 col-price fst-italic">Famille</div>
          <div class="col-4 col-price fst-italic">Il était une fois</div>
          <div class="col-4 col-price fst-italic"> Mon bébé</div>
          <div class="col-4 col-price fst-italic">
            J’immortalise l’événement
          </div>
        </div>
      </div>
    </div>
  );
}

export default prices;
