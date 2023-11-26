import React from "react";
import ShoppingListTile from "../components/ShoppingListTile";
import shoppingListsData from "../data/shoppingLists";
import "./Archived.css";

const Archived = () => {
  const archivedLists = shoppingListsData.filter((list) => list.archived);

  return (
    <div className="archived-container">
      {archivedLists.length > 0 ? (
        archivedLists.map((list) => (
          <ShoppingListTile key={list.id} list={list} className="archived-list-tile" />
        ))
      ) : (
        <p className="no-archived-message">No archived lists.</p>
      )}
    </div>
  );
};

export default Archived;