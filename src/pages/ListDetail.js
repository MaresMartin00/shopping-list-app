import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { fetchData } from "../api";  // Import fetchData function
import "./ListDetail.css";

const ListDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({ users: [], shoppingLists: [], items: [] });
  const [items, setItems] = useState([]);
  const [showResolved, setShowResolved] = useState(true);
  const [showMembers, setShowMembers] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editedListName, setEditedListName] = useState("");

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setItems(result.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  const shoppingList = data.shoppingLists.find((list) => list.id === parseInt(id, 10));

  if (!shoppingList) {
    return <div className="list-detail">Shopping list not found.</div>;
  }

  const filteredItems = showResolved
    ? items.filter((item) => item.shoppingListId === shoppingList.id)
    : items.filter((item) => item.shoppingListId === shoppingList.id && !item.resolved);

  const onItemDelete = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const onToggleShowUnresolvedItems = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, resolved: !item.resolved } : item
    );
    setItems(updatedItems);
  };

  const onItemAdd = () => {
    if (newItemName.trim() !== "") {
      const newItem = {
        id: items.length + 1,
        name: newItemName,
        shoppingListId: shoppingList.id,
        resolved: false,
      };
      setItems([...items, newItem]);
      setNewItemName("");
    }
  };

  const handleDeleteList = async () => {
  const listIndex = data.shoppingLists.findIndex((list) => list.id === parseInt(id, 10));

  const listName = shoppingList.name;

  const Delete = window.confirm(`Opravdu si přejete smazat "${listName}"?`);

  if (Delete && listIndex !== -1) {
    try {
      // Vytáhněte aktuální data
      const currentData = await fetchData();

      // Vytvořte kopii seznamů a odeberte ten, který chcete smazat
      const updatedShoppingLists = currentData.shoppingLists.filter((list) => list.id !== parseInt(id, 10));

      // Aktualizujte data a provede navigaci
      setData((prevData) => {
        const updatedData = {
          ...prevData,
          shoppingLists: updatedShoppingLists
        };
        return updatedData;
      });

      navigate("/ShoppingLists");
    } catch (error) {
      console.error("Error deleting list:", error);
    }
  }
};

  const handleArchiveList = () => {
    shoppingList.archived = true;
    navigate("/Archived");
  };

  return (
    <div className="list-detail">
      {editMode ? (
        <div>
          <input
            type="text"
            value={editedListName}
            onChange={(e) => setEditedListName(e.target.value)}
          />
          <button
            onClick={() => {
              shoppingList.name = editedListName;
              setEditMode(false);
            }}
          >
            Uložit
          </button>
        </div>
      ) : (
        <div className="header">
          <h2 className="list-name">
            {shoppingList.name}
            <AiFillEdit onClick={() => setEditMode(true)} className="edit-icon" />
          </h2>
          <div className="buttons">
            <button onClick={() => setShowMembers(!showMembers)}>Zobrazit členy</button>
            <button onClick={() => setShowResolved(false)}>Zobrazit nevyřešené</button>
            <button onClick={() => setShowResolved(true)}>Zobrazit všechny</button>
          </div>
        </div>
      )}

      {showMembers && (
        <div>
          <ul>
            {shoppingList.members.map((memberId) => (
              <li key={memberId}>{`Uživatel ${memberId}`}</li>
            ))}
          </ul>
        </div>
      )}

      <ul className="filtered-items">
        {filteredItems.map((item) => (
          <li key={item.id}>
            <ImCross onClick={() => onItemDelete(item.id)} className="delete-icon" />
            {item.name}{" "}
            <input
              type="checkbox"
              checked={item.resolved}
              onChange={() => onToggleShowUnresolvedItems(item.id)}
            />
          </li>
        ))}
      </ul>

      {showAddForm && (
        <div>
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Název nové položky"
          />
          <button onClick={onItemAdd}>Přidat</button>
        </div>
      )}

      <div className="buttons">
        <button onClick={() => setShowAddForm(!showAddForm)}>Přidat položku</button>
        <button onClick={handleArchiveList}>Archivovat</button>
        <button onClick={handleDeleteList} className="delete-button">
          Smazat seznam
        </button>
      </div>
    </div>
  );
};

export default ListDetail;