import React from "react";
import { useParams } from "react-router-dom";
import { useStarShips } from "../StarshipContext";
import { Link } from "react-router-dom";
import images from "./images/Image.json";

function ShipDetail() {
  const { id } = useParams();
  const { filteredShips } = useStarShips();
  const ship = filteredShips[id];
  const shipImage = images.find((item) => item.name === ship.name)?.img;

  return (
    <div className="popup-container">
      <img className="ship-image-detail" src={shipImage} alt="" />
      <p>
        <strong>Model</strong>: {ship.model}
      </p>
      <p>
        <strong>Hyperdrive rating</strong>: {ship.hyperdrive_rating}
      </p>
      <p>
        <strong>Passengers</strong>: {ship.passengers}
      </p>
      <p>
        <strong>Max Atmosphering Speed</strong>: {ship.max_atmosphering_speed}
      </p>
      <p>
        <strong>Manufacturer</strong>: {ship.manufacturer}
      </p>
      <p>
        <strong>Crew</strong>: {ship.crew}
      </p>
      <p>
        <strong>Cargo Capacity</strong>: {ship.cargo_capacity}
      </p>
      <Link className="detail-goback" to="/">
        Go back
      </Link>
    </div>
  );
}

export default ShipDetail;
