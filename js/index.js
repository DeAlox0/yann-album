var albums = $(".album");
$(albums).show();
var searchTerm = $(this).val().toLocateLowerCase()
$(document).ready(function() {
    $("#search").keyup(function() {

    });
});
albums.each(function() {
    if($(this).text().toLocateLowerCase().search(searchTerm) == -1){
        $(this).hide();
    }
});