const { relativeTimeRounding } = require("moment");

console.log("Signup frontend javascript file");

$(function() {});


function validateSignupForm() {
  
   const memberNick = $(".member-nick").val();
   const memberPhone = $(".member-phone").val();
   const memberPassword = $(".member-password").val();
   const confirmPassword = $(".confirm-password").val();
    

   if(
    memberNick === "" ||
    memberPhone === "" ||
    memberPassword === "" ||
    confirmPassword === ""
   ) {

    alert("Please insert all required inputs");
    return false;
   }

   if(memberPassword !== confirmPassword) { 
    alert("Passwords do not match, Please check your password");
    return false;
   } 
}