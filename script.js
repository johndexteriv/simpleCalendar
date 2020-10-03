var jumbotronEl = document.getElementsByClassName('jumbotron');
var currentDayEl = document.getElementById('currentDay');
var containerEl = document.getElementsByClassName('container');
var buttonEl = document.querySelectorAll('button');
var textAreaEl = document.querySelectorAll('textarea');
// Variable for current date to be displayed at top of page
var m = moment().format('MMMM Do YYYY, h:mm:ss a');
var theCurrentDate = m.toString();
// Variable for hour format to be compared against hoursOfDay
var currentHour = moment().format("HH")
var currentHourString = currentHour.toString();
console.log('current hour', currentHourString);

// Function that displays current date in jumbotron
function displayCurrentDate() {
    $('#currentDay').append(theCurrentDate);
}

//Hours of day variable to be looped and attribute of 'hour' assigned to to textarea
var hoursOfDay = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

function renderCalendar() {
  // Create variable textAreaArray to reference individual textareas
    var textAreaArray = $('textarea');
    // Each loop for textAreaArray
    textAreaArray.each(function(i){
    // Applys an attr of hoursOfDay [i] named "hour" to "this" textAreaArray
    $(this).attr("hour", hoursOfDay[i]);
    // Create variable assignedHour to compare each "hour" against currentHourString
    var assignedHour = $(this).attr("hour");
        console.log(currentHour, assignedHour);
    // If else statements that add a class dependent on currentHourString vs assignedHour
    if (currentHourString < assignedHour) {
        console.log('in the future', assignedHour)
        $(this).addClass('future');
    } 
    else if (currentHourString === assignedHour) {
        console.log('in the present', assignedHour);
        isPastLoaded = true;
        $(this).addClass('present');
    } 
    else {
        console.log('In the past', assignedHour);
        $(this).addClass('past');
    };
    });
};
// Work on function to render events after storage.
function showCalendarEvents(){
var allEvents = localStorage.getItem('storedEvents');
console.log('these are the stored events', allEvents);
};
// Function to save stored events.
function saveCalendarEvents() {
   localStorage.setItem('storedEvents', JSON.stringify(storedEvents));
};
// Variable to push events into
var storedEvents = [];
// On click save button should push text area string into storedEvents
function submitEvents(){

    $('button').on("click", function(event){
    event.preventDefault();
    var addEvent = $.trim($(textAreaEl).val());
    console.log('the event', addEvent);

    if (addEvent === ""){
        return;
    }
    storedEvents.push(addEvent);

    saveCalendarEvents();
    });
};


function startCalendar() {
displayCurrentDate ();
renderCalendar();
submitEvents();

};

startCalendar();

