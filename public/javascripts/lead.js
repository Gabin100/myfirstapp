
function deletelead(leadID) {
    $.ajax({
        url:'/lead/' + leadID + '/delete-json',
        contenttype: 'application/json; charset=utf-8',
        data: JSON.stringify({leadID}),
        type: 'POST',
        success: ((res) => {
            // Reaplace the button with unfollow.
            console.log("result: ", res);
            $("#"+leadID).remove();
        }),
        error: ((error) =>{
            console.log("Error: ", error);
        })
        
    });
}