/* Version 19.1, Date:04 APR 2022 */
$(document).ready(function () {
    var isDragging = false;
    var framePadding = 60;
    var maxSteps = 4;
    maxSteps = $("#inner-image-area #img .Nervous-system").length;
    var getTrackWidth = () => $(".track").width();
    var dragUnit = 40;
    var $draggableDot = $("#draggableDot");
    var getStepLeft = function (stepNumber) {
        return $('.radio-button[data-id="img-' +stepNumber+'"]').css('left');
    }
    var phaseDesc = [
        "The cyclin D/Cdk4 complex assembles at the beginning of G1; the cyclin E/Cdk2 complex assembles near the end of G1 as the cell is preparing to cross checkpoint 1 to start DNA synthesis",
        "The cyclin A/Cdk2 complex assembles as DNA synthesis starts.",
        "Completion of G2 is indicated by the assembled cyclin A/Cdk1 complex",
        "A cell crosses checkpoint 2 to initiate mitosis when the cyclin B/Cdk1 complex assembles. The cyclin B/Cdk1 complex is degraded by the 26S proteasome and an assembled cyclin D/Cdk4 marks the start of the G1 phase of a new cell cycle"
    ];
    phaseDesc = [];
    var radioPerc = 100/(maxSteps-1);
    var radioButtnPerc = 8/getTrackWidth()*100;
    radioButtnPerc = Number(radioButtnPerc.toFixed(2));
    $(".subcaption").each(function( index ) {
        //console.log( index + ": " + $(this).text() );
        phaseDesc.push($(this).text());
        
        //alert(radioPerc);
        if(index==0){
            $(".radio-button.tab-marker[data-id='img-"+ (index+1) +"']").css({"left":((radioPerc * index)) + "%"});
        }
        else{
            $(".radio-button.tab-marker[data-id='img-"+ (index+1) +"']").css({"left":((radioPerc * index)-radioButtnPerc) + "%"});
        }
    });
    $(".buttonWrapper button.radio-button").each(function(index){
        $(this).attr("aria-label", $(this).attr("title"));
    });
    var selectedStep = 1;
    
    $('.arrow-left').addClass('disabled');
    $draggableDot.mousedown(function () {
        isDragging = true;
    });
    $("*").mouseup(function () {
        if (isDragging) {
            contents.forEach(content => {
                content.classList.remove("active");
            });
            subcaptionContents.forEach(content => {
                content.classList.remove("active");
            });
            //dragUnit = e.clientX - framePadding;
            var trackStepWidth = getTrackWidth() / (maxSteps -1);
            var halfTrackStepWidth = trackStepWidth / 2;
            
            var quotient = ~~(dragUnit/trackStepWidth);
            var remainder = dragUnit%trackStepWidth;
            var stepno =  quotient + 1;
            if(remainder>halfTrackStepWidth){
                stepno = stepno + 1;
            }
            var phsText = $(".tab-marker[data-id='img-" + stepno + "']").attr("title");
            selectStep(stepno, phsText);
            /*
            if (dragUnit < (getTrackWidth() / 5)) {
                // step1
                selectStep(1, 'G1');
            }
            if ((dragUnit >= (getTrackWidth() * 0.20) && dragUnit < (getTrackWidth() * 0.50))) {
                // step2
                selectStep(2, 'S');
            }
            if ((dragUnit >= (getTrackWidth() * 0.50) && dragUnit < (getTrackWidth() * 0.84))) {
                // step2
                selectStep(3, 'G2');
            }
            if (dragUnit >= getTrackWidth() * 0.84) {
                // step3
                selectStep(4, 'Mitosis');
            }
            */
            isDragging = false;
        }
    });
    $('.track').mouseup(function (e) {
        handleDotMove(e);
        console.log('hi')
    });
    $draggableDot.mouseup(function (e) {
        handleDotMove(e);
        console.log('hi')
    });
    var trackMouseDown = false;
    $('.track').mousedown(function (e) {
        $draggableDot.css({
            'margin-left': e.pageX - 70
        })
        trackMouseDown = true;
        console.log(e.pageX - 70)
        
    });
    $(document).mousemove(function (e) {
        if (isDragging) {
            dragUnit = e.clientX - framePadding;
            // console.log(e.pageX - 70)
            if (dragUnit > getTrackWidth()) {
                $draggableDot.css({
                    'margin-left': getStepLeft(maxSteps)
                });
            } else if (dragUnit < framePadding) {
                $draggableDot.css({
                    'margin-left': getStepLeft(1)
                });
            } else {
                $draggableDot.css('margin-left', dragUnit);
            }
        }
    });
    const tabs = document.querySelector(".main-image-area");
    const tabButton = document.querySelectorAll(".tab-marker");
    const contents = document.querySelectorAll(".Nervous-system");
    const subcaptionContents = document.querySelectorAll(".subcaption");

    wrapper = document.getElementById('inner-image-area'),
        tabs.onclick = e => {
            if($(e.target).hasClass('radio-button')){
                const id = e.target.dataset.id;
                if (id) {
                    tabButton.forEach(btn => {
                        btn.classList.remove("active");
                        btn.setAttribute("aria-selected", false);
                        //btn.setAttribute("aria-pressed", false);
                    });
                    e.target.classList.add("active");
                    e.target.setAttribute("aria-selected", true);
                    //e.target.setAttribute("aria-pressed", true);
                    jQuery('#selectedPhase').text(jQuery('.buttonWrapper .tab-marker.active .marker').text());
                    contents.forEach(content => {
                        content.classList.remove("active");
                        content.setAttribute("aria-hidden", true);
                    });
                    subcaptionContents.forEach(content => {
                        content.classList.remove("active");
                        content.setAttribute("aria-hidden", true);;
                    });
                    const element = document.getElementById(id);
                    element.classList.add("active")
                    element.setAttribute("aria-hidden", false);
                    const element2 = document.getElementsByClassName(id)[0];
                    $(element2).addClass('active');
                    element2.setAttribute("aria-hidden", false);
                    handleDotMove(e);
                }
            }
        }

    function handleDotMove(e) {
        contents.forEach(content => {
            content.classList.remove("active");
            content.setAttribute("aria-hidden", true);
        });
        subcaptionContents.forEach(content => {
            content.classList.remove("active");
            content.setAttribute("aria-hidden", true);
        });
        const rect = e.target.getBoundingClientRect();
        dragUnit = rect.x - framePadding;
        var trackStepWidth = getTrackWidth() / (maxSteps -1);
        var halfTrackStepWidth = trackStepWidth / 2;
        
        var quotient = ~~(dragUnit/trackStepWidth);
        var remainder = dragUnit%trackStepWidth;
        var stepno =  quotient + 1;
        if(remainder>halfTrackStepWidth){
            stepno = stepno + 1;
        }
        var phsText = $(".tab-marker[data-id='img-" + stepno + "']").attr("title")
        selectStep(stepno, phsText);
    }
    function onRightArrowMouseUp(e) {
        if ((e.type === 'keydown' && e.keyCode === 13) || e.type === 'click') {
            contents.forEach(content => {
                content.classList.remove("active");
            });
            subcaptionContents.forEach(content => {
                content.classList.remove("active");
            });
            var stepno = selectedStep + 1;
            var phsText = $(".tab-marker[data-id='img-" + stepno + "']").attr("title")
            selectStep(stepno, phsText);
            
        }
    }
    function onLeftArrowMouseUp(e) {
        if ((e.type === 'keydown' && e.keyCode === 13) || e.type === 'click') {
            contents.forEach(content => {
                content.classList.remove("active");
            });
            subcaptionContents.forEach(content => {
                content.classList.remove("active");
            });
            var stepno = selectedStep - 1;
            var phsText = $(".tab-marker[data-id='img-" + stepno + "']").attr("title")
            selectStep(stepno, phsText);
           
        }
    }
    function removeEvent($ele, event) {
        $ele.off(event);
    }
    function addMouseUpToArrowLeft() {
        $('.arrow-left').unbind('click').bind('click', onLeftArrowMouseUp);
    }
    function addMouseUpToArrowRight() {
        $('.arrow-right').unbind('click').bind('click', onRightArrowMouseUp);
    }

    // addMouseUpToArrowLeft();
    addMouseUpToArrowRight();
    $('.tab-marker').keyup(function (e) {
        if (e.type === 'keyup' && e.keyCode === 13) {
            contents.forEach(content => {
                content.classList.remove("active");
            });
            subcaptionContents.forEach(content => {
                content.classList.remove("active");
            });
            var stepno = $(this).attr('data-id').replace("img-", "");
            var phsTxt = $(this).attr("title");
            selectStep(Number(stepno), phsTxt);
            /*if ($(this).attr('data-id') === 'img-1') {
                selectStep(1, 'G1');
            } else if ($(this).attr('data-id') === 'img-2') {
                selectStep(2, 'S');
            } else if ($(this).attr('data-id') === 'img-3') {
                selectStep(3, 'G2');
            } else if ($(this).attr('data-id') === 'img-4') {
                selectStep(4, 'Mitosis');
            }*/
        }
    });

    function selectStep(stepNumber, phaseText) {
        console.log(Utils)
        $draggableDot.animate({
            'margin-left': getStepLeft(stepNumber)
        }, 200)
        $('#img-' + stepNumber).addClass('active').attr("aria-hidden", false);
        $('.img-' + stepNumber).addClass('active').attr("aria-hidden", false);
        // jQuery('#selectedPhase').text('G1');
        jQuery('#selectedPhase').text(phaseText);
        selectedStep = stepNumber;
        Utils.ariaAnnounce(phaseDesc[stepNumber - 1]);
        // $draggableDot.attr('aria-label', phaseText + phaseDesc[stepNumber-1])
        if (stepNumber === 1) {
            $('.arrow-left').addClass('disabled');
            removeEvent($('.arrow-left'), 'mouseup keydown');
        } else {
            $('.arrow-left').removeClass('disabled');
            addMouseUpToArrowLeft();
        }
        if (stepNumber === maxSteps) {
            $('.arrow-right').addClass('disabled');
            removeEvent($('.arrow-right'), 'mouseup keydown');
        } else {
            $('.arrow-right').removeClass('disabled');
            addMouseUpToArrowRight();
        }
    }
    window.addEventListener("resize", () => {
        $draggableDot.css({
            'margin-left': getStepLeft(selectedStep)
        });
    });
});