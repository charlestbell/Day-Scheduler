let currentTime;
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

currentTime = dayjs().format("dddd, MMMM D");
$("#currentDay").text(currentTime);

//Display all reminders from locals storage
$("input").each(function () {
  $(this).val(localStorage.getItem($(this).data("hour")));
});

function hourColors() {
  let currentHour = dayjs().format("HH");
  $("input").each(function () {
    let hour = $(this).data("hour");
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
//When save button is clicked, save the corrresponding reminder to local storage
$("button").on("click", function () {
  var note = $(this).siblings(".col-6").find("input").val();
  var hour = $(this).siblings(".col-6").find("input").data("hour");
  console.log(`Note ${note} Hour ${hour}`);
  localStorage.setItem(hour, note);
});

$(document).ready(function () {
  hourColors();
});
