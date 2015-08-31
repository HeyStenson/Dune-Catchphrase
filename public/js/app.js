// *~* on page load *~* //
$(function(){
	pageLoad();
});	
	
function pageLoad() {
  // load foods
  getPhrases();
  // set event listeners
  $("#new-phrase-form").on("submit", function(e){
    // prevent form submission
    e.preventDefault();
    // post to phrases#create
    $.post("/phrase", $(this).serialize())
      .done(function(res){
        // append new phrase to the page
        getPhrases();
        $("#new-phrase-form")[0].reset();
      });
  });
}

function getPhrases() {
  $.get("/phrase", function(res){
  	var dunePhrases = res;
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

// function updatePhrase(){
//   $('#update-phrase-button').click(function(e){
//     e.preventDefault();
//   });
//   var phraseDef = $('#update-phrase-field').val();
//   $.ajax({
//     url: '/phrase/',
//     type: 'PUT',
//     data: phraseDef, 
//     success: function(res){
//       getPhrases();
//     }
//   });
// } 	

function deletePhrase(context){
	var phraseID = $(context).data()._id;
	$.ajax({
		url: '/phrase/' + phraseID,
		type: "DELETE",
		success: function(res){
			getPhrases();
		}
	});
}   


