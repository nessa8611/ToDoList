var ToDo = {};  // create object
ToDo.tasks = [];
//document.getElementById("save-button").style.display = "active";
//Timestamp
function timeStamp() {
    // Create a date object with the current time
    var now = new Date();
    // Create an array with the current month, day and time
    var date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
    // Create an array with the current hour, minute and second
    var time = [now.getHours(), now.getMinutes(), now.getSeconds()];
    // Determine AM or PM suffix based on the hour
    var suffix = (time[0] < 12) ? "AM" : "PM";
    // Convert hour from military time
    time[0] = (time[0] < 12) ? time[0] : time[0] - 12;
    // If hour is 0, set it to 12
    time[0] = time[0] || 12;
    //if seconds and minutes are less than 10, add a zero
    for (var i = 1; i < 3; i++) {
        if (time[i] < 10) {
            time[i] = "0" + time[i];
        }
    };
    //returns unique timestamp every time use timestamp function
    //while (now === new Date()) {
    return date.join('/') + ' ' + time.join(':') + ' ' + suffix;
};

ToDo.create = function () {
    var job = document.getElementById("job").value;
    //Create Car (dot notation)
    var task = {};
    task.date = timeStamp();
    task.job = job;
    task.done = false;
    task.dateDone = "";
    ToDo.tasks.push(task);
    //clear form
    document.getElementById("job").value = "";
   
};

ToDo.read = function () {
    var holder = "";
    //get data from array
    for (var i in ToDo.tasks) {
        holder += '<tr>';
        holder += '<td>' + ToDo.tasks[i].date + '</td>';
        holder += '<td>' + ToDo.tasks[i].job + '</td>';
        holder += '<td>' + '<input type="checkbox" name="taskdone" onclick="ToDo.check(' + i + ');">' + '</td>';
        holder += '<td id=' + i + '>' + ToDo.tasks[i].dateDone + '<td>';
        holder += '<td>';
        holder += '<td>' + '<button class="btn btn-warning", onclick="ToDo.edit(' + i + ');">Update</button> &nbsp';
        holder += '</td>';
        holder += '</tr>';
        //output to table
    }
    document.getElementById("output").innerHTML = holder;
};

//when check box
ToDo.check = function (index, ischecked) {
    ToDo.tasks[index].done = true;
    ToDo.tasks[index].dateDone = timeStamp();
    document.getElementById(index).innerHTML = ToDo.tasks[index].dateDone;
    
    
};

//ToDo.edit = function (index) {
ToDo.edit = function (index) {


    ToDo.tasks[index].dateDone = "";
    document.getElementById(index).innerHTML = ToDo.tasks[index].dateDone;
};

//delete by re-writing empty string in the table
ToDo.delete = function () {
    document.getElementById("output").innerHTML = "";
    ToDo.tasks = []; //need to empty array so can create a new task from beginning
};