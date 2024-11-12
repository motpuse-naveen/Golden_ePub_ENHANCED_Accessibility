const correctFBText = "Correct."
const incorrectFBText = "Incorrect. Please try again."
var paginationTabindex = 10001;
var optionsIndex = 1;
const tabs = document.querySelector(".tab-content");
const tabButton = document.querySelectorAll(".step");
const contents = document.querySelectorAll(".tab-pane");
const styleTypes = {
    'st-upper-alpha': ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    'st-lower-alpha': ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    'st-upper-roman': ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"],
    'st-lower-roman': ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv", "xv", "xvi", "xvii", "xviii", "xix", "xx"],
    'st-decimal':["1" ,"2","3","4","5","6","7","8","9","10","11","12","13","14","15", "16","17","18","19","20"]
}
function getQuestionByEvent(e) {
    var id;
    if ($(e.target).is('span')) {
        id = $(e.target).parent().attr('data-id');
    } else if ($(e.target).is('a')) {
        id = $(e.target).attr('data-id');
    } else if ($(e.target).find('a').length) {
        id = $(e.target).find('a').attr('data-id');
    }
    if (id) {
        getNewQuestion(parseInt(id.split('-')[1]));
        $('.nav-link').removeClass('active');
        $('.nav-link').removeAttr('aria-current');
        //$('.nav-link').attr('aria-selected', false);
        if ($(e.target).is('span')) {
            $(e.target).parent().addClass("active");
            //$(e.target).parent().attr('aria-selected', true);
            $(e.target).parent().attr('aria-current', "page");
        } else {
            $(e.target).addClass("active");
            //$(e.target).attr('aria-selected', true);
            $(e.target).attr('aria-current', "page");
        }
        if (e.type === "click" && $(e.target).find('a').length) {
            $(e.target).find('a').addClass("active");
            //$(e.target).find('a').attr('aria-selected', true);
            $(e.target).find('a').attr('aria-current', "page");
        }
        $('#questionNumber').focus();
    }
    if (parseInt(id.split('-')[1]) === quiz.length) {
        $('.arrow-right').addClass('disabled').attr("aria-disabled",true);
        $('.arrow-left').removeClass('disabled').removeAttr('aria-disabled');
    } else if (parseInt(id.split('-')[1]) === 1) {
        $('.arrow-left').addClass('disabled').attr("aria-disabled",true);
        $('.arrow-right').removeClass('disabled').removeAttr('aria-disabled');
    } else {
        $('.arrow-right').removeClass('disabled').removeAttr('aria-disabled');
        $('.arrow-left').removeClass('disabled').removeAttr('aria-disabled');
    }
}
$(".steps").on('click keydown', function (e) {
    if ((e.type === 'keydown' && e.keyCode == 13) || e.type === 'click') {
        getQuestionByEvent(e);
        $ul = $('.steps ol');
        $ulWrapper = $ul.parent();
        stepWidth = 38;
        ulWrapperWidth = $ulWrapper.width();
        wrapperCapacity = ulWrapperWidth / stepWidth;
        totalItemsWidth = $('.steps ol li').length * stepWidth;
        var stepAtCenter = -1;
        var $selectedStep = $(e.target);
        var selectedStep;
        if ($selectedStep.is('span')) {
            selectedStep = $selectedStep.parent().attr('data-id').split('-')[1];
        } else if ($selectedStep.is('a')) {
            selectedStep = $selectedStep.attr('data-id').split('-')[1];
        }
        autoDragPagination(selectedStep);
        // get central item by removing css.left
    }
});
function autoDragPagination(selectedStep) {
    $ul = $('.steps ol');
    $ulWrapper = $ul.parent();
    stepWidth = 38;
    ulWrapperWidth = $ulWrapper.width();
    wrapperCapacity = ulWrapperWidth / stepWidth;
    totalItemsWidth = $('.steps ol li').length * stepWidth;
    var stepAtCenter = -1;

    var stepCountAtCenter = Math.floor(wrapperCapacity / 2);
    var oldLeft = parseInt($ul.css('left'))
    var minLeft = 0 - ((totalItemsWidth - ulWrapperWidth) + stepWidth);
    var maxLeft = 0;
    // evaluating Center
    if (oldLeft === 0) {
        stepAtCenter = stepCountAtCenter;
    } else {
        var hiddenToLeft = Math.floor(Math.abs(oldLeft) / stepWidth);
        stepAtCenter = hiddenToLeft + stepCountAtCenter;
    }
    // Applying left
    if (selectedStep > stepAtCenter) {
        var newLeft = oldLeft - ((selectedStep - stepAtCenter) * stepWidth);
        if (newLeft < minLeft) {
            newLeft = minLeft;
        }
        // // (totalItemsWidth - ulWrapperWidth)
        // for(let i = 0; i&lt;=hiddenUnderLeft;i++) {
        //    // console.log()
        //    $($('.steps ol li')[i]).find('a').removeAttr('tabindex');
        // }
        $ul.css('left', newLeft);
    } else {
        var newLeft = oldLeft + ((stepAtCenter - selectedStep) * stepWidth);
        if (newLeft > maxLeft) {
            newLeft = maxLeft;
        }
        $ul.css('left', newLeft);
    }
    // $('.steps ol li a').removeAttr('tabindex');
    // var hiddenUnderLeft = (Math.abs(newLeft)/stepWidth);
    // for (let i = hiddenUnderLeft+1; i&lt; hiddenUnderLeft + Math.floor(wrapperCapacity); i++) {
    //    $($('.steps ol li')[i]).find('a').attr('tabindex', 0);
    // }
}
var QuestionNumber = document.querySelector("#questionNumber");
var QuestionName = document.querySelector("#questionName");
var optionContainer = document.querySelector(".Multiple-choice");
var correctMsg = document.querySelector(".correct");
var indicator = document.querySelector(".nav-tabs");
var subHeadingContainer = document.querySelector(".content-heading");
var questionCounter = 0;
var currentQuestion;
var availableQuestion = [];
var availableOption = [];
// add quiz question to new array;
function setAvailableQuestion() {
    var totalQuestion = quiz.length;
    for (var i = 0; i < totalQuestion; i++) {
        availableQuestion.push(quiz[i]);
    }
}
// goto question and new question of array
function getNewQuestion(question) {
    QuestionNumber.innerText = "Question " + (question);
    QuestionNumber.setAttribute('aria-label', "Question " + (question));
    QuestionNumber.setAttribute('role', "heading");
    QuestionNumber.setAttribute('tabindex', '0');
    optionsIndex++;
    // get random question
    var questionIndex = quiz[question - 1];
    currentQuestion = questionIndex;
    QuestionName.innerHTML = currentQuestion.q;
    //QuestionName.setAttribute('tabindex', '0');
    optionsIndex++
    if (currentQuestion.q2) {
        $('#subheading2').html(currentQuestion.q2);
        $('#subheading2').attr('tabindex', '0');
        $('#subheading2').show().removeAttr("aria-hidden");
        optionsIndex++
    } else {
        $('#subheading2').removeAttr('aria-label');
        $('#subheading2').removeAttr('tabindex');
        $('#subheading2').hide().attr("aria-hidden", true);
        optionsIndex++
    }
    if (currentQuestion.q3.length) {
        $('#subheading3').html(currentQuestion.q3[0]);
        $('#subheading3').attr('tabindex', '0');
        $('#subheading3').show().removeAttr("aria-hidden");
        optionsIndex++
    } else {
        $('#subheading3').removeAttr('aria-label');
        $('#subheading3').removeAttr('tabindex');
        $('#subheading3').hide().attr("aria-hidden", true);
        optionsIndex++
    }
    var optionStyleType = [];
    if(currentQuestion.optionStyleType!=undefined && currentQuestion.optionStyleType!=null && currentQuestion.optionStyleType!="" && currentQuestion.optionStyleType != "none"){
        optionContainer.setAttribute("styletype",currentQuestion.optionStyleType);
        $(".answer-controls").addClass("mar-left")
        optionStyleType = styleTypes[currentQuestion.optionStyleType]
    }
    else{
        optionContainer.removeAttribute("styletype");
        $(".answer-controls").removeClass("mar-left")
    }
    //get the position of questionIndex from the availableQuestion
    // var index1 = quiz.indexOf(questionIndex);
    // //remove the questionIndex from the availableQuestion;
    // quiz.splice(index1, 1);
    // options of the given question.
    var optionlen = currentQuestion.option.length;
    for (var i = 0; i < optionlen; i++) {
        availableOption.push(i);
    }
    optionContainer.innerHTML = '';
    for (var j = 0; j < optionlen; j++) {
        var option = document.createElement("li");
        option.innerHTML = currentQuestion.option[j];
        option.setAttribute('data-id', j);
        option.setAttribute('tabindex', '0');
        option.setAttribute('role', 'radio');
        option.setAttribute('aria-checked', 'false');
        optionsIndex++;
        option.className = "focus-input";
        if(optionStyleType !=undefined && optionStyleType.length>0){
            option.prepend($("<span class='visually-hidden'>" + optionStyleType[j] + ". " + "</span>")[0])
        }
        optionContainer.appendChild(option);
        // option.setAttribute("onclick","checkResult(this)");
        // option.setAttribute("onclick", "addActiveClass(this)");
    }
    $('.focus-input').on('keydown click', addActiveClass);
    $('.tab-pane ').attr('data-state', currentQuestion.state);
    $('.tab-pane ').attr('id', question);
    if (currentQuestion.state === 'wrong') {
        $('.focus-input').each(function () {
            if ($(this).attr('data-id') == currentQuestion.userAnswered) {
                $(this).addClass('wrong').attr("aria-describedby", "ariaIncorrect");
            }
        });
        $('#mcq_button').html('Try Again');
        $('#mcq_button').removeClass('disabled').removeAttr('aria-disabled');
        //$('#mcq_button').attr('title', 'Try Again');
        $('#mcq_button').attr('tabindex', '0');
        $('#answer_label').show();
        $('#Add_solution').hide();
        $('#need_help').show();
        $('#answer_label').html(incorrectFBText);
        $('#answer_label').removeClass().addClass('not-quite');

    } else if (currentQuestion.state === 'correct') {
        $('.focus-input').each(function () {
            $(this).addClass('already-answered');
            if ($(this).attr('data-id') == currentQuestion.userAnswered) {
                $(this).addClass('last-child').attr("aria-describedby", "ariaCorrect");
            }
        });
        if (question == quiz.length) {
            $('#mcq_button').html('Done');
            //$('#mcq_button').attr('title', 'Done');
        } else {
            $('#mcq_button').html('Next Question');
            //$('#mcq_button').attr('title', 'Next Question');
        }
        $('#mcq_button').removeClass('disabled').removeAttr('aria-disabled');
        $('#mcq_button').attr('tabindex', '0');
        $('#answer_label').show();
        $('#Add_solution').show();
        $('#need_help').hide();
        $('#answer_label').html(correctFBText);
        $('#answer_label').removeClass().addClass('correct');
    } else {
        $('.focus-input').removeClass().addClass('focus-input');
        $('.focus-input').each(function () {
            if($(this).attr("aria-describedby") == "ariaIncorrect" 
            || $(this).attr("aria-describedby") == "ariaCorrect"){
                $(this).removeAttr("aria-describedby");
            }
        });
        $('#mcq_button').html('Check Answer');
        $('#mcq_button').addClass('disabled').attr("aria-disabled",true);
        // $('#questionNumber').focus();
        //$('#mcq_button').attr('tabindex', '-1');
        //$('#mcq_button').attr('title', 'Check Answer');
        $('#mcq_button').removeAttr('tabindex');
        $('#answer_label').hide();
        $('#Add_solution').hide();
        $('#need_help').show();
    }
    $('.nav-link').removeClass('active');
    $('.nav-link').each(function () {
        if ($(this).attr('data-id') == 'q-' + question) {
            $(this).addClass('active');
        }
    });
    MathJax.typesetClear()
    MathJax.typeset();
    questionCounter++;
}
function addActiveClass(el) {
    if ((el.type === 'keydown' && el.keyCode == 13) || el.type === 'click') {
        if(!$(el.target).hasClass('already-answered')){
            $(el.target).prevAll().removeClass().addClass('focus-input').attr("aria-checked", false);
            $(el.target).nextAll().removeClass().addClass('focus-input').attr("aria-checked", false);
            $('.focus-input').each(function () {
                if($(this).attr("aria-describedby") == "ariaIncorrect" 
                || $(this).attr("aria-describedby") == "ariaCorrect"){
                    $(this).removeAttr("aria-describedby");
                }
            });
            $(el.target).removeClass().addClass('focus-input active').attr("aria-checked", true);
            $('#mcq_button').html('Check Answer');
            $('#Add_solution').hide();
            $('#answer_label').hide();
            $('.tab-pane ').attr('data-state', 'answered');
            $('#mcq_button').removeClass('disabled').removeAttr('aria-disabled');
            //$('#mcq_button').attr('title', 'Check Answer');
            $('#mcq_button').attr('tabindex', '0');
            ariaAnnounce('Selected option is ' + $(el.target).text());
        }
        el.preventDefault();
        el.stopPropagation();
        return false;
    }
}
// check the current option is true or not .
function getResult(element) {
    var id = parseInt($(element).attr('data-id'));
    let dataId = 'q-' + parseInt($('.tab-pane').attr('id'));
    if (id === currentQuestion.answer) {
        $(element).removeClass().addClass("focus-input last-child").attr("aria-describedby", "ariaCorrect");
        correctMsg.innerHTML = correctFBText;
        $(element).parent().attr("data-correct", "true");
        //$(element).attr("role", "img");
        updateAnswerIndicator("correct");
        if (parseInt($('.tab-pane').attr('id')) == quiz.length) {
            $('#mcq_button').html('Done');
            //$('#mcq_button').attr('title', 'Done');
        } else {
            $('#mcq_button').html('Next Question');
            //$('#mcq_button').attr('title', 'Next Question');
        }
        $('#mcq_button').attr('tabindex', '0');
        unclickableOptions();
        $('#answer_label').show();
        $('#need_help').hide();
        $('#Add_solution').show();
        $('.tab-pane ').attr('data-state', 'correct');
        currentQuestion.state = 'correct';
        $('.nav-link').each(function () {
            if ($(this).attr('data-id') == dataId) {
                $(this).attr('data-correct', true);
            }
        });
        ariaAnnounce('Sected option ' + $(element).text() + ' is correct. ' + currentQuestion.ansText);
    }
    else {
        $(element).removeClass().addClass("focus-input wrong").attr("aria-describedby", "ariaIncorrect");
        correctMsg.classList.add("not-quite");
        correctMsg.innerHTML = incorrectFBText;
        updateAnswerIndicator("wrong");
        $('#mcq_button').html('Try Again');
        //$('#mcq_button').attr('title', 'Try Again');
        $('#mcq_button').attr('tabindex', '0');
        $('#answer_label').show();
        $('#need_help').show();
        $('.tab-pane ').attr('data-state', 'wrong');
        $('.nav-link').each(function () {
            if ($(this).attr('data-id') == dataId) {
                $(this).attr('data-correct', false);
            }
        });
        currentQuestion.state = 'wrong';
        //ariaAnnounce('Sected option ' + $(element).text() + ' is incorrect.');
        ariaAnnounce(incorrectFBText);
    }
    currentQuestion.userAnswered = id;
}
function unclickableOptions() {
    var optionLen = optionContainer.children.length;
    for (var i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered")
    }
}
function answerIndicatot() {
    var totalQuestion = quiz.length;
    for (var i = 0; i < totalQuestion; i++) {
        // var optionIndi = document.createElement("span");
        // indicator.appendChild(optionIndi);
        // optionIndi.classList.add("step-active");
        // // optionIndi.setAttribute("data-correct", "true");
        // optionIndi.setAttribute("arial-label", i + 1);
        // optionIndi.innerHTML = i;
        var footerLi = document.createElement("li");
        indicator.appendChild(footerLi);
        footerLi.classList.add("nav-item");
        var footerAnchor = document.createElement("a");
        footerLi.appendChild(footerAnchor);
        footerAnchor.classList.add("nav-link");
        footerAnchor.classList.add("step");
        footerAnchor.setAttribute("data-id", 'q-' + (parseInt(i) + 1));
        //footerLi.setAttribute('role', 'option');
        //footerLi.setAttribute('aria-selected', 'false');
        //APT: Added selected state to anchor element
        //footerAnchor.setAttribute('role', 'option');
        //footerAnchor.setAttribute('aria-selected', false);
        footerAnchor.removeAttribute("aria-current");
        var footerSpan = document.createElement("span");
        footerSpan.innerHTML = (parseInt(i) + 1);
        footerAnchor.appendChild(footerSpan);
        footerAnchor.prepend($("<span class='visually-hidden'>page </span>")[0])
        if (parseInt(i) === 0) {
            footerAnchor.classList.add("active");
            //footerAnchor.setAttribute('aria-selected', true);
            footerAnchor.setAttribute('aria-current', "page");
        } 
        // optionIndi.setAttribute("data-correct", "true");
        footerAnchor.setAttribute("title", 'page ' + (parseInt(i) + 1));
        footerAnchor.setAttribute('tabindex', '0');
        paginationTabindex++;
    }
}
function updateAnswerIndicator(markType) {
    //    indicator.children[questionCounter-1].classList.add(step-active);
    let currentQuestion = parseInt($('.tab-pane').attr('id')) - 1;
    if (markType === 'correct') {
        $('#answer_label').removeClass().addClass('correct');
        $('#Add_solution').children().html(quiz[currentQuestion].ansText);
    } else if (markType === 'wrong') {
        $('#answer_label').removeClass().addClass('not-quite');
        $('#Add_solution').children().html(quiz[currentQuestion].ansText);
    }
}
$('#mcq_button').on('mousedown click', function (e) {
    if($(e.currentTarget).hasClass("disabled")){
        return false;
    }
    if ((e.type === 'keydown' && e.keyCode == 13) || e.type === 'click') {
        let buttonText = $('#mcq_button').text().split(' ')[0].trim().toLocaleLowerCase();
        $('.focus-input').each(function () {
            if($(this).attr("aria-describedby") == "ariaIncorrect" 
            || $(this).attr("aria-describedby") == "ariaCorrect"){
                $(this).removeAttr("aria-describedby");
            }
        });
        if (buttonText === 'check') {
            let answered = $('.Multiple-choice').find('.active');
            getResult(answered);
        } else if (buttonText === 'next') {
            getNewQuestion(parseInt($('.tab-pane').attr('id')) + 1);
            $('#answer_label').hide();
            $('#Add_solution').hide();
            $('#need_help').show();
            $('#questionNumber').focus();
        } else if (buttonText === 'try') {
            $('.focus-input').removeClass().addClass('focus-input').attr("aria-checked",false);
            $('#answer_label').hide();
            $('#Add_solution').hide();
            $('.nav-link').each(function () {
                let dataId = 'q-' + parseInt($('.tab-pane').attr('id'));
                if ($(this).attr('data-id') == dataId) {
                    $(this).removeAttr('data-correct');
                }
            });
            $('#show_ans').attr('aria-expanded', false);
            $('#mcq_button').addClass('disabled').attr("aria-disabled",true);
            $('#questionNumber').focus();
            $('#mcq_button').html('Check Answer');
            //$('#mcq_button').attr('title', 'Check Answer');
            // $('#mcq_button').removeAttr('tabindex');
            //$('#mcq_button').attr('tabindex', '-1');
            let currentQuestionIndex = parseInt($('.tab-pane').attr('id')) - 1;
            let question = quiz[currentQuestionIndex]
            question.userAnswered = '';
            question.state = 'notAnswered';
        }
    }
})
window.onload = function () {
    setAvailableQuestion();
    getNewQuestion(1);
    answerIndicatot();
    $('#Add_solution').hide();
    $('#Add_solution').children().html(quiz[0].ansText);
    $('.arrow-left').addClass('disabled').attr("aria-disabled",true)
};
$('#show_ans').on('click keydown', (function (e) {
    if ((e.type === 'keydown' && e.keyCode == 13) || e.type === 'click') {
        $('#Add_solution').show();
        let currentQuestion = parseInt($('.tab-pane').attr('id')) - 1;
        $('#mcq_button').html('Try Again');
        $('#mcq_button').removeClass('disabled').removeAttr('aria-disabled');
        $('#mcq_button').attr('title', 'Try Again');
        // $('#mcq_button').removeAttr('tabindex');
        $('#mcq_button').attr('tabindex', '0');
        let correctAnswer = [];
        $('.focus-input').removeClass('wrong').removeAttr("aria-describedby");
        $('.focus-input').each(function () {
            if ($(this).attr('data-id') == quiz[currentQuestion].answer) {
                $(this).addClass('last-child').attr("aria-checked", "true").attr("aria-describedby", "ariaCorrect");
                correctAnswer.push($(this).text());
                //ariaAnnounce('Correct answer is ' + $(this).text());
            }
        })
        correctAnswer = correctAnswer.join(',');
        setTimeout(() => {
            ariaAnnounce('Correct answer is ' + correctAnswer + ". " + quiz[currentQuestion].ansText);
        }, 200);
        
        $('#answer_label').hide();
    }
}));
$('.arrow-left').on('click keydown', function (e) {
    if ((e.type === 'keydown' && e.keyCode == 13) || e.type === 'click') {
        let currentQuestion = parseInt($('.tab-pane').attr('id'));
        if (currentQuestion === 1) {
            // getNewQuestion(quiz.length);
            // autoDragPagination(quiz.length);
        } else {
            if (currentQuestion - 1 === 1) {
                $('.arrow-left').addClass('disabled').attr("aria-disabled",true);
            } else {
                $('.arrow-left').removeClass('disabled').removeAttr('aria-disabled');
            }
            $('.arrow-right').removeClass('disabled').removeAttr('aria-disabled');
            getNewQuestion(currentQuestion - 1);
            autoDragPagination(currentQuestion - 1);
            $('#questionNumber').focus();
        }
    }
});
$('.arrow-right').on('click keydown', function (e) {
    if ((e.type === 'keydown' && e.keyCode == 13) || e.type === 'click') {
        let currentQuestion = parseInt($('.tab-pane').attr('id'));
        if (currentQuestion === quiz.length) {
            // getNewQuestion(1);
            // autoDragPagination(1);
        } else {
            if (currentQuestion + 1 === quiz.length) {
                $('.arrow-right').addClass('disabled').attr("aria-disabled",true);
            } else {
                $('.arrow-right').removeClass('disabled').removeAttr('aria-disabled');
            }
            $('.arrow-left').removeClass('disabled').removeAttr('aria-disabled');
            getNewQuestion(currentQuestion + 1);
            autoDragPagination(currentQuestion + 1);
            $('#questionNumber').focus();
        }
    }
});
function ariaAnnounce(msg) {
    console.log(msg);
    if (msg) {
        $('#ariaMessages').html(msg);
    }
    setTimeout(function () {
        $('#ariaMessages').html("");
    }, 5000);
};