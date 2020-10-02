var jumbotronEl = document.getElementsByClassName('jumbotron');
var currentDayEl = document.getElementById('currentDay');
var containerEl = document.getElementsByClassName('container');
var buttonEl = document.querySelectorAll('button');

var m = moment().format('MMMM Do YYYY, h:mm:ss a');
var theCurrentDate = m.toString();
console.log(theCurrentDate);

var currentHour = moment().format("H")
var currentHourString = currentHour.toString();
console.log('current hour', currentHourString);

var textAreaEl = document.querySelectorAll('textarea');
console.log('these are text areas', textAreaEl);




// Function that displays current date in jumbotron
function displayCurrentDate() {
    $('#currentDay').append(theCurrentDate);
}

var hoursOfDay = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

function renderCalendar() {
// ??? Console Logs Correctly but always sets last class ???
    for (i = 0; i < hoursOfDay.length; i++){
    $('textarea').attr("hour", hoursOfDay[i]);
    var assignedHour = $('textarea').attr("hour");

    if (currentHourString > assignedHour) {
        console.log('in the past', assignedHour)
        
        $('textarea').addClass('past');
       
    } 
    else if (currentHourString === assignedHour) {
        console.log('in the present', assignedHour);
        $('textarea').addClass('present');
        
    } 
    else {
        console.log('In the future', assignedHour);
        $('textarea').addClass('future');
    }

    };
};
    


function startCalendar() {
displayCurrentDate ();
renderCalendar();

};

startCalendar();

