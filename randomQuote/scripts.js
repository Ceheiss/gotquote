$("#btn").click(function(){
  $.ajax({
    method: "GET",
    url: "https://got-quotes.herokuapp.com/quotes",
    dataType: 'json'
  })
  .done(newQuote)
  .done(newAuthor)
  .fail(function(){
    alert("SOMETHING WENT WRONG!")
  })
  // Change background color with clicks
  var colorArray = [
    "linear-gradient(45deg, #333333, #dd1818)",
    "linear-gradient(45deg, #636363, #a2ab58)",
    "linear-gradient(45deg, #000046, #1cb5e0)",
    "linear-gradient(45deg, #007991, #78ffd6)",
    "linear-gradient(45deg, #eb5757, #000000)",
    "linear-gradient(45deg, #20002c, #cbb4d4)",
    "linear-gradient(45deg, #43c6ac, #191654)"
  ]
  
  var randomColor = Math.floor(Math.random() * colorArray.length);
  $("body").css("background", colorArray[randomColor]);
  $(".btn").css("background", colorArray[randomColor]); 
  $("fa-twitter").css("color", colorArray[randomColor]); 
});



function newQuote(data){
  var twitterQuote = data.quote;
  $("#quotes").text(twitterQuote);
  var array = twitterQuote.split(" ");
  twitterQuote = array.join("+");
  var completeQuote = "https://twitter.com/intent/tweet?text=" + twitterQuote + "+-+" + data.character;
  $("a").attr("href", completeQuote);
}

function newAuthor(data){
  $("#author").text(" - " + data.character);
}
