console.log("Signup frontend javascript file");

$(function() {
    const fileTarget = $(".file-box .upload-hidden");
    let filename;

    fileTarget.on("change", function(){
      if(window.FileReader) {
        const uploadFile = $(this)[0].files[0];
        console.log("uploadFile: " , uploadFile)
        const fileType = uploadFile["type"];
        const validImageType = ["image/jpg", "image/jpeg", "image/png"];
        if(!validImageType.includes(fileType)){
            alert("Please upload only jpeg, jpg and png image formats");
            
        } else {
            if(uploadFile) {
               console.log(URL.createObjectURL(uploadFile));
               $(".upload-img-frame")
               .attr("src", URL.createObjectURL(uploadFile))
               .addClass("success");
            }
            filename = $(this)[0].files[0].name;
        }

        $(this).siblings(".upload-name").val(filename); 
      }
    });
});


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



   const memberImage = $(".member-image").get(0).files[0] ? $(".member-image").get(0).files[0].name 
   : null; 

   if(!memberImage) { 
    alert("Please insert image");
    return false;
   }    

}