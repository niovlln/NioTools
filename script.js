
//ITEMS LIST
let items = [];
displayItems();
loadItemsFromLocalStorage();

function displayItems() {
    document.getElementById("items").innerHTML = items.join("<br>");
}

function loadItemsFromLocalStorage() {
    const savedItems = localStorage.getItem("savedItems");
    if (savedItems) {
        items = JSON.parse(savedItems);
        displayItems();
    }
}

//ADD ITEMS
let inputBox = document.getElementById("demo");

inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addItems();
    }
  });



function addItems() {
    const input = document.getElementById("demo").value.trim();
    if (input) {
        items.push(input);
        saveItemsToLocalStorage()
        displayItems();
        document.getElementById("demo").value = "";
    }
}

//SORT ITEMS
function sortItems() {
    const savedItems = localStorage.getItem("savedItems");

    if (savedItems) {
        items = JSON.parse(savedItems); // Parse the JSON string from local storage
        if (items.length > 1) {
            items.sort(); // Use the sort() method to sort the array (this will sort alphabetically for strings)
            localStorage.setItem("savedItems", JSON.stringify(items));
            displayItems();
        } else {
            alert("Not enough items to sort. Add more items first.");
        }
    }
}

//RANDOM ITEMS PICK 
function pickRandomItems() {
    if (items.length === 0 ) {
        alert("No Items Available");
    }
    else{
        const randomIndexItems = Math.floor(Math.random() * items.length);
    alert(items[randomIndexItems]);
    }
    
}

//SAVE ITEMS TO LOCAL STORAGE
function saveItemsToLocalStorage() {
    localStorage.setItem("savedItems", JSON.stringify(items));
}

//REMOVE ITEMS FROM LOCAL STORAGE
function removeItemsFromLocalStorage() {
    items = [];
    localStorage.removeItem("savedItems");
    displayItems();
}

//REMOVE LAST ITEM FROM LOCAL STORAGE
function removeLastItemsFromLocalStorage() {
    const savedItems = localStorage.getItem("savedItems");

    if (savedItems) {
        items = JSON.parse(savedItems); // Parse the JSON string from local storage
        if (items.length > 0) {
            items.pop(); // Use pop() method to remove the last item from the array
            localStorage.setItem("savedItems", JSON.stringify(items));
            displayItems();
        } else {
            alert("No items to remove.");
        }
    }
}

// Clock
setInterval(Clock,1000)

function Clock() {
    const clock = new Date();
    document.getElementById("clock").innerHTML = clock.toLocaleTimeString();
}

