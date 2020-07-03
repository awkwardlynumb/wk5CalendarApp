//fill text in jumbotron with the date the user is viewing it

//make save button save the user's entry to local storage
// localStorage.setItem("name",customer's comment)
//the time block they're entering their appointment into should contribute to the "name" field of our local storage item
//possibly the value attribute of the form or button
//localStorage.setItem(timeWindow.value, name of event) assuming timeWindow is a variable linked to the specific time block their editing
//fill the appropriate text area on the webpage with its respective item in localStorage

const date = moment().format("MMMM Do YYYY");
const time = parseInt(moment().format("HH"));
console.log(date);
console.log(time);
$("#currentDay").text(date);

//use a for loop to create html for web page, will need to assign appropriate classes for bootstrap
//assign css styling by class for past, present and future time slots
for (let i = 7; i < 19; i++) {
  const timeSlotRow = $("<div>");
  console.log(timeSlotRow)
  timeSlotRow.addClass("row time-block");
  const hourBlock = $("<div>");
  hourBlock.addClass("col-md-1");
  const activitySpace = $("<textarea>");
  activitySpace.addClass("col-md-10");
  if (i < time) {
    activitySpace.addClass("past");
  } else if (i === time) {
    activitySpace.addClass("present");
  } else if (i > time) {
    activitySpace.addClass("future");
  }
  const saveBtn = $("<button>");
  saveBtn.addClass("saveBtn col-md-1");
  $(".container").append(timeSlotRow);
  timeSlotRow.append(hourBlock);
  timeSlotRow.append(activitySpace);
  timeSlotRow.append(saveBtn);
  if (i < 12 ) {
      hourBlock.text(i + "AM")
  } else if (i === 12) {
      hourBlock.text("12PM")
  } else if (i > 12) {
      hourBlock.text(i - 12 + "PM")
  }
}
