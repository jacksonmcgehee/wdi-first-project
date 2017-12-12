

$('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
// $('.open-wrong-popup').magnificPopup({
// type:'inline',
// midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
// });

// const closePopup = {
//     close: function() {
//     if(!mfp.isOpen) return;
//     _mfpTrigger(BEFORE_CLOSE_EVENT);

//     mfp.isOpen = false;
//     // for CSS3 animation
//     if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
//         mfp._addClassToMFP(REMOVING_CLASS);
//         setTimeout(function() {
//             mfp._close();
//         }, mfp.st.removalDelay);
//     } else {
//         mfp._close();
//     }
// },
// }

let score = 0

$('.wrong').on('click', function(event) {
    alert("Nope!");
    //$(event.target).closePopup.close();
    score -= 400
    $(event.target).find('body').find('.header').find('.score').text('$ 400');
})