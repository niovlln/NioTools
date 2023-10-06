
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
    items.sort();
    displayItems();
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

// Clock
setInterval(Clock,1000)

function Clock() {
    const clock = new Date();
    document.getElementById("clock").innerHTML = clock.toLocaleTimeString();
}

