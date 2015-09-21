var

$(document).ready(function() {
  $("form#addressbook").submit(function(event) {
    var names = ($("input#name").val());
    $(".complete").text(name);


     $("#result").show();
    event.preventDefault();
   });
});
