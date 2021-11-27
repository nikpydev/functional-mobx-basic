// Create an array of objects {name: '', value: ''}
const DB_ITEMS = [
  {
    name: "name",
    value: "Nikhil",
  },
  {
    name: "email",
    value: "some email",
  },
  {
    name: "password",
    value: "secure password",
  },
  {
    name: "password_confirmation",
    value: "secure password confirmed",
  },
  {
    name: "phone",
    value: "a mobile phone number",
  },
  {
    name: "address",
    value: "home address",
  },
  {
    name: "city",
    value: "pink city",
  },
];

export const getAllDBItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DB_ITEMS);
    }, 5000);
  });
};

export const getDBItemByName = (dbItemName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DB_ITEMS.find((item) => item.name === dbItemName));
    }, 3000);
  });
};
