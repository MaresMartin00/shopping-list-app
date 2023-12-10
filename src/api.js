const mockData = {
    users: [
        {
            id: 1,
            name: "Uživatel 1"
          },
          {
            id: 2,
            name: "Uživatel 2"
          },
          {
            id: 3,
            name: "Uživatel 3"
          }
    ],
    shoppingLists: [
        {
            id: 1,
            name: "Nákupní Seznam 1",
            ownerId: 1,
            members: [1, 2],
            archived: false,
            items: [1, 2, 3]
          },
          {
            id: 2,
            name: "Nákupní Seznam 2",
            ownerId: 2,
            members: [2, 3],
            archived: true,
            items: [4, 5]
          },
          {
            id: 3,
            name: "Nákupní Seznam 3",
            ownerId: 1,
            members: [1, 3],
            archived: false,
            items: [6, 7]
          },
          {
            id: 4,
            name: "Nákupní Seznam 4",
            ownerId: 3,
            members: [3],
            archived: false,
            items: [8, 9]
          },
          {
            id: 5,
            name: "Nákupní Seznam 5",
            ownerId: 1,
            members: [1, 2],
            archived: true,
            items: [10, 11]
          },
          {
            id: 6,
            name: "Nákupní Seznam 6",
            ownerId: 2,
            members: [2, 3],
            archived: false,
            items: [12, 13]
          },
          {
            id: 7,
            name: "Nákupní Seznam 7",
            ownerId: 1,
            members: [1],
            archived: false,
            items: [14, 15]
          },
          {
            id: 8,
            name: "Nákupní Seznam 8",
            ownerId: 3,
            members: [3],
            archived: true,
            items: [16, 17]
          },
          {
            id: 9,
            name: "Nákupní Seznam 9",
            ownerId: 1,
            members: [1, 2],
            archived: false,
            items: [18, 19, 20]
          }
    ],
    items: [
        {
            id: 1,
            name: "Mléko",
            shoppingListId: 1,
            resolved: false
          },
          {
            id: 2,
            name: "Chléb",
            shoppingListId: 1,
            resolved: true
          },
          {
            id: 3,
            name: "Voda",
            shoppingListId: 2,
            resolved: false
          },
          {
            id: 4,
            name: "Rajčata",
            shoppingListId: 3,
            resolved: false
          },
          {
            id: 5,
            name: "Sýr",
            shoppingListId: 3,
            resolved: true
          },
          {
            id: 6,
            name: "Rýže",
            shoppingListId: 4,
            resolved: false
          },
          {
            id: 7,
            name: "Káva",
            shoppingListId: 4,
            resolved: false
          },
          {
            id: 8,
            name: "Čaj",
            shoppingListId: 5,
            resolved: false
          },
          {
            id: 9,
            name: "Ovoce",
            shoppingListId: 5,
            resolved: true
          },
          {
            id: 10,
            name: "Pepř",
            shoppingListId: 6,
            resolved: false
          },
          {
            id: 11,
            name: "Sůl",
            shoppingListId: 6,
            resolved: true
          },
          {
            id: 12,
            name: "Máslo",
            shoppingListId: 7,
            resolved: false
          },
          {
            id: 13,
            name: "Těstoviny",
            shoppingListId: 7,
            resolved: false
          },
          {
            id: 14,
            name: "Džem",
            shoppingListId: 8,
            resolved: false
          },
          {
            id: 15,
            name: "Mouka",
            shoppingListId: 8,
            resolved: false
          },
          {
            id: 16,
            name: "Kondenzované mléko",
            shoppingListId: 9,
            resolved: false
          },
          {
            id: 17,
            name: "Olej",
            shoppingListId: 9,
            resolved: false
          },
          {
            id: 18,
            name: "Jogurt",
            shoppingListId: 10,
            resolved: false
          },
          {
            id: 19,
            name: "Zelenina",
            shoppingListId: 10,
            resolved: true
          },
          {
            id: 20,
            name: "Pivo",
            shoppingListId: 11,
            resolved: false
          }
    ],
  };
  
  export const fetchData = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return mockData;
  };