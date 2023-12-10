import React, { useState, useEffect } from "react";
import ShoppingListTile from "../components/ShoppingListTile";
import { fetchData } from "../api";
import "./Archived.css";

const Archived = () => {
  const [archivedLists, setArchivedLists] = useState([]);

  useEffect(() => {
    const fetchArchivedLists = async () => {
      try {
        const result = await fetchData();
        const archivedListsData = result.shoppingLists.filter((list) => list.archived);
        setArchivedLists(archivedListsData);
      } catch (error) {
        console.error("Error fetching archived lists:", error);
      }
    };

    fetchArchivedLists();
  }, []);

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