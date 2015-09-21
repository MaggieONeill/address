$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var inputtedAddress = $("input#new-address").val();
    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName,
      address: inputtedAddress };

    $("ul#contacts").append("<li><span class='contact'"> + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");

  });
});
