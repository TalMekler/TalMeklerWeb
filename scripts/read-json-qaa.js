$(document).ready(function () {
    var qaa_wrapper = $("section.questions-and-answers .qaa-wrapper");
    $.ajax({
        dataType: "json",
        url: "/qaa.json",
     }).done(function(resp){
        for(var p in resp){
          if(!resp.hasOwnProperty(p)) continue;
          var question = resp[p].question;
          var answer = resp[p].answer;
          qaa_wrapper.html(qaa_wrapper.html() + "<div class='qaa'><div class='qaa__question'>" + question + "</div><div class='qaa__answer'>" + answer + "</div></div>");
        }
     });
});