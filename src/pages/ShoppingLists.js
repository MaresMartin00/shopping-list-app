import React, { useState } from "react";
import Modal from "react-modal";
import ShoppingListTile from "../components/ShoppingListTile";
import shoppingListsData from "../data/shoppingLists";
import "./ShoppingLists.css";
import { AiOutlinePlus } from "react-icons/ai";

const ShoppingLists = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newListName, setNewListName] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setNewListName("");
  };

  const generateUniqueId = () => {
    return new Date().getTime();
  };

  const handleAddList = () => {
    if (newListName.trim() === "") {
      alert("Please enter a name for the new shopping list.");
      return;
    }

    const newShoppingList = {
      id: generateUniqueId(),
      name: newListName,
      ownerId: 1,
      members: [1],
      archived: false,
      items: [],
    };

    shoppingListsData.push(newShoppingList);

    closeModal();
  };

  const activeShoppingLists = shoppingListsData.filter((list) => !list.archived);

  return (
    <div className="shopping-lists">
      {activeShoppingLists.map((list) => (
        <ShoppingListTile key={list.id} list={list} />
      ))}

      <button className="add-list-button" onClick={openModal}>
        <AiOutlinePlus /> Add
      </button>

      <Modal className="ModalContent"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Shopping List"
      >
        <h2>Add Shopping List</h2>
        <label>
          Name:
          <input
            type="text"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
          />
        </label>
        <button onClick={handleAddList}>Add List</button>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ShoppingLists;