$(document).ready(function () {
    // Check If Mobile Or Not -> Mobile = Width Under 1400px
    var mobile;
    if($(document).width() < 999){
        mobile = true;
    }else{
        mobile = false
    }
    $(document).scroll(function(){ 
        if($(document).width() < 999){
            mobile = true;
        }else{
            mobile = false;    
        }
    });

    // Side Bar - Open And Close
    $("#bars-btn").click(function () { 
        $("#open-bar").show();
        if(mobile == false){
            setTimeout(function(){
                $("#open-bar").css("right", "0");
            }, 100)
        }else{
            $("#open-bar").css("right", "");
        }
    });
    $("#close-bar-btn").click(function() {
        if(mobile == false){
            $("#open-bar").css("right", "-250px");
            setTimeout(function(){$("#open-bar").hide();}, 500);
        }else{
            $("#open-bar").hide();
        }
    });
    $(".bar-link").click(function() {
        if(mobile == false){
            $("#open-bar").css("right", "-250px");
        }
        setTimeout(function(){$("#open-bar").hide();}, 500);
    });
    
    

    // Contact Div - Open And Close
    $(".conatct-btn").click(function() {
        $("#open-contact-us").show(500);
        $(".input-field").val("");
        $(".input-title").each(function() {
            $(this).css("top", "30px");
            $(this).css("left", "10px");
            $(this).css("color", "#636363");
            $(this).css("font-size", "1.2rem");
          });
    });
    $("#close-contact-us-div").click(function(){
        $("#open-contact-us").hide(500);
    });

    // Inputs - Open Contact Div
    $(".input-field").focus(function () { 
        var name = $(this).attr("name");
        var lableId = "#input-"+name;
        $(lableId).css("top", "5px");
        $(lableId).css("left", "0");
        $(lableId).css("color", "#009999");
        $(lableId).css("font-size", "1rem");
    });
    $(".input-field").focusout(function () { 
        $(".input-field").each(function() {
            var val = $(this).val();
            if(val == ""){
                var name = $(this).attr("name");
                var lableId = "#input-"+name;
                $(lableId).css("top", "30px");
                $(lableId).css("left", "10px");
                $(lableId).css("color", "#636363");
                $(lableId).css("font-size", "1.2rem");
            }
          });

    });

    // open Contact Us - ::After Controller
    $(".input-div input").focus(function () { 
        var p = $(this).parent()
        console.log(p);
        $(p).addClass("active-input");    
    });

    $(".input-div input").focusout(function () { 
        var p = $(this).parent()
        console.log(p);
        $(p).removeClass("active-input");    
    });
    
});