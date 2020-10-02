var jumbotronEl = document.getElementsByClassName('jumbotron');
var currentDayEl = document.getElementById('currentDay');
var containerEl = document.getElementsByClassName('container');

var theCurrentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

// Function that displays current date in jumbotron
function displayCurrentDate() {
    $('#currentDay').append(theCurrentDate);
    console.log('this should be the current date', displayCurrentDate);
}

var hoursOfDay = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

function renderCalendar() {

};

function startCalendar() {
displayCurrentDate ();
renderCalendar();

};

startCalendar();

