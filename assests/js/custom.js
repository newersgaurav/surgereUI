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
});

$('.iFrame-height').each(function(){
    var spinner = $(this);
    var input = spinner.find('input[type="number"]');
    var btnUp = spinner.find('.increase');
    var btnDown = spinner.find('.decrease');
    var min = 0;

    btnUp.click(function() {
        if(input.val() === ""){
            var oldValue = min;
        }else{
            var oldValue = parseInt(input.val());    
        }
        var newVal = oldValue + 1;
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        if(input.val() === ""){
            var oldValue = min;
        }else{
            var oldValue = parseInt(input.val());    
        }
        if (oldValue === min) {
          var newVal = min;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
});

$('.iFrame-width').each(function(){
    var spinner = $(this);
    var input = spinner.find('input[type="number"]');
    var btnUp = spinner.find('.increase');
    var btnDown = spinner.find('.decrease');
    var min = 0;

    btnUp.click(function() {
        if(input.val() === ""){
            var oldValue = min;
        }else{
            var oldValue = parseInt(input.val());    
        }
        var newVal = oldValue + 1;
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        if(input.val() === ""){
            var oldValue = min;
        }else{
            var oldValue = parseInt(input.val());    
        }
        if (oldValue === min) {
          var newVal = min;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
});

$('.profile-img').click(function() {
    $('.profile-action-menu').toggleClass("display-none");
})