var apiURL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote';

function parseQuote(data) {

  $('#quote-body').text(data.quoteText);
  $('#quote-author').text('~'.concat(data.quoteAuthor));
  //twitter stuff
  var url = 'https://twitter.com/intent/tweet?text=';

  $('#tweet').attr('href', url.concat(data.quoteText));

}

function NewQuote() {
      $.ajax({
      url : apiURL,
      dataType : 'jsonp'
    });

    parseQuote(data);
}

NewQuote();
