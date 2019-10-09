function toggleDropdown(id1, id2){
    $('#' + id1 + ' .' + id2 + ' ul').toggleClass("display-none");
    $('#' + id1 + ' .' + id2 + ' .dropdown-icon').toggleClass('rotate');
}

function dropdownAction(id1 , id2 , event , ele_id){
    event.stopPropagation();
    $('#' + id1 + ' .' + id2 + ' ul').addClass("display-none");
    var val = $('#' + id1 + ' .' + id2 + ' ul #' + ele_id).attr("value");
    console.log($('#' + id1 + ' .' + id2 + ' ul #' + ele_id));
    $('#' + id1 + ' .' + id2 + ' span strong').html(val);
    $('#' + id1 + ' .' + id2 + ' .dropdown-icon').removeClass('rotate');
}