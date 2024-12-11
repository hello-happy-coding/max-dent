import React from "react";
import "./Tile.css";
import { Link } from "react-router-dom";

const Tile = ({ title, description, url }) => {
  return (
    <Link to={url} target="_blank" rel="noopener noreferrer" className="tile">
      <h3 className="tile-title">{title}</h3>
      <p className="tile-description">{description}</p>
    </Link>
  );
};

export default Tile;
