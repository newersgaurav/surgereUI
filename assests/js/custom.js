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
    $('.' + id2).css("color","#083255");
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

$('.height-value').change(function(event){
    console.log("entry");
    var val = event.target.value;
    $('.height-value').attr("value",val);
    console.log(val);
    console.log($('.height-value').attr("value"));
})

function increase(id,event){
    console.log("entry");
    var count;
    var val = $('#' + id + ' .' + id + '-value').attr("value");
    console.log(val);
    if( val === "" || val === "0"){
        count = 0;
    }
    else{
        count = val;
    }
    count = parseInt(count) + 1;
    console.log(count);
    $('#' + id + ' .' + id + '-value').attr("value",count);
    console.log($('#' + id + ' .' + id + '-value').attr("value"));
}

function decrease(id){
    var count;
    var val = $('#' + id + ' .' + id + '-value').attr("value");
    if( val === "" || val === "0"){
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
}

$('.profile-img').click(function() {
    $('.profile-action-menu').toggleClass("display-none");
})