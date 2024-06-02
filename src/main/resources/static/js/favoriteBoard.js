$(document).ready(function () {
    $("#favoriteBoardForm").on("submit", function (event) {
        event.preventDefault();
        let boardId = $("#boardId").val();
        let username = $("#username").val();
        console.log(boardId);
        let dto = {
            boardId: boardId
        };

        $.ajax({
            url: '/api/v1/users/' + username + '/boards/favorites',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(dto),
            success: function(response) {
                $("#unfavoriteBoardForm").css("display", "block");
                $("#favoriteBoardForm").css("display", "none");
                console.log('Data sent successfully:', response.body);
            },
            error: function(error) {
                console.error('Error sending data:', error.responseJSON);
            }
        });

    });
});