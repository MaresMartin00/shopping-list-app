import React from "react";
import { Link } from "react-router-dom";
import shoppingListsData from "../data/shoppingLists";

const ShoppingLists = () => {
  return (
    <div className="shopping-lists">
      {shoppingListsData.map((list) => (
        <div key={list.id} className="shopping-list-tile">
          <h2>{list.name}</h2>
          <p>Owner: {list.ownerId}</p>
          <p>Members: {list.members.join(", ")}</p>
          <Link to={`/ListDetail/${list.id}`}>Detail</Link>
        </div>
      ))}
    </div>
  );
};

export default ShoppingLists;