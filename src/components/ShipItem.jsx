import React from "react";

import { Link } from "react-router-dom";
import images from "./images/Image.json";

function ShipItem({ shipModel, shipHyper, shipName, id }) {
  const shipImage = images.find((item) => item.name === shipName)?.img;

  return (
    <div className="item-container">
      <img className="ship-image" src={shipImage} alt="" />
      <Link to={`/${id}`}>{shipName}</Link>
      <section className="ship-att">
        <p>
          <strong>Model</strong>:{shipModel}
        </p>
        <p>
          <strong>Hyperdrive rating</strong>:{shipHyper}
        </p>
      </section>
    </div>
  );
}

export default ShipItem;
