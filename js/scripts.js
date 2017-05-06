$(document).ready(function() {
  $("#fact-button").click(function() {
    $("#cat-list").append("<li class='cat-item'>" + $("#cat-fact").val() + "</li>");
    $("#cat-fact").val("");
  })
})
