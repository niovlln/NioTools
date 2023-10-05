// CAR 
const car = {
    model: ["toyota" , "suzuki", "mitsubisi"],
    color: ["red", "white" , "black"],
    fullDetail : function() {
        return this.model[2] + " " + this.color[2];
    }
}

function showCarDetail() {
document.getElementById("demo").innerHTML = car.fullDetail();
}


// POINTS 
let points = {
    score: 0,
    updateScore : function(){
        return points.score += 1;
    }
}

function addPoints() {
    document.getElementById("demo").innerHTML = points.updateScore();
}



//USERNAME LIST
let usernames = [];
displayUsernames();
loadUsernamesFromLocalStorage();

function displayUsernames() {
    document.getElementById("usernames").innerHTML = usernames.join("<br>");
}

function loadUsernamesFromLocalStorage() {
    const savedUsernames = localStorage.getItem("savedUsernames");
    if (savedUsernames) {
        usernames = JSON.parse(savedUsernames);
        displayUsernames();
    }
}

//ADD USERNAME
function addUsername() {
    const input = document.getElementById("demo").value.trim();
    if (input) {
        usernames.push(input);
        saveUsernamesToLocalStorage()
        displayUsernames();
        document.getElementById("demo").value = "";
    }
}

//SORT USERNAME
function sortUsername() {
    usernames.sort();
    displayUsernames();
}

//RANDOM USERNAME PICK 
function pickRandomUsername() {
    if (usernames.length === 0 ) {
        alert("No Username Available");
    }
    else{
        const randomIndexUsername = Math.floor(Math.random() * usernames.length);
    alert(usernames[randomIndexUsername]);
    }
    
}
//SAVE USERNAMES TO LOCAL STORAGE
function saveUsernamesToLocalStorage() {
    localStorage.setItem("savedUsernames", JSON.stringify(usernames));
}
//REMOVE USERNAMES FROM LOCAL STORAGE
function removeUsernamesFromLocalStorage() {
    usernames = [];
    localStorage.removeItem("savedUsernames");
    displayUsernames();
}

// Clock
setInterval(Clock,1000)

function Clock() {
    const clock = new Date();
    document.getElementById("clock").innerHTML = clock.toLocaleTimeString();
}

