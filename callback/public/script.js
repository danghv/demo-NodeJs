$(document).ready(() => {
    $.ajax({
        type: 'GET',
        url: 'api/a.json',
        success: function(data){
            console.log(data)
        },
        error: function(jqXHR, textStatus, error) {
            console.log(error)
        }
    })
    
})