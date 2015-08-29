// *~* on page load *~* //
$(function(){
	getPhrases();
});	
	
function getPhrases() {
  $.get("/phrases", function(res){
  	var dunePhrases = JSON.parse(res);
  	console.log(dunePhrases);
  	renderPhrases(dunePhrases);
  });
}

function renderPhrases(dunePhrases){
	template = _.template($('#phrase-template').html());
	phraseItems = dunePhrases.map(function(phrase){
		return template(phrase);
	});
	$('#phrase-div').html('');
	$('#phrase-div').append(phraseItems);
	console.log('doing it');
} 	 	   




