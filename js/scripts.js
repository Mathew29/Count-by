$(document).ready(function() {
  $("#theForm").submit(function(event) {
      var numberTo = parseInt($("#numberTo").val());
      var numberBy = parseInt($("#numberBy").val());
      countBy(numberTo, numberBy);
      event.preventDefault();
  });
});

var countBy = function(countTo, countBy) {
  for(var sum = countBy; sum <= countTo; sum+=countBy) {
    console.log(countTo + " " + countBy);
    $(".output").append("<li>" + sum + "</li>");
  }
}
