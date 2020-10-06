$(document).ready(function () {
    // If nothing in localStorage, set savedEventsList to epmty array
    if (!localStorage.getItem("savedEventsList")){
        localStorage.setItem('savedEventsList', JSON.stringify([]));
    }
   
    // Variable for current date to be displayed at top of page
    var m = moment().format('MMMM Do YYYY, h:mm:ss a');
    var theCurrentDate = m.toString();
    // Variable for hour format to be compared against hoursOfDay
    var currentHour = moment().format("HH")
    var currentHourString = currentHour.toString();


    //Hours of day variable to be looped and attribute of 'hour' assigned to to textarea
    var hoursOfDay = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

    function renderCalendar() {
        //Displays current date to #currentDay div
        $('#currentDay').append(theCurrentDate);
        // Create variable textAreaArray to reference individual textareas
        var textAreaArray = $('textarea');
        // Each loop for textAreaArray
        textAreaArray.each(function (i) {
            // Applys an attr of hoursOfDay [i] named "hour" to "this" textAreaArray
            $(this).attr("hour", hoursOfDay[i]);
            // Create variable assignedHour to compare each "hour" against currentHourString
            var assignedHour = $(this).attr("hour");
            // If else statements that add a class dependent on currentHourString vs assignedHour
            if (currentHourString < assignedHour) {
                $(this).addClass('future');
            }
            else if (currentHourString === assignedHour) {
                $(this).addClass('present');
            }
            else {
                $(this).addClass('past');
            };
        });
    };

    
    // Click function for .saveBtn - traversed dom to locate div containing textarea
    $('.saveBtn').click(function () {

        
        //textAreasV traverses the dom to locate the parent div and then finds textarea
        var textAreasV = $(this).parent().parent().parent().find("textarea").val();
        //textAreaID traverses the dom to locate the parent div, finds textarea , and then sets attribute of id
        var textareaId = $(this).parent().parent().parent().find("textarea").attr("id");
        // console.log(textAreasV,textareaId)
        // parses saved events
        var savedEvents = localStorage.getItem("savedEventsList");
        savedEvents = JSON.parse(savedEvents);
        // pushes textAreasV & textareaID to savedEvents
        savedEvents.push(textAreasV, textareaId)
        // Saves item 'savedEventsList' as a string
        localStorage.setItem('savedEventsList', JSON.stringify(savedEvents));
        
   
       
    })


    // Function to displayText
    function displayText(){
        // Variable localStorageVal parses savedEventsList from localstorage
        var localStorageVal = JSON.parse(localStorage.getItem("savedEventsList"));
        // Loops through length of localStorageVal
        for(var i = 0; i < localStorageVal.length; i++){
            
            var val = localStorageVal[i];
            var destination = localStorageVal[i+1]
            // Applies the value of textarea(i) to the destination(i) attr
            $(`#${destination}`).val(val)
        }
    }

    // Runs function that displays calendar time and then renders classes to each text block based off time comparison.
    renderCalendar();
    // Runs function to display text saved in local storage
    displayText();    


});