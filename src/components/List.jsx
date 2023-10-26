import React from "react";
import { useEffect, useState } from "react";
import { useStarShips } from "../StarshipContext";
import ShipItem from "./ShipItem";

function List() {
  const {
    isThereNext,
    loadMore,
    setFilterText,
    filteredShips,
    filterText,
    isLoading,
  } = useStarShips();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterText(e.target.filterInput.value);
  };

  const renderList = () => {
    const noMatchMessage = !isLoading && (
      <div className="no-match">
        There seems to be no ships related to "{filterText}""", try something
        else.
      </div>
    );
    return filteredShips[0]
      ? filteredShips.map((ship, index) => (
          <ShipItem
            key={index}
            id={index}
            shipName={ship.name}
            shipModel={ship.model}
            shipHyper={ship.hyperdrive_rating}
          ></ShipItem>
        ))
      : noMatchMessage;
  };

  const renderLoading = () => {
    return (
      <div className="lds-hourglass-container">
        <div className="lds-hourglass"></div>
      </div>
    );
  };

  return (
    <div className="list-root">
      <img
        height={100}
        width={200}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png"
        alt=""
      />
      <div>
        <p className="name-model">Name / Model</p>
        <form className="filter-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Name / Model"
            name="filterInput"
          />
          <button type="submit">Filter</button>
        </form>
      </div>
      <div className="container">{renderList()}</div>
      {isLoading ? renderLoading() : null}
      {filterText === "" && !isLoading && isThereNext && (
        <button className="loadmore-btn" onClick={loadMore}>
          LOAD MORE
        </button>
      )}
    </div>
  );
}

export default List;
