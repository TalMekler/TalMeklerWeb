$(document).ready(function () {
    var typing_text_span = $("#typed");
    var texts = [
        "דפי נחיתה",
        "גלריות",
        "תיקי עבודות",
        "אתרי תדמית"
    ]
    var typing_delay = 75;
    var delete_delay = 25;
    var newText_delay = 1250;
    var text_index = 0;
    var ch_index = 0;

    function type() {
        if(ch_index < texts[text_index].length+1){
            typing_text_span.text(texts[text_index].slice(0, ch_index));
            ch_index += 1;
            setTimeout(type, typing_delay);
        }else{
            setTimeout(deleteText, newText_delay);
        }
    }
    function deleteText() {
        if (ch_index > 0){
            typing_text_span.text(texts[text_index].slice(0,ch_index-1));
            ch_index -= 1;
            setTimeout(deleteText, delete_delay);
        }else{
            text_index += 1;
            if (text_index >= texts.length){
                text_index = 0;
                ch_index = 0;
            }
            setTimeout(type, newText_delay);
        }
    }

    setTimeout(type, 2000);
});