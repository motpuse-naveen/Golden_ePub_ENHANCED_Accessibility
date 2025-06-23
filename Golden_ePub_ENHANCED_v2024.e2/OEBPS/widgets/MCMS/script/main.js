/* Version 19.4, Date:02 JUNE 2022 */
const correctFBText = "Correct."
const incorrectFBText = "Incorrect. Please try again."
const tryagainFBText = "Please try again."
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
    if($(e.target.closest(".nav-item").length>1) || $(e.target.closest(".nav-link").length>1)){
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
            if (parseInt(id.split('-')[1]) === quiz.length) {
                $('.arrow-right').addClass('disabled').attr("aria-disabled",true);
                $('.arrow-left').removeClass('disabled').removeAttr("aria-disabled");
            } else if (parseInt(id.split('-')[1]) === 1) {
                $('.arrow-left').addClass('disabled').attr("aria-disabled",true);
                $('.arrow-right').removeClass('disabled').removeAttr("aria-disabled");
            } else {
                $('.arrow-right').removeClass('disabled').removeAttr("aria-disabled");
                $('.arrow-left').removeClass('disabled').removeAttr("aria-disabled");
            }
        }
    }
}
$(".steps").on('click keydown', function (e) {
    if ((e.type === 'keydown' && e.keyCode == 13) || e.type === 'click') {
        getQuestionByEvent(e);
        $ul = $('.steps ol');
        $ulWrapper = $ul//.parent();
        stepWidth = $('.steps ol li').outerWidth();
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
    $ulWrapper = $ul//.parent();
    stepWidth = $('.steps ol li').outerWidth();
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
    if ((ulWrapperWidth - (stepWidth * 2)) < totalItemsWidth) {
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
    }
    // $('.steps ol li a').removeAttr('tabindex');
    // var hiddenUnderLeft = (Math.abs(newLeft)/stepWidth);
    // for (let i = hiddenUnderLeft+1; i&lt; hiddenUnderLeft + Math.floor(wrapperCapacity); i++) {
    //    $($('.steps ol li')[i]).find('a').attr('tabindex', 0);
    // }
}
var QuestionNumber = document.querySelector("#questionNumber");
var QuestionName = document.querySelector("#questionName");
var QuestionInstruction = document.querySelector("#questionInstruction");
var optionContainer = document.querySelector(".Multiple-choice");
var correctMsg = document.querySelector(".correct");
var indicator = document.querySelector(".nav-tabs");
var subHeadingContainer = document.querySelector(".content-heading");
var questionCounter = 0;
var currentQuestion;
var availableQuestion = [];
var availableOption = [];
var selectOption = [];
// add quiz question to new array;
function setAvailableQuestion() {
    var totalQuestion = quiz.length;
    for (var i = 0; i < totalQuestion; i++) {
        availableQuestion.push(quiz[i]);
    }
}
// goto question and new question of array
function getNewQuestion(question) {
    $('#mcq_button').show();
    selectOption = [];
    QuestionNumber.innerText = "Question " + (question);
    //  &lt;!-- QuestionNumber.innerText = "Question " + (question) + " of " + (quiz.length); 
    QuestionNumber.setAttribute('aria-label', "Question " + (question));
    //QuestionNumber.setAttribute('role', "heading");
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
    if (currentQuestion.type != undefined && currentQuestion.type != null && currentQuestion.type != ""
        && currentQuestion.type == "MCSS" || currentQuestion.type == "TF") {
            QuestionInstruction.innerText = "Select one answer."
            optionContainer.setAttribute("role", "radiogroup");
    }
    else {
        QuestionInstruction.innerText = "Select all that apply."
        optionContainer.setAttribute("role", "group");
    }
    var optionStyleType = [];
    if (currentQuestion.optionStyleType != undefined && currentQuestion.optionStyleType != null && currentQuestion.optionStyleType != "" && currentQuestion.optionStyleType != "none") {
        optionContainer.setAttribute("styletype", currentQuestion.optionStyleType);
        $(".answer-controls").addClass("mar-left")
        optionStyleType = styleTypes[currentQuestion.optionStyleType]
    }
    else {
        optionContainer.removeAttribute("styletype");
        $(".answer-controls").removeClass("mar-left")
    }
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
        if (currentQuestion.type != undefined && currentQuestion.type != null && currentQuestion.type != ""
        && currentQuestion.type == "MCSS" || currentQuestion.type == "TF") {
            option.setAttribute('role', 'radio');
        }
        else{
            option.setAttribute('role', 'checkbox');
        }
        
        option.setAttribute('aria-checked', 'false');
        optionsIndex++;
        option.className = "focus-input";
        if (typeof currentQuestion.optionFeedback != 'undefined') {
            option.setAttribute('data-feedback', currentQuestion.optionFeedback[j]);
        }
        if(optionStyleType !=undefined && optionStyleType.length>0){
            option.prepend($("<span class='visually-hidden'>" + optionStyleType[j] + ". " + "</span>")[0])
        }
        optionContainer.appendChild(option);
    }
    $('.focus-input').on('keydown click', addActiveClass);
    $(".focus-input *").on("click", function (e) {
        if($(this).closest(".focus-input").length>0){
            $(this).closest(".focus-input").click();
        }
        e.stopPropagation()
    })
    if (typeof bind_glossary_events == "function") {
        bind_glossary_events();
    }

    $('.tab-pane ').attr('data-state', currentQuestion.state);
    $('.tab-pane ').attr('id', question);
    $(".ic-opt-fbk").remove();
    var optFeedback = ""
    if (currentQuestion.state === 'wrong') {
        $('.focus-input').each(function () {
            if ($(this).attr('data-id') == currentQuestion.userAnswered) {
                $(this).addClass('wrong').attr("aria-describedby", "ariaIncorrect");
                if (typeof currentQuestion.optionFeedback != 'undefined') {
                    optFeedback = $(this).attr('data-feedback')
                }
            }
        });
        $('#mcq_button').html('Try Again');
        $('#mcq_button').removeClass('disabled').removeAttr("aria-disabled");
        //$('#mcq_button').attr('title', 'Try Again');
        $('#mcq_button').attr('tabindex', '0');
        $('#answer_label').show();
        $('#Add_solution').hide();
        $('#need_help').show();
        $('#answer_label').html(incorrectFBText);
        if (optFeedback != undefined && optFeedback != "") {
            var feedback = $("<p>").addClass("ic-opt-fbk").html(optFeedback)
            $('#answer_label').after(feedback);
        }
        $('#answer_label').removeClass().addClass('not-quite');
    } else if (currentQuestion.state === 'correct') {
        if (question == quiz.length) {
            $('#mcq_button').html('Done').hide();
            //$('#mcq_button').attr('title', 'Done');
        } else {
            $('#mcq_button').html('Next Question');
            //$('#mcq_button').attr('title', 'Next Question');
        }
        $('#mcq_button').removeClass('disabled').removeAttr("aria-disabled");
        $('#mcq_button').attr('tabindex', '0');
        $('#answer_label').show();
        $('#Add_solution').children().html(currentQuestion.ansText);
        $('#Add_solution').show();
        $('#need_help').hide();
        $('#answer_label').html(correctFBText);
        $('#answer_label').removeClass().addClass('correct');
        unclickableOptions();
    } else {
        $('.focus-input').removeClass().addClass('focus-input').removeAttr("aria-describedby");
        $('.focus-input').each(function () {
            if($(this).attr("aria-describedby") == "ariaIncorrect" 
            || $(this).attr("aria-describedby") == "ariaCorrect"){
                $(this).removeAttr("aria-describedby");
            }
        });
        $('#mcq_button').html('Check Answer');
        $('#mcq_button').addClass('disabled').attr("aria-disabled",true);
        // $('#questionNumber').focus();
        //$('#mcq_button').attr('title', 'Check Answer');
        // $('#mcq_button').removeAttr('tabindex');
        //$('#mcq_button').attr('tabindex', '-1');
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
    currentQuestion.userAnswered.forEach(userAns => {
        let index = currentQuestion.answer.findIndex(currentQuest => currentQuest === userAns);
        if (index !== -1) {
            $("ul").find(`[data-id='${userAns}']`).removeClass().addClass("focus-input last-child").attr("aria-describedby", "ariaCorrect");
        } else {
            $("ul").find(`[data-id='${userAns}']`).removeClass().addClass('focus-input wrong').attr("aria-describedby", "ariaIncorrect");
        }
    });
    if (typeof MathJax !== 'undefined' && typeof MathJax !== 'null'){
        MathJax.typesetClear()
        MathJax.typeset();
    }
    questionCounter++;
    bind_annotLinkEvents();
}
function addActiveClass(el) {
    if ((el.type === 'keydown' && el.keyCode == 13) || el.type === 'click') {
        if(!$(el.target).hasClass('already-answered')){
            if (currentQuestion.state !== 'wrong' && !$(el.target).hasClass('wrong') && !$(el.target).hasClass('last-child')) {
                if (!$(el.target).hasClass("active")) {
                    $(el.target).removeClass().addClass('focus-input');
                    selectOption = [];
                    $(el.target).removeClass().addClass('focus-input active').attr("aria-checked", true);;
                    if (currentQuestion.type != undefined && currentQuestion.type != null && currentQuestion.type != ""
                        && currentQuestion.type == "MCSS" || currentQuestion.type == "TF") {
                        $(el.target).prevAll().removeClass().addClass('focus-input').attr("aria-checked", false);
                        $(el.target).nextAll().removeClass().addClass('focus-input').attr("aria-checked", false);
                        $(el.target).removeClass().addClass('focus-input active').attr("aria-checked", true);
                    }
                    $('#mcq_button').html('Check Answer');
                    $('#mcq_button').removeAttr('aria-disabled');
                    $('#Add_solution').hide();
                    $('#answer_label').hide();
                    $('.tab-pane ').attr('data-state', 'answered');
                    $('#mcq_button').removeClass('disabled').removeAttr("aria-disabled");
                    //$('#mcq_button').attr('title', 'Check Answer');
                    $('#mcq_button').attr('tabindex', '0');
                    ariaAnnounce('Selected option is ' + $(el.target).text());
                }
                else {
                    if ($('.focus-input.active').length > 1) {
                        $(el.target).removeClass("active").attr("aria-checked", false);
                    }
                }
            } else {
                if (currentQuestion.type != undefined && currentQuestion.type != null && currentQuestion.type != ""
                    && currentQuestion.type == "MCSS" || currentQuestion.type == "TF") {
                    selectOption = [];
                    $(".ic-opt-fbk").remove();
                    $(el.target).prevAll().removeClass().addClass('focus-input').attr("aria-checked", false);
                    $(el.target).nextAll().removeClass().addClass('focus-input').attr("aria-checked", false);
                    $(el.target).removeClass().addClass('focus-input active').attr("aria-checked", true);
                    $(el.target).removeClass('wrong').removeAttr("aria-describedby");
                    $('#mcq_button').html('Check Answer');
                    $('#Add_solution').hide();
                    $('#answer_label').hide();
                    $('.tab-pane ').attr('data-state', 'answered');
                    $('#mcq_button').removeClass('disabled').removeAttr("aria-disabled");
                    $('#mcq_button').attr('tabindex', '0');
                }
                else {
                    if (!$(el.target).hasClass('wrong') && !$(el.target).hasClass('last-child')) {
                        $(el.target).removeClass().addClass('focus-input active').attr("aria-checked", true);
                    } else {
                        //$(el.target).removeClass('wrong').removeAttr("aria-describedby");
                    }
                }
            }
        }
        el.preventDefault();
        el.stopPropagation();
        return false;
    }
    
}
// check the current option is true or not .
function check(answer, selectOption) {
    for (var i = 0; i < answer.length; i++) {
        if (answer[i] == selectOption[i]) {
        }
        else {
            return false;
            break;
        }
    }
    return true;
}
function getResult(element) {
    var wrongAns = 0;
    var selOptionText = [];
    var id = parseInt($(element[0]).attr('data-id'));
    for (var i = 0; i < element.length; i++) {
        selectOption.push(parseInt($(element[i]).attr('data-id')));
        selOptionText.push($(element[i]).text())
    }
    selectOption.sort();
    let dataId = 'q-' + parseInt($('.tab-pane').attr('id'));
    selectOption.forEach(option => {
        let index = currentQuestion.answer.findIndex(ans => ans === option);
        if (index !== -1) {
            $("ul").find(`[data-id='${option}']`).removeClass().addClass("focus-input last-child").attr("aria-describedby", "ariaCorrect");
        } else {
            $("ul").find(`[data-id='${option}']`).removeClass().addClass('focus-input wrong').attr("aria-describedby", "ariaIncorrect");
            wrongAns++;
        }
    });
    $(".focus-input").attr("aria-disabled",true);
    if (wrongAns === 0 && check(currentQuestion.answer, selectOption) !== false) {
        correctMsg.innerHTML = correctFBText;
        $(element).parent().attr("data-correct", "true");
        //$(element).attr("role", "img");
        updateAnswerIndicator("correct");
        if (parseInt($('.tab-pane').attr('id')) == quiz.length) {
            $('#mcq_button').html('Done').hide();
            //$('#mcq_button').attr('title', 'Done');
        } else {
            $('#mcq_button').html('Next Question');
            //$('#mcq_button').attr('title', 'Next Question');
        }
        $('#mcq_button').attr('tabindex', '0');
        unclickableOptions();
        $('#answer_label').show();
        $('#need_help').hide();
        $('#Add_solution').children().html(currentQuestion.ansText);
        $('#Add_solution').show();
        $('.tab-pane ').attr('data-state', 'correct');
        currentQuestion.state = 'correct';
        $('.nav-link').each(function () {
            if ($(this).attr('data-id') == dataId) {
                $(this).attr('data-correct', true);
            }
        });
        //selOptionText = selOptionText.join(', ');
        if(selOptionText.length>1){
            selOptionText = " options " + selOptionText.join(', ')
        }
        else{
            selOptionText = " option " + selOptionText.join(', ')
        }
        ariaAnnounce('Selected ' + selOptionText + ' is correct. ' + currentQuestion.ansText);
    }
    else {
        var optFeedback = $(element).attr('data-feedback')
        if (optFeedback != undefined && optFeedback != "") {
            var feedback = $("<p>").addClass("ic-opt-fbk").html(optFeedback)
            $('#answer_label').after(feedback);
        }
        if (currentQuestion.answer.length !== selectOption.length) {
            correctMsg.classList.add("not-quite");
            correctMsg.innerHTML = "Incorrect. Please select any " + currentQuestion.answer.length + " Option.";
            ariaAnnounce("Incorrect. Please select any " + currentQuestion.answer.length + " Option.");
        }
        else {
            correctMsg.classList.add("not-quite");
            correctMsg.innerHTML = incorrectFBText;
            ariaAnnounce(incorrectFBText);
        }
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
        
    }
    currentQuestion.userAnswered = selectOption;
    bind_annotLinkEvents();
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
        var footerLi = document.createElement("li");
        indicator.appendChild(footerLi);
        footerLi.classList.add("nav-item");
        
        var footerAnchor = document.createElement("a");
        footerLi.appendChild(footerAnchor);
        footerAnchor.classList.add("nav-link");
        footerAnchor.classList.add("step");
        footerAnchor.setAttribute("data-id", 'q-' + (parseInt(i) + 1));
        footerAnchor.setAttribute("href", '#');
        //footerLi.setAttribute('role', 'option');
        //footerLi.setAttribute('aria-selected', 'false');
        //APT: Added selected state to anchor element
        //footerAnchor.setAttribute('role', 'option');
        //footerAnchor.setAttribute('aria-selected', false);
        footerAnchor.removeAttribute("aria-current");
        var footerSpan = document.createElement("span");
        footerSpan.innerHTML = (parseInt(i) + 1);
        footerSpan.setAttribute('aria-hidden', 'true');
        footerAnchor.appendChild(footerSpan);
        footerAnchor.prepend($("<span class='visually-hidden' aria-hidden='true'>page </span>")[0])
        if (parseInt(i) === 0) {
            footerAnchor.classList.add("active");
            //footerAnchor.setAttribute('aria-selected', true);
            footerAnchor.setAttribute('aria-current', "page");
        }
        footerAnchor.setAttribute('tabindex', '0');
        //footerAnchor.setAttribute("title", 'page ' + (parseInt(i) + 1));
        footerAnchor.setAttribute("aria-label", 'page ' + (parseInt(i) + 1));
        paginationTabindex++;
    }
}
function updateAnswerIndicator(markType) {
    let currentQuestion = parseInt($('.tab-pane').attr('id')) - 1;
    if (markType === 'correct') {
        $('#answer_label').removeClass().addClass('correct');
        $('#Add_solution').children().html(quiz[currentQuestion].ansText);
    } else if (markType === 'wrong') {
        $('#answer_label').removeClass().addClass('not-quite');
        $('#Add_solution').children().html(quiz[currentQuestion].ansText);
    }
    bind_annotLinkEvents();
}
$('#mcq_button').on('mousedown click', function (e) {
    if($(e.currentTarget).hasClass("disabled")){
        return false;
    }
    if ((e.type === 'keydown' && e.keyCode == 13) || e.type === 'click') {
        $(".ic-opt-fbk").remove();
        $('.focus-input').each(function () {
            if($(this).attr("aria-describedby") == "ariaIncorrect" 
            || $(this).attr("aria-describedby") == "ariaCorrect"){
                $(this).removeAttr("aria-describedby");
            }
        });
        let buttonText = $('#mcq_button').text().split(' ')[0].trim().toLocaleLowerCase();
        if (buttonText === 'check') {
            let answered = $('.Multiple-choice').find('.active');
            getResult(answered);
        } else if (buttonText === 'next') {
            selectOption = [];
            getNewQuestion(parseInt($('.tab-pane').attr('id')) + 1);
            $('#answer_label').hide();
            $('#Add_solution').hide();
            $('#need_help').show();
            $('#questionNumber').focus();
        } else if (buttonText === 'try') {
            selectOption = [];
            $('.focus-input').removeClass().addClass('focus-input').attr("aria-checked",false).attr("aria-disabled",false);
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
            $('#need_help').attr("aria-hidden","false").show();
            //$('#mcq_button').attr('title', 'Check Answer');
            // $('#mcq_button').removeAttr('tabindex');
            //$('#mcq_button').attr('tabindex', '-1');
            let currentQuestionIndex = parseInt($('.tab-pane').attr('id')) - 1;
            let question = quiz[currentQuestionIndex]
            question.userAnswered = [];
            question.state = 'notAnswered';
        }
    }
})
window.onload = function () {
    $(".answer-controls").hide()
    setAvailableQuestion();
    getNewQuestion(1);
    $(".answer-controls").show()
    answerIndicatot();
    $('#Add_solution').hide();
    $('#Add_solution').children().html(quiz[0].ansText);
    $('.arrow-left').addClass('disabled').attr("aria-disabled",true)
    bind_annotLinkEvents();
};
$('#show_ans').on('click keydown', (function (e) {
    if ((e.type === 'keydown' && e.keyCode == 13) || e.type === 'click') {
        let currentQuestion = parseInt($('.tab-pane').attr('id')) - 1;
        $('#Add_solution').children().html(quiz[currentQuestion].ansText);
        $('#Add_solution').show();
        $("#show_ans").attr('aria-expanded', true);
        $('#mcq_button').html('Try Again');
        $('#mcq_button').removeClass('disabled').removeAttr("aria-disabled");
        //$('#mcq_button').attr('title', 'Try Again');
        // $('#mcq_button').removeAttr('tabindex');
        $('#mcq_button').attr('tabindex', '0');
        $('.focus-input').removeClass('wrong').removeAttr("aria-describedby").attr("aria-disabled",true);
        let correctAnswer = [];
        quiz[currentQuestion].answer.forEach(option => {
            $("ul").find(`[data-id='${option}']`).removeClass().addClass("focus-input last-child").attr("aria-checked", "true").attr("aria-describedby", "ariaCorrect");
            //ariaAnnounce('Correct answer is' + $(this).text());
            correctAnswer.push($("ul").find(`[data-id='${option}']`).text());
        });
        correctAnswer = correctAnswer.join(', ');
        setTimeout(() => {
            ariaAnnounce('Correct answer is ' + correctAnswer + ". " + quiz[currentQuestion].ansText);
        }, 200);
        $(".ic-opt-fbk").remove();
        $('#answer_label').hide();
        $('#need_help').attr("aria-hidden","true").hide();
        bind_annotLinkEvents();
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
                $('.arrow-left').removeClass('disabled').removeAttr("aria-disabled");
            }
            $('.arrow-right').removeClass('disabled').removeAttr("aria-disabled");
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
                $('.arrow-right').removeClass('disabled').removeAttr("aria-disabled");
            }
            $('.arrow-left').removeClass('disabled').removeAttr("aria-disabled");
            getNewQuestion(currentQuestion + 1);
            autoDragPagination(currentQuestion + 1);
            $('#questionNumber').focus();
        }
    }
});
var ariaClearTimeout = null;
function ariaAnnounce(msg) {
    //console.log(msg);
    if (msg) {
        clearTimeout(ariaClearTimeout)
        $('#ariaMessages').html("");
        $('#ariaMessages').html(msg);
    }
    ariaClearTimeout = setTimeout(function () {
        $('#ariaMessages').html("");
    }, 5000);
};

function bind_annotLinkEvents() {
    $('.tab-pane a[href]').on('click', function (e) {
        var annotId = $(this).attr("href");
        if(annotId!="#" && annotId!="" && annotId!= undefined){
            if (!annotId.startsWith("#")) {
                annotId = "#" + annotId;
            }
            if ($(annotId).length > 0) {
                document.location.hash = annotId;
            }
            else {
                try {
                    if (typeof parent.annotate_from_frame == "function") {
                        parent.annotate_from_frame(annotId);
                    }
                }
                catch (err) {
                    //$(this).hide();
                }
            }
        }
        //e.stopPropagation();
        e.preventDefault();
    
    });
}



