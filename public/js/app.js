// *~* on page load *~* //
$(function(){
	getPhrases();
});	
	
// function pageLoad() {
//   // load foods
//   getPhrases();
//   // set event listeners
//   $("#new-phrase-form").on("submit", function(e){
//     // prevent form submission
//     e.preventDefault();
//     // post to phrases#create
//     $.post("/phrases", $(this).serialize())
//       .done(function(res){
//         // append new phrase to the page
//         getPhrases();
//         $("#new-phrase-form")[0].reset();
//       });
//   });
// }

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
} 	 	

// function deletePhrase(context){
// 	var phraseID = $(context).data()._id;
// 	$.ajax({
// 		url: '/phrases/' + phraseID;
// 		type: "DELETE",
// 		success: function(res){
// 			getPhrases();
// 		}
// 	});
// }   


