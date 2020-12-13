// variables
let currentTime;
//An object that holds the hour and the note for that hour
let masterNotes = [
  {
    hour: 0900,
    note: " ",
  },
  {
    hour: 1000,
    note: "",
  },
  {
    hour: 1100,
    note: "",
  },
  {
    hour: 1200,
    note: "",
  },
  {
    hour: 1300,
    note: "",
  },
  {
    hour: 1400,
    note: "",
  },
  {
    hour: 1500,
    note: "",
  },
  {
    hour: 1600,
    note: "",
  },
  {
    hour: 1700,
    note: "",
  },
];

//Function that grabs the current time and stores it in currentTime
//A function that formats the current date and displays it in the heading row
currentTime = dayjs().format("dddd, MMMM D");
$("#currentDay").text(currentTime);

//Write a function that grabs from local storage and puts it on screen
$("input").each(function () {
  $(this).val(localStorage.getItem($(this).data("hour")));
});

//function that renders the contents of the hours to the screen

//For each loop

//Save each hour's identifier in a data-hour field

//A function that updates the Css colors for the hour divs to indicate past, present, future

function hourColors() {
  //get the day.js time
  let currentHour = dayjs().format("HH");

  //Loop through the div class'container' and
  $("input").each(function () {
    //Delete the incorrect classes
    // console.log($(this).data("hour"));
    //at each div's input, read the data field.
    //compare it to the current time with .diff
    //If it's in the past, mark it gray
    //if it's in the present, red
    //if it's in the future, green
    let hour = $(this).data("hour");
    // console.log($(this).parents().eq(3));
    if (hour < currentHour) {
      $(this).parents().eq(2).removeClass("future present").addClass("past");
    }
    if (hour == currentHour) {
      $(this).parents().eq(2).removeClass("future past").addClass("present");
    }
    if (hour > currentHour) {
      $(this).parents().eq(2).removeClass("present past").addClass("future");
    }
  });
}
//A function called SaveNotes that first firnds the id of parent div of the save button which was clicked and overwrites the main object with that note and saves it to local storage
$("button").on("click", function () {
  var note = $(this).siblings(".col-6").find("input").val();
  var hour = $(this).siblings(".col-6").find("input").data("hour");
  console.log(`Note ${note} Hour ${hour}`);
  localStorage.setItem(hour, note);
});

$(document).ready(function () {
  hourColors();
  //Click listener on the saveNotes buttons and executes the save function
});
