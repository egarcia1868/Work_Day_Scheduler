var currentHour = moment().format("H");
// console.log(currentHour)

for (var hour = 9; hour < 18; hour++) {
  console.log(hour);
  if (currentHour == hour) {
    document.querySelector(`#task${hour}`).classList.remove("future");
    document.querySelector(`#task${hour}`).classList.add("present");
  }
  if (currentHour > hour) {
    document.querySelector(`#task${hour}`).classList.remove("future");
    document.querySelector(`#task${hour}`).classList.add("past");
  }
}

$(document).ready(function() {
  $("#currentDate").append(moment().format("dddd, MMMM Do"));

  var nineVal = localStorage.getItem("task9", nineVal);
      $("#task9").val(nineVal);

  var tenVal = localStorage.getItem("task10", tenVal);
      $("#task10").val(tenVal);

  var elevenVal = localStorage.getItem("task11", elevenVal);
      $("#task11").val(elevenVal);

  var twelveVal = localStorage.getItem("task12", twelveVal);
      $("#task12").val(twelveVal);

  var oneVal = localStorage.getItem("task1", oneVal);
      $("#task1").val(oneVal);

  var twoVal = localStorage.getItem("task2", twoVal);
      $("#task2").val(twoVal);

  var threeVal = localStorage.getItem("task3", threeVal);
      $("#task3").val(threeVal);

  var fourVal = localStorage.getItem("task4", fourVal);
      $("#task4").val(fourVal);

  var fiveVal = localStorage.getItem("task5", fiveVal);
      $("#task5").val(fiveVal);

  $("#save9").click(function() {
    nineVal = $("#task9").val();
    localStorage.setItem("task9", nineVal);
  });

  $("#save10").click(function() {
    tenVal = $("#task10").val();
    localStorage.setItem("task10", tenVal);
  });

  $("#save11").click(function() {
    elevenVal = $("#task11").val();
    localStorage.setItem("task11", elevenVal);
  });

  $("#save12").click(function() {
    twelveVal = $("#task12").val();
    localStorage.setItem("task12", twelveVal);
  });

  $("#save1").click(function() {
    oneVal = $("#task1").val();
    localStorage.setItem("task1", oneVal);
  });

  $("#save2").click(function() {
    twoVal = $("#task2").val();
    localStorage.setItem("task2", twoVal);
  });

  $("#save3").click(function() {
    threeVal = $("#task3").val();
    localStorage.setItem("task3", threeVal);
  });

  $("#save4").click(function() {
    fourVal = $("#task4").val();
    localStorage.setItem("task4", fourVal);
  });

  $("#save5").click(function() {
    fiveVal = $("#task5").val();
    localStorage.setItem("task5", fiveVal);
  });

})