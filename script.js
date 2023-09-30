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
const usernames = [];
displayUsernames();

function displayUsernames() {
    document.getElementById("usernames").innerHTML = usernames.join("<br>");
}


//ADD USERNAME
function addUsername() {
    const input = document.getElementById("demo").value.trim();
    if (input) {
        usernames.push(input);
        displayUsernames();
        document.getElementById("demo").value = "";
    }
}

//SORT USERNAME
function sortUsername() {
    usernames.sort();
    displayUsernames();
}

// Clock
setInterval(Clock,1000)

function Clock() {
    const clock = new Date();
    document.getElementById("clock").innerHTML = clock.toLocaleTimeString();
}

