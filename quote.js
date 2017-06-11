$(document).ready(getit);

function parseQuote(json){
  $("#quote").text("\" "+json.quoteText+"\"");
  if(json.quoteAuthor=="")
    $("#author").text("- Anonymous");
  else
   $("#author").text("- "+json.quoteAuthor);

  changefont(json.quoteText);
  settweetbutton(json.quoteText);

}

function changefont(quote){
  $("#quote").hide();
  $("#author").hide();

   var fonts = ["Aref Ruqaa", "Cormorant","Montserrat"];
  var qlen = quote.length;
  var curfont = fonts[qlen%fonts.length];


  $('#quote').css("font-family",curfont);

  $('#author').css("font-family",curfont);
  $('#tweet').css("font-family",curfont);
  $('button').css("font-family",curfont);
  $('#quote').fadeIn(1500);
  $('#author').fadeIn(1500);
  $('.btn').fadeIn(2500);
}

function settweetbutton(text) {
  $('#tweet').html("<a target=\"_blank\" href=\"https://twitter.com/home?status="+text+"\" title=\"Write\">Tweet</a>")
}

function getit(){
  $.ajax({
  url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote",
  dataType: "jsonp"
});
}
