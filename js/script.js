// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// assign button
const assignButton = document.querySelector(".assign");
// assign menu items
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  // console.log(guest);
  if (guest !== "") {
    addToList(guest);
    //console.log(guestList);
  }
  clearInput();

  updateGuestCount();
});

// Clear input field
const clearInput = function () {
  guestInput.value = "";
};

// Adding guest to list
const addToList = function (guest) {
  // console.log(guest);
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

//Limit the number attending
const updateGuestCount = function () {
  let guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  // console.log(guestCount);
  // limiter follows
  if (guests.length === 8) {
    // Once 8 reached, change the below properties
    addGuestButton.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  // list of items for guests to bring
  let potluckItems = [
    "Bologna Sandwich's",
    "Dillpickel Chips",
    "Lemonaide",
    "Baked Beans",
    "Fried Onion Rings",
    "Burger Buns",
    "Soft Drinks",
    "Sweet and Sour Pickels",
    "Potatoe Salad",
    "3 Bean Salad",
    "Macaroni Salad",
    "Fruit Salad",
    "Banana Creme Pie",
    "Marbled Cake",
    "Cookies - Variety",
    "Orange cotton Candy",
    "Cheesy Mashed Potatoes",
    "Doritos"
  ];