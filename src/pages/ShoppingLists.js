import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ShoppingListTile from "../components/ShoppingListTile";
//import shoppingListsData from "../data/shoppingLists";
import "./ShoppingLists.css";
import { AiOutlinePlus } from "react-icons/ai";
import { fetchData } from "../api";

const ShoppingLists = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [data, setData] = useState({ users: [], shoppingLists: [], items: [] });

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataFromApi();
  }, []);

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

    setData(prevData => ({
      ...prevData,
      shoppingLists: [...prevData.shoppingLists, newShoppingList],
    }));

    closeModal();
  };

  const activeShoppingLists = data.shoppingLists.filter((list) => !list.archived);

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