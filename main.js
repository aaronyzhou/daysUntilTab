function loadOptions() {
    var goalDate = localStorage["goalDate"];

    if(goalDate) {
        goalDate = new Date(goalDate);
    } else {
        goalDate = new Date();
    }
    
    console.log(goalDate);

    var currentDate = new Date();

    console.log(currentDate);

    var diff =  Math.floor(( goalDate - currentDate ) / 86400000); 

    console.log(goalDate - currentDate);

	var mainDiv = document.getElementById("main");
    mainDiv.innerText = diff+" days left";
}

window.onload = function(event) {
    loadOptions();
}