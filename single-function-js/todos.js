var app = app || {};

app.add = function () {
    var userInput = $('#user-input').val();
    $('#user-input').val('');

    $('#todo-list').append($('<div>')
        .append($('<div>').html(userInput))
        .append($('<button>').html("Delete").on('click', function () {
            $(this).parent().remove();
        }))
    )
}