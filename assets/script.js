let del = function () {
    $('#delete-button-div').on('click', function () {
        var value = this.getAttribute('value');
  
   console.log(value);
    console.log('dfghjkl');
    sendResponse(value);
});
    function sendResponse(value) {
        $.ajax({
            type: 'post',
            url: '/delete',
            data: { items: value },
            success: function (data) {
                location.reload();
            }
        });

    }
}
del();