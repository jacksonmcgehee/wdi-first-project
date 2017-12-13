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
        tileValue: 200
    },
]

let playerScore = 0



// Remove tile after selection
$(".tile").on('click', function(event) {
    $(event.target).remove();
});

const evaluateInput = function () {
    console.log('Check for input called evaluate input.')
    let userAnswer = $('.modal-body input:checked').val();
    console.log(userAnswer);
    if (userAnswer === gameStuff[window.currentQuestion].rightChoice) {
        playerScore += gameStuff[window.currentQuestion].tileValue
        $('.score').html(`$ ${playerScore}`)
        alert("That's correct!")
        $('#myModal').modal("hide")
    } else {
        playerScore -= gameStuff[window.currentQuestion].tileValue
        $('.score').html(`$ ${playerScore}`)
        alert("Nope. That's not it.")
        $('#myModal').modal("hide")
    }
      
}

const checkForInput = function () {
    console.log('Submit called the check for input function');

    if ($('.modal-body input:checked').val()) {
        console.log('If statement worked');
        evaluateInput();
    } else {
        alert('Please select an answer.');
    }
}

$('#closesubmit').on('click', function(event) {
    console.log('Submit was clicked')
    checkForInput();
    
})
 // Gather info from gameStuff array
const gatherInfo = function (question) {
   let $buttonDiv = $('<div class="btn-group" data-toggle="buttons"></div>');
   let iteration = 0
   let $div = $('<div class="radio">');
   
   question.choices.forEach(function(choice) {
    iteration += 1;
    // let $div = $(`<div class="radio">
    //                 <form class="btn btn-primary"></form>
    //                 <input type="radio" name="choices${iteration}" autocomplete="off" value="${choice}">`);
    // $div.append($form);
    // $buttonDiv.append($div);
    let $form = $('<form class="btn btn-primary"></form>');
    let $input = $('<input type="radio" name="choices" autocomplete="off" value="' + choice + '">');
    $form.append($input);
    $form.append(choice);
    $div.append($form);
    $buttonDiv.append($div);
   });
   return $buttonDiv;
 }
//Fill the modal with gathered info
 function fillModal(event, $modal) {
   let button = $(event.relatedTarget);
   let num = parseInt(button.data('num'));
   let question = gameStuff[num];
   window.currentQuestion = num;
   $modal.find('.modal-title').text(question.givenAnswer);
   $modal.find('.modal-body').empty().append(gatherInfo(question));
 }

$("#myModal").on('show.bs.modal', function(event) {
    fillModal(event, $('#myModal'));
});










})

