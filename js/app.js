$(document).ready(function() {

const gameStuff = [
    // First Category
    {
        givenAnswer: "This is the color of the rain in the famed Prince album.",
        choices: ['Gurple', 'Whorple', 'Purple', 'Acid'],
        rightChoice: 'Purple',
        tileValue: 100
    },
    {
        givenAnswer: "This is the color of the loveable dinosaur Barney.",
        choices: ['Shurple', 'Purple', 'Puke', 'Nurple'],
        rightChoice: 'Purple',
        tileValue: 100
    },
]

let playerScore = 0



// Remove Element after click
$(".tile").on('click', function(event) {
    $(event.target).remove();
});





 $('#closesubmit').on('click', function(event) {
     console.log('Submit was clicked')

    $('#myModal').modal("hide");
})
 // Get question info from array, prepare
const gatherInfo = function (question) {
   let $buttonDiv = $('<div class="btn-group" data-toggle="buttons"></div>');
   question.choices.forEach(function(choice) {
     let $div = $('<div class="radio">');
     let $label = $('<label class="btn btn-primary"></label>');
     let $input = $('<input type="radio" name="choices" id="option1" autocomplete="off" value="' + choice + '">');
     $label.append($input);
     $label.append(choice);
     $div.append($label);
     $buttonDiv.append($div);
   });
   return $buttonDiv;
 }
 // Populate modal window with specific question
 function fillModal(event, $modal) {
   let button = $(event.relatedTarget);  // Button that triggered the modal
   let num = parseInt(button.data('num'));
   let question = gameStuff[num];
   window.currentQuestion = num;
   $modal.find('.modal-title').text(question.givenAnswer);
   $modal.find('.modal-body').empty().append(gatherInfo(question));
 }
 // Modal show/close functions
 $(function() {
   $("#myModal").on('show.bs.modal', function(event) {
     fillModal(event, $(this));
   });
 });









})

