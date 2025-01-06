console.log("Users frontend javascript file");

$(function () {
    $(".member-status").on("change", function(e) {
        const id = e.target.id;
        console.log("id", id);

        const memberStatus = $(`#${id}.member-status`).val();
        console.log("memberStatus", memberStatus);


          //TODO: Axios updateChosenUser Rest APi
        axios
            .post(`/admin/user/edit`, {
            _id: id,
            memberStatus: memberStatus,
        })
        .then(response => {
        console.log("Response", response);
        const result = response.data; //backendan yuborilgan object 
        console.log("result", result);

        if(result.data) {
            console.log("User status updated successfully");
            $(`.member-status`).blur(); //blur qilmasak u o'sha active holida focus bolib turadi
        } else {
            alert("Failed to update user status");
        }

        }).catch(err => {
            console.log("Error", err);
            alert("Failed to update user status");  
        })
    });
});