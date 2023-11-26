import React from "react";
import { Link } from "react-router-dom";
import "./ShoppingListTile.css";

const ShoppingListTile = ({ list }) => (
  <div className="shopping-list-tile">
    <h2>{list.name}</h2>
    <p>Owner: {list.ownerId}</p>
    <p>Members: {list.members.join(", ")}</p>
    <Link to={`/ListDetail/${list.id}`}>Detail</Link>
  </div>
);

export default ShoppingListTile;