 // variables
 let currentTime;
 //An object that holds the hour and the note for that hour
 let masterNotes [{
     hour: 0900
     note:""
 },{
    hour: 1000
    note:""
},{
    hour: 1100
    note:""
},{
    hour: 1200
    note:""
},{
    hour: 1300
    note:""
},{
    hour: 1400
    note:""
},{
    hour: 1500
    note:""
},{
    hour: 1600
    note:""
},{
    hour: 1700zs
    note:""
}]

 //Function that grabs the current time and stores it in currentTime
 currentTime = dayjs().format("dddd, MMMM D");
 console.log(currentTime);
 $("#currentDay").text(currentTime);

 //A function that formats the current date and displays it in the heading row

 //function that renders the contents of the hours to the screen

 //For each loop

 //Save each hour's identifier in a data-hour field

 //A function that updates the Css colors for the hour divs to indicate past, present, future

 //A function called SaveNotes that first firnds the id of parent div of the save button which was clicked and overwrites the main object with that note and saves it to local storage



$(document).ready(function () {
 

  //Click listener on the saveNotes buttons and executes the save function
});
