$(document).ready(function() {

const gameStuff = [
    // First Category
    {
        givenAnswer: "This is the color of the rain in the famed Prince album.",
        choices: [' What is gurple', ' What is whorple', ' What is purple', ' What is acid'],
        rightChoice: ' What is purple',
        tileValue: 100
    },
    {
        givenAnswer: "This is the color of the loveable dinosaur Barney.",
        choices: [' What is shurple', ' What is purple', ' What is puke', ' What is nurple'],
        rightChoice: ' What is purple',
        tileValue: 200
    },
    {
        givenAnswer: "This is the color of the top-shelf drink 'Sizzurp'.",
        choices: [' What is qurple', ' What is purple', ' What is purtple', ' Me an my drank'],
        rightChoice: ' What is purple',
        tileValue: 300
    },
    {
        givenAnswer: "It was recently confirmed that this color Teletubby was, in fact, gay.",
        choices: [' What is purple', ' What is who GAF?', ' What is twurple', ' What is quetzalcoatlurple'],
        rightChoice: ' What is purple',
        tileValue: 400
    },
    {
        givenAnswer: "This is the color of the inside of a marmoset's stomach.",
        choices: [' There is no way you know', ' What is purple', ' What is pneumurple', ' What is vurple'],
        rightChoice: ' What is purple',
        tileValue: 500
    },
    // Second Category
    {
        givenAnswer: "This group is cooler than a polar bear's toenails.",
        choices: [' Who is Goodie MOB', ' Who is OutKast', ' Who is 2Pac (RIP)', ' Who is Snow'],
        rightChoice: ' Who is OutKast',
        tileValue: 100
    },
    {
        givenAnswer: "This group reached number 7 on the charts with 'Coolin' at tha Playground Ya Know!'",
        choices: [' Who is Kris Kross', ' Who is Bel Biv Devoe', ' Who is Another Bad Creation', ' Who is Hanson'],
        rightChoice: ' Who is Another Bad Creation',
        tileValue: 200
    },
    {
        givenAnswer: "Jerry Glanville and the Atlanta Falcons made a cameo appearance in this music video.",
        choices: [' What is Remember the Time', ' What is Too Legit To Quit', ' What is Slam', ' What is Gin and Juice'],
        rightChoice: ' What is Too Legit To Quit',
        tileValue: 300
    },
    {
        givenAnswer: "E.D.I. Mean said this group was 'Softer than Alize with a chaser.'",
        choices: [' Who is Lil Kim', ' Who is Bad Boy (As a staff, record label & crew)', ' Who is Mobb Deep', ' What is all of them'],
        rightChoice: ' What is all of them',
        tileValue: 400
    },
    {
        givenAnswer: "This group had a member named Lil White that I met one time in a Hibbet's Sports in Rome, GA.",
        choices: [' Who is ThreeSix Mafia', ' Who is 8Ball and MJG', ' Who is No Limit Records', ' Who is Boys II Men'],
        rightChoice: ' Who is ThreeSix Mafia',
        tileValue: 500
    },
    // Third Category
    {
        givenAnswer: "This show included a young Joe Rogan as a clever maintenance man.",
        choices: [' What is News Radio', ' What is Fraiser', ' What is Picket Fences', ' What is the Ben Stiller Show'],
        rightChoice: " What is News Radio",
        tileValue: 100
    },
    {
        givenAnswer: "This TV show featured vibrant personified representations of the title character's psyche.",
        choices: [' What is Profit', ' What is Lois & Clark', ' What is Dr. Quinn, Medicine Woman', " What is Herman's Head"],
        rightChoice: " What is Herman's Head",
        tileValue: 200
    },
    {
        givenAnswer: "Jennifer Aniston had one of her earliest TV roles on this short-lived sketch comedy show.",
        choices: [' What is Mad TV', ' What is In Living Color', ' What is The Edge', ' What is Idiot Box'],
        rightChoice: ' What is The Edge',
        tileValue: 300
    },
    {
        givenAnswer: "This is easily the greatest tween show Nickelodeon ever produced.'",
        choices: [" What is You Can't Do That on Television", ' What is Legends of the Hidden Temple', ' What is Clarissa Explains It All', ' What is Salute Your Shorts'],
        rightChoice: " What is You Can't Do That on Television",
        tileValue: 400
    },
    {
        givenAnswer: "The title character of this show had a sweet hideout accessed through his high school locker.",
        choices: [' What is My So-Called Life', " What is Parker Lewis Can't lose", " What is Dawson's Creek", ' What is Freaks & Geeks'],
        rightChoice: " What is Parker Lewis Can't lose",
        tileValue: 500
    },
    // Fourth Category
    {
        givenAnswer: "This is not food.",
        choices: [' What is apple', ' What is fruit cake', ' What is bread', ' What is cheese'],
        rightChoice: ' What is fruit cake',
        tileValue: 100
    },
    {
        givenAnswer: "This is not food.",
        choices: [' What is the Taco Bell menu', ' What is banana', ' What is steak', ' What is brocoli'],
        rightChoice: ' What is the Taco Bell menu',
        tileValue: 200
    },
    {
        givenAnswer: "This is not food.",
        choices: [' What is shrimp', ' What is carrot', ' What is the drawstring on your hoodie', ' What is kumquat'],
        rightChoice: ' What is the drawstring on your hoodie',
        tileValue: 300
    },
    {
        givenAnswer: "This is not food.",
        choices: [' What is that thing you just picked up', ' What is dragon fruit', ' What is chicken breast', ' What is onion'],
        rightChoice: ' What is that thing you just picked up',
        tileValue: 400
    },
    {
        givenAnswer: "This is not food.",
        choices: [' What is spinach', ' What is turducken', ' What is pho', ' What is lamp'],
        rightChoice: ' What is lamp',
        tileValue: 500
    },
    // Fifth Category
    {
        givenAnswer: "He is the only President from Louisiana.",
        choices: [' Who is Millard Fillmore', ' Who is Jed Bartlet', ' Who is Jeff Davis', ' Who is Zachary Taylor'],
        rightChoice: ' Who is Zachary Taylor',
        tileValue: 100
    },
    {
        givenAnswer: "He was the last member of the Whig Party elected to the White House.",
        choices: [' Who is Millard Fillmore', ' Who is Frank Underwood', ' Who is John Tyler', ' Who is James Polk'],
        rightChoice: ' Who is Millard Fillmore',
        tileValue: 200
    },
    {
        givenAnswer: "He oversaw the annexation of the Republic of Texas.",
        choices: [' Who is Millard Fillmore', ' Who is David Palmer', ' Who is George W. Bush', ' Who is James Polk'],
        rightChoice: ' Who is James Polk',
        tileValue: 300
    },
    {
        givenAnswer: "He signed the Gadsden Purchase.",
        choices: [' Who is Millard Fillmore', ' Who is Laura Roslin', ' Who is Franklin Pierce', ' Who is James Buchanan'],
        rightChoice: ' Who is Franklin Pierce',
        tileValue: 400
    },
    {
        givenAnswer: "He was the first President to be born a U.S. citizen, but also the only to speak English as a second language.",
        choices: [' Who is Millard Fillmore', ' Who is Jack Stanton', ' Who William Henry Harrison', ' Who is Martin Van Buren'],
        rightChoice: ' Who is Martin Van Buren',
        tileValue: 500
    },
]

let playerScore = 0

let roundsPlayed = 0



// Remove tile after selection
$(".tile").on('click', function(event) {
    $(event.target).remove()
});


// const reloadGame = function () {
//     $('.outro-container').css('display', 'none')
//     playerScore = 0
//     roundsPlayed = 0
//     $('button').add('.tile')
//     $('.main-container').css('display', 'flex')
// }

const right = function() {
    $.notify("That's correct!", "success", { position:"top center" })
}

// const wrong = function() {
//     $.notify("Nope. That's not it.", "error", { position:"top center" })
// }

const playAgain = function() {
    // $('.outro-container').css('display', 'flex')
    // $('.main-container').css('display', 'none')
    location.reload()
}

const gameOver = function () {
    roundsPlayed += 1
    if (roundsPlayed >= 25) {
        alert(`You answered them all! Your final haul is $ ${playerScore}.`)
        // $('.outro-container').css('display', 'flex')
        // $('.main-container').css('display', 'none')
        playAgain()
    }
}

const evaluateInput = function () {
    //console.log('Check for input called evaluate input.')
    let userAnswer = $('.modal-body input:checked').val()
    //console.log(userAnswer);
    if (userAnswer === gameStuff[window.currentQuestion].rightChoice) {
        playerScore += gameStuff[window.currentQuestion].tileValue
        $('.score').html(`$ ${playerScore}`)
        //alert("That's correct!")

        
        $('#myModal').modal("hide")
        right()
        gameOver()
    } else {
        playerScore -= gameStuff[window.currentQuestion].tileValue
        $('.score').html(`$ ${playerScore}`)
        //alert("Nope. That's not it.")
       
        $('#myModal').modal("hide")
        //wrong()
        $.notify("Nope. That's not it.", "error", { position:"top center" })
        gameOver()
    }
      
}

const checkForInput = function () {
    //console.log('Submit called the check for input function');

    if ($('.modal-body input:checked').val()) {
        //console.log('If statement worked')
        evaluateInput()
    } else {
        alert('Please select an answer.')
    }
}

$('#closesubmit').on('click', function(event) {
    //console.log('Submit was clicked')
    checkForInput()
    
})
 // Gather info from gameStuff array
const gatherInfo = function (question) {
   let $buttonDiv = $('<div class="btn-group" data-toggle="buttons"></div>')
   let iteration = 0
   let $div = $('<div class="radio">')
   
   question.choices.forEach(function(choice) {
    //iteration += 1;
    // let $div = $(`<div class="radio">
    //                 <form class="btn btn-primary"></form>
    //                 <input type="radio" name="choices${iteration}" autocomplete="off" value="${choice}">`);
    // $div.append($form);
    // $buttonDiv.append($div);
    let $form = $('<form class="btn btn-primary"></form>')
    let $input = $('<input type="radio" name="choices" autocomplete="off" value="' + choice + '">')
    $form.append($input)
    $form.append(choice)
    $div.append($form)
    $buttonDiv.append($div)
   });
   return $buttonDiv
 }
//Fill the modal with gathered info
 function fillModal(event, $modal) {
   let button = $(event.relatedTarget)
   let num = parseInt(button.data('num'))
   let question = gameStuff[num]
   window.currentQuestion = num
   $modal.find('.modal-title').text(question.givenAnswer)
   $modal.find('.modal-body').empty().append(gatherInfo(question))
 }

$("#myModal").on('show.bs.modal', function(event) {
    fillModal(event, $('#myModal'))
})

$('#new-game').on('click', function(event) {
    $('.intro-container').css('display', 'none')
    $('.main-container').css('display', 'flex')
})

// $('#again-game').on('click', function(event) {
//     reloadGame()
// })










})

