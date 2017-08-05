
$('document').ready(function(){

var $w_height = window.innerHeight;
$('.home-banner').css('height',$w_height)
$('.results-inner').css('height',$w_height)

});	
var navOffset;
if ($(window).width() < 991) {
   navOffset = 100;
}
else {
   navOffset = 10;
}

$( window ).resize(function() {
  if ($(window).width() < 991) {
	   navOffset = 100;
	}
	else {
	   navOffset = 10;
	}
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - navOffset
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  

 $(".nav.navbar-nav li").on("click", function(){
   	$(".nav.navbar-nav li").removeClass('active');
       $(this).addClass('active');

  });

  $(window).on("scroll", function(){
       var windowscroll = $(window).scrollTop();
       var alumni_menu_top = $(".home-banner").offset().top;
       
       $('.component').each(function() {                
           var scroll = $(this).offset().top;
           var ls_scroll = scroll + 200;
           if ($(window).scrollTop() + $(window).height() >= ls_scroll) {
               var id = $(this).attr('id');
               console.log(id);
               $('.nav.navbar-nav li').removeClass('active');
               $(".nav.navbar-nav li a[rel="+id+"]").parent().addClass('active');
           }
       });
  });

if ($(window).width() < 991) {


   	$(".nav.navbar-nav li").on('click',function() {
   		$('.navbar-toggle').removeClass("collapsed");
   		$('.navbar-collapse').removeClass("in");
   	});



   }




// quiz


// Quiz result options in a separate object for flexibility
var resultOptions = [
    {   title: 'You Are This Thing',
        desc: '<p>Here, have an Archer</p>'},
    {   title: 'You Are That Thing',
        desc: '<p>Here, have an Archer</p>'},
    {   title: 'You Are This Other Thing',
        desc: '<p>Here, have an Archer</p>'},
    {   title: 'You Are This One Thing',
        desc: '<p>Here, have an Archer</p>'},
    {   title: 'You Are A Type Of Thing',
        desc: '<p>Here, have an Archer</p>'}
];
    
// global variables
var quizSteps = $('#quizzie .quiz-step'),
    totalScore = 0;

var tempacola = 0;

// for each step in the quiz, add the selected answer value to the total score
// if an answer has already been selected, subtract the previous value and update total score with the new selected answer value
// toggle a visual active state to show which option has been selected
quizSteps.each(function () {
    var currentStep = $(this),
        ansOpts = currentStep.children('.quiz-answer');
    // for each option per step, add a click listener
    // apply active class and calculate the total score
    ansOpts.each(function () {
        var eachOpt = $(this);
        eachOpt[0].addEventListener('click', check, false);
        function check() {
            var $this = $(this),
                value = $this.attr('data-quizIndex'),
                answerScore = parseInt(value);

                tempacola = tempacola + answerScore;
                
                
                console.log(tempacola);
                if ( tempacola >= 1  && tempacola <= 5) {
                    $('#results .desc').replaceWith("<p class='desc'>" + 'Tough Mom' + "</p>");  
                }else if( tempacola >= 6  && tempacola <= 10){
                  $('#results .desc').replaceWith("<p class='desc'>" + 'Norm Mom' + "</p>");  

                }else if( tempacola >= 11  && tempacola <= 15){
                  $('#results .desc').replaceWith("<p class='desc'>" + 'Chill Mom' + "</p>");  

                }

                
            // check to see if an answer was previously selected
            if (currentStep.children('.active').length > 0) {
                var wasActive = currentStep.children('.active'),
                    oldScoreValue = wasActive.attr('data-quizIndex'),
                    oldScore = parseInt(oldScoreValue);
                // handle visual active state
                currentStep.children('.active').removeClass('active');
                $this.addClass('active');
                // handle the score calculation
                totalScore -= oldScoreValue;
                totalScore += answerScore;
                calcResults(totalScore);
            } else {
                // handle visual active state
                $this.addClass('active');
                // handle score calculation
                totalScore += answerScore;
                calcResults(totalScore);
                // handle current step
                updateStep(currentStep);
            }
        }
    });
});

// show current step/hide other steps
function updateStep(currentStep) {
    if(currentStep.hasClass('current')){
       currentStep.removeClass('current');
       currentStep.next().addClass('current');
    }
}

// display scoring results
function calcResults(totalScore) {

    // only update the results div if all questions have been answered
    if (quizSteps.find('.active').length == quizSteps.length){
        var resultsTitle = $('#results h1'),
            resultsDesc = $('#results .desc');
        
        // calc lowest possible score
        var lowestScoreArray = $('#quizzie .low-value').map(function() {
            return $(this).attr('data-quizIndex');
        });
        var minScore = 0;
        for (var i = 0; i < lowestScoreArray.length; i++) {
            minScore += lowestScoreArray[i] << 0;
        }
        // calculate highest possible score
        var highestScoreArray = $('#quizzie .high-value').map(function() {
            return $(this).attr('data-quizIndex');
        });
        var maxScore = 0;
        for (var i = 0; i < highestScoreArray.length; i++) {
            maxScore += highestScoreArray[i] << 0;
        }
        // calc range, number of possible results, and intervals between results
        var range = maxScore - minScore,
            numResults = resultOptions.length,
            interval = range / (numResults - 1),
            increment = '',
            n = 0; //increment index
        // incrementally increase the possible score, starting at the minScore, until totalScore falls into range. then match that increment index (number of times it took to get totalScore into range) and return the corresponding index results from resultOptions object
        while (n < numResults) {
            increment = minScore + (interval * n);

            if (totalScore <= increment) {
              console.log(resultOptions[n].desc);
                // populate results
                // resultsTitle.replaceWith("<h1>" + resultOptions[n].title + "</h1>");
                // resultsDesc.replaceWith("<p class='desc'>" + resultOptions[n].desc + "</p>");

                return;
            } else {
                n++;
            }
        }
    }
}



$(".numberinpute").keyup(function() {
    $(this).val(this.value.match(/\d*/));
});

$(".textonly").keyup(function() {
    $(this).val(this.value.match(/^[a-zA-Z\s]*$/));
});

