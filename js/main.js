// ------Toggle Nav---------
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// ------Validation---------

$(document).ready(function () {

  $('#myform').validate({ 
    rules: {
            address: "required",
            city: "required",
            state: "required",
            phone: "required",
            email: {
              required: true,
              email: true
            },
            zCode: {
              required: true,
              maxlength: 5,
              digits:true
            }
          },
          messages: {
            address: "*",
            city: "*",
            state: "*",
            zCode: {
              maxlength: "Your zip code must be at most 5 numbers long"
            },
          },
          submitHandler: function(form) {
            form.submit();
          }
});
})