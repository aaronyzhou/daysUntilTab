function onLoad() {
    var saveButton = document.getElementById("save");
    var dateInput = document.getElementById("goalDate");

    var currGoalDate = localStorage["goalDate"];
    if(currGoalDate) {
        currGoalDate = new Date(currGoalDate);   
        dateInput.valueAsDate = currGoalDate;
    }


    saveButton.onclick = save;
}

function save() {
    var dateInput = document.getElementById("goalDate");
    var d = dateInput.value;
    console.log(d);
    var goalDate = new Date(d);
    console.log(goalDate);
    localStorage["goalDate"] = goalDate;
}

window.onload = function() {
    onLoad();
}