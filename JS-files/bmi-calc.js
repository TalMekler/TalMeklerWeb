function bmiCalc(){
    // alert('work');
    var Lheight = document.getElementById('height').value;
    var Lweight = document.getElementById('weight').value;
    var error_msg = document.getElementById('error-msg');
    var div_res = document.getElementById('bmi-res');

    if(Lweight.length == 0 || Lheight.length == 0){
        error_msg.style.padding = '10px';
        error_msg.style.textAlign = 'center';
        error_msg.style.background = 'tomato';
        error_msg.innerHTML = 'Please Fill The Parameters';
        error_msg.style.letterSpacing = '1px';

        div_res.innerHTML = "";
        div_res.style.background = 'transparent';
        div_res.style.color = 'black';
        return false;
    }
    
    var height, weight;
    height = parseFloat(Lheight);
    if(height > 3){
        height = height / 100;
    }
    weight = parseFloat(Lweight);

    height = height * height;


    var res = weight / height;
    res = Math.round(res);

    var text = 'Your BMI is: ' + res;

   

    div_res.innerHTML = text;
    div_res.style.background = 'tomato';
    div_res.style.color = 'black';
    return false;

    
}

function checkValue(){
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var error_msg = document.getElementById('error-msg');

    if (isNaN(height) || isNaN(weight)){
        error_msg.style.padding = '10px';
        error_msg.style.textAlign = 'center';
        error_msg.style.background = 'tomato';
        error_msg.innerHTML = 'Please Input Only Numbers';
        return false;
    }
    else{
        error_msg.style.padding = '0px';
        error_msg.style.textAlign = 'center';
        error_msg.style.background = 'transparent';
        error_msg.innerHTML = '';
    }

}   