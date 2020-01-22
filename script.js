$(document).ready(function() {
  $("#currentDate").append(moment().format("dddd, MMMM Do"));

  var nineVal = localStorage.getItem("task9", nineVal);
      $("#task9").val(nineVal);

  $("#save9").click(function() {
    nineVal = $("#task9").val();
    localStorage.setItem("task9", nineVal);
  });
  $("#save10").click();
  $("#save11").click();
  $("#save12").click();
  $("#save1").click();
  $("#save2").click();
  $("#save3").click();
  $("#save4").click();
  $("#save5").click();

})