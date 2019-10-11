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

$(".login-form .eye-icon").click(function (){
    $(".login-form .eye-icon").toggleClass("eye-icon-change");
    if($(".login-form .pwd-input").attr("type")==="password"){
        $(".login-form .pwd-input").attr("type","text");
    }
    else{
        $(".login-form .pwd-input").attr("type","password");
    }
})

$(".password-field .eye-icon").click(function (){
    $(".password-field .eye-icon").toggleClass("eye-icon-change");
    if($(".password-field input").attr("type")==="password"){
        $(".password-field input").attr("type","text");
    }
    else{
        $(".password-field input").attr("type","password");
    }
})

function increase(id){
    console.log("Entry 1");
    var count;
    var val = $('#' + id + ' .' + id + '-value').attr("value");
    console.log(val);
    if( val === "Height" || val === "Width"){
        count = 0;
        console.log("Entry 2");
    }
    else{
        count = val;
        console.log("Entry 2");
    }
    count = parseInt(count) + 1;
    $('#' + id + ' .' + id + '-value').attr("value", count);
    $('#' + id + ' .' + id + '-value').html(count);
}

function decrease(id){
    var count;
    var val = $('#' + id + ' .' + id + '-value').attr("value");
    if( val === "Height" || val === "Width"){
        count = 0;
    }
    else{
        count = val;
    }
    count = parseInt(count) - 1;
    if(count < 0){
        count = 0;
    }
    $('#' + id + ' .' + id + '-value').attr("value", count);
    $('#' + id + ' .' + id + '-value').html(count);
}