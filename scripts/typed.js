$(document).ready(function () {
    var texts = [
        "דפי נחיתה",
        "גלריות",
        "תיקי עבודות",
        "אתרי תדמית"
    ]
    var count = 0;
    var index = 0;
    var current_text = "";
    var letter = "";

    function type() {
        if(count == texts.length){
            count = 0;
        }
        current_text = texts[count];
        letter = current_text.slice(0, index);
        index += 1;

        $("#typed").text(letter);
        if(letter.length == current_text.length){
            setTimeout(function() {
                count += 1;
                index = 0;
            }, 750);
        }
    }
    setInterval(function () {
        type();
    }, 50);
});