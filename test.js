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
