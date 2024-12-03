/* Version 19, Date:30 MAR 2022 */
$(".poptip_btn").on('click', function (event) {
    //console.log(event);
    //if ((event.type === 'keydown' && event.keyCode === 13) || event.type === 'click') {
        $(this).toggleClass('show-poptip');
        if($(this).hasClass("show-poptip")){
            $(".img-wrap.testyourself").removeClass("hide").addClass("show").attr("aria-hidden",false);
            $(".img-wrap.showlabels").removeClass("show").addClass("hide").attr("aria-hidden",true);
        }
        else{
            $(".img-wrap.testyourself").removeClass("show").addClass("hide").attr("aria-hidden",true);
            $(".img-wrap.showlabels").removeClass("hide").addClass("show").attr("aria-hidden",false);
        }
        $('.tooltip-down, .tooltip-up, .tooltip-right, .tooltip-left').toggle();
        if($(".tooltipInner:visible").length>0){
            $(".tooltipInner").attr("aria-hidden",false);
        }
        else{
            $(".tooltipInner").attr("aria-hidden",true);
        }
        if ($(this).hasClass('show-poptip')) {
            Utils.ariaAnnounce('Test Enabled')
            //$(this).attr('aria-label', 'Show Labels')
            $(this).text('Show Labels')
            $(this).attr('aria-label',$(this).attr('data-showlabelsaria'))
            //$(this).attr('aria-pressed', false)

        } else {
            //$(this).attr('aria-label', 'Test Yourself')
            $(this).text('Test Yourself')
            $(this).attr('aria-label',$(this).attr('data-testyourselfaria'))
            //$(this).attr('aria-pressed', true)
            Utils.ariaAnnounce('Test Disabled')
        }
        Utils.setImageBound();
        // console.log($(this).hasClass('show-poptip'));
    //}
    //event.preventDefault();
    //event.stopPropagation();
});

$(document).ready(function () {
    // set the image-map width and height to match the img size
    /*
    $('#image-map').css({
        'width': $('#image-map img').width(),
        'height': $('#image-map img').height()
    }).addClass("hide");
    $('#image-map-labels').css({
        'width': $('#image-map-labels img').width(),
        'height': $('#image-map-labels img').height()
    }).addClass("show");
    */

    $('#image-map').addClass("hide").attr("aria-hidden",true);
    $('#image-map-labels').addClass("show").attr("aria-hidden",false);

    //tooltip direction
    var tooltipDirection;
    //var ariaLabelsForTooltipAnchors = ['E', 'Action potential', 'E IPSP', 'Inside, Outside, Lipid, Lipid Bilayer'];
    $('.pin-group').each(function (groupIndex) {
        console.log('pin-group:', groupIndex + 1);
        const groupLabel = $(this).attr('data-grouplabel');
        var $orderedList = $('<ol>',{
            'aria-label':groupLabel
        })
        // Access child pins within each group
        $(this).find('.pin').each(function (pinIndex) {
            let tooltipDirection;
    
            // Determine tooltip direction based on classes
            if ($(this).hasClass('pin-down')) {
                tooltipDirection = 'tooltip-down';
            } else if ($(this).hasClass('pin-left')) {
                tooltipDirection = 'tooltip-left';
            } else if ($(this).hasClass('pin-right')) {
                tooltipDirection = 'tooltip-right';
            } else if ($(this).hasClass('pin-up')) {
                tooltipDirection = 'tooltip-up';
            } else {
                tooltipDirection = 'tooltip-right';
            }
    
            // Create tooltip anchor wrapper
            const $toolTipAnchorWrapper = $('<li>', {
                'class': 'li-' + tooltipDirection + ' tooltip-listitem',
                'style': "left:" + $(this).data('xpos') + "px; top:" + $(this).data('ypos') + "px; z-index: 1;"
            });
    
            // Create tooltip button
            const $tooltipButton = $('<button>', {
                'class': tooltipDirection + ' tooltipInner',
                'aria-expanded': false,
                'aria-label': 'label ' + (pinIndex + 1) // Group-Pin index
            });
    
            // Create tooltip content
            const $tooltipAnchor = $('<div>', {
                'class': 'tooltip',
                'id': 'tooltip-' + (groupIndex + 1) + '-' + (pinIndex + 1),
                'aria-hidden': true
            });
    
            // Add the tooltip's text and clean up unwanted attributes
            $tooltipAnchor.html($(this).html());
            $tooltipAnchor.find('p').removeAttr('tabindex');
    
            // Assemble the tooltip
            $tooltipButton.append('<span aria-hidden="true">?</span>');
            $toolTipAnchorWrapper.append($tooltipButton);
            $toolTipAnchorWrapper.append($tooltipAnchor);
    
            // Append the tooltip to the ordered list
            $orderedList.append($toolTipAnchorWrapper);
        });

        $("#image-map").append($orderedList);
    });

    // show/hide the tooltip
    $('.tooltipInner').click(function (event) {
        /*
        if (event.target.closest("div.tooltip.is-visible") != null
            && event.target.closest("div.tooltip.is-visible") != undefined
            && $(event.target.closest("div.tooltip.is-visible")).length > 0) {
            Utils.hideToolTip();
            Utils.setImageBound();
        }
        else {
            Utils.hideToolTip();
            // $(this).children('.tooltip').fadeIn(100);
            var $toolTip = $(this).closest("li.tooltip-listitem").children('.tooltip');
            // console.log('sliderStepSize')
            Utils.showToolTip($toolTip);
        }
        */
        $('.tooltipInner').attr("aria-expanded",false)
        var $toolTip = $(this).closest("li.tooltip-listitem").children('.tooltip');
        if($toolTip.is(":visible")){
            Utils.hideToolTip();
            //$(this).attr("aria-pressed",false)
            //$(this).attr("aria-selected",false)
            $(this).attr("aria-expanded",false)
        }
        else{
            Utils.hideToolTip();
            // $(this).children('.tooltip').fadeIn(100);
            //$(this).attr("aria-pressed",true )
            //$(this).attr("aria-selected",true)
            $(this).attr("aria-expanded",true)
            // console.log('sliderStepSize')
            Utils.showToolTip($toolTip);
        }
        

        event.preventDefault();
        event.stopPropagation();
    });
    
});

// Utility Functions
(function (app) {
    var maxSliderRange = 150;
    var minSliderRange = 0;
    var currentScale = 1;
    var totalSteps = 6;
    var sliderStepSize = maxSliderRange / totalSteps;
    var $imageWrapper = $('#inner-image-area');
    var $img = $("#img");
    var currentSliderVal = 0;
    var activeTooltipNumber = 0;
    app.setActiveTooltipNumber = function (n, nextPrevState) {
        n = parseFloat(n);
        if (nextPrevState) {
            activeTooltipNumber += n;
        } else {
            activeTooltipNumber = n;
        }
        if (activeTooltipNumber > 9) {
            activeTooltipNumber = 1;
        }
        if (activeTooltipNumber < 1) {
            activeTooltipNumber = 9;
        }
    }
    app.getActiveTooltipNumber = function () {
        return activeTooltipNumber;
    }
    app.announcementRange = { min: 0, max: 100 };
    app.sliderRange = { min: minSliderRange, max: maxSliderRange };
    function scaleImage(scaleSliderVal) {
        //currentScale = parseFloat(1) + ((parseInt(scaleSliderVal) * 0.01)*01);
        $imageWrapper.css('transform', 'scale(' + currentScale + ')');
        $('#imageSlider .ui-slider-handle').attr({
            'aria-label': 'Image scale is ' + parseInt(app.changeRange(currentSliderVal)),
        });
    }
    app.hideToolTip = function () {
        var $visibleToolbar = $('.is-visible');
        if ($visibleToolbar.length) {
            $visibleToolbar.fadeOut(30);
            $visibleToolbar.removeClass('is-visible').attr("aria-hidden",true);
            $visibleToolbar.closest(".tooltipInner").removeClass('maxzindex');
        }
    }
    app.getImageWrapper = function () {
        return $imageWrapper;
    }
    app.$imageSlider = $("#imageSlider");
    app.getSliderMaxRange = function () {
        return maxSliderRange;
    }
    app.getSliderMinRange = function () {
        return minSliderRange;
    }
    app.isZoomed = function () {
        return currentSliderVal > 0;
    }
    app.getCurrentScale = function () {
        return currentScale;
    }
    app.imageScaleChanged = function (scaleSliderValue) {
        currentSliderVal = parseInt(scaleSliderValue);
        scaleImage(scaleSliderValue);
        Utils.unableDisableZoomButtons();
        app.$imageSlider.slider("value", scaleSliderValue);
        $("#sliderInputBox").val(scaleSliderValue);
    }
    app.reset = function (event) {
        if ((event.type === 'keydown' && event.keyCode === 13) || event.type === 'click') {
            app.hideToolTip();
            app.imageScaleChanged(0);
            app.setImageBound();
            $('.column').removeClass('selected');
        }
    }
    app.showToolTip = function ($tooltip) {
        app.imageScaleChanged(10);
        app.setActiveTooltipNumber($tooltip.attr('id').split('-')[1]);
        $(".column").removeClass('selected');
        $(".column[data-tooltipNumber='col_" + Utils.getActiveTooltipNumber() + "']").addClass('selected');
        // console.log(Utils.getActiveTooltipNumber());
        $imageWrapper.css({ 'left': 0, 'top': 0 });
        setTimeout(() => {
            var isLeftUpdated = false;
            var isTopUpdated = false;
            var winHeight = $(window).height();
            var winWidth = $(window).width();
            $tooltip.show();
            var toolTipoffset = $tooltip[0].getBoundingClientRect();
            $tooltip.hide();
            var newLeft = toolTipoffset.left;
            var newTop = toolTipoffset.top;
            $imageOffset = $imageWrapper.offset();
            if (toolTipoffset.right > winWidth) {
                newLeft = $imageOffset.left - ((toolTipoffset.right - winWidth) + 20);
                isLeftUpdated = true;
            }
            if (toolTipoffset.left < 50) {
                newLeft = Math.abs(toolTipoffset.left) + 20;
                isLeftUpdated = true;
            }
            if (toolTipoffset.top < 50) {
                newTop = Math.abs(toolTipoffset.top) + 50;
                isTopUpdated = true;
            }
            if (toolTipoffset.bottom > winHeight) {
                newTop = $imageOffset.top - ((toolTipoffset.bottom - winHeight) - 50);
                isTopUpdated = true;
            }
            if (isTopUpdated && isLeftUpdated) {
                $imageWrapper.animate({ 'left': newLeft + 'px', 'top': newTop + 'px' }, 50);
            } else if (isTopUpdated) {
                $imageWrapper.animate({ 'top': newTop + 'px' }, 50);
            } else if (isLeftUpdated) {
                $imageWrapper.animate({ 'left': newLeft + 'px' }, 50);
            }
            $tooltip.fadeIn(500);
            $tooltip.find('p').focus();
            $tooltip.addClass('is-visible').attr("aria-hidden",false);
            $tooltip.closest(".tooltipInner").addClass('maxzindex');
        }, 300);
    }
    app.getNewScaleByDirection = function (direction) {
        var newZoom = currentSliderVal;
        if (direction == "plus") {
            if ((newZoom + sliderStepSize) <= maxSliderRange) {
                newZoom += sliderStepSize;
            } else {
                newZoom = maxSliderRange;
            }
        } else {
            if ((newZoom - sliderStepSize) > minSliderRange) {
                newZoom -= sliderStepSize;
            } else {
                newZoom = minSliderRange;
            }
        }
        return newZoom;
    }
    app.unableDisableZoomButtons = function () {
        var $zoomInButton = $('.btn-plus');
        var $zoomOutButton = $('.btn-minus');
        if (currentSliderVal === maxSliderRange) {
            $zoomInButton.addClass('disabled');
            $zoomOutButton.removeClass('disabled');
        } else if (currentSliderVal === minSliderRange) {
            $zoomInButton.removeClass('disabled');
            $zoomOutButton.addClass('disabled');
        } else {
            $zoomInButton.removeClass('disabled');
            $zoomOutButton.removeClass('disabled');
        }
    }

    app.setImageBound = function () {
        var $imgParPos = { left: parseInt($imageWrapper.css('left')), top: parseInt($imageWrapper.css('top')) };
        var $imgBoundingBox = $img[0].getBoundingClientRect();
        var $windowWidth = $(window).width();
        var $windowHeight = $(window).height();
        var newTop = $imgParPos.top;
        var newLeft = $imgParPos.left
        if ($imgParPos.left > ($imgBoundingBox.width / 2) - ($windowWidth / 2)) {
            newLeft = ($imgBoundingBox.width / 2) - ($windowWidth / 2);
        }
        if ($imgParPos.left < 0 && Math.abs($imgParPos.left) > ($imgBoundingBox.width / 2) - ($windowWidth / 2)) {
            newLeft = 0 - (($imgBoundingBox.width / 2) - ($windowWidth / 2));
        }
        if ($imgParPos.top > ($imgBoundingBox.height / 2) - ($windowHeight / 2)) {
            newTop = ($imgBoundingBox.height / 2) - ($windowHeight / 2);
        }
        if ($imgParPos.top < 0 && Math.abs($imgParPos.top) > ($imgBoundingBox.height / 2) - ($windowHeight / 2)) {
            newTop = 0 - (($imgBoundingBox.height / 2) - ($windowHeight / 2));
        }
        if ($imgBoundingBox.width < $(window).width()) {
            newLeft = 0
        }
        if ($imgBoundingBox.height < $(window).height()) {
            newTop = 0;
        }
        $imageWrapper.animate({ 'top': newTop, 'left': newLeft }, 200);
        //$imageWrapper.css({ 'top': newTop, 'left': newLeft });
    }
    app.ariaAnnounce = function (msg) {
        console.log(msg);
        if (msg) {
            $('#ariaMessages').html(msg);
        }
        setTimeout(function () {
            $('#ariaMessages').html("");
        }, 5000);
    };
    app.changeRange = function (OldValue) {
        OldMax = maxSliderRange;
        OldMin = minSliderRange;
        NewMax = 100;
        NewMin = minSliderRange;
        OldRange = (OldMax - OldMin)
        NewRange = (NewMax - NewMin)
        NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;
        NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin;
        return Math.round(NewValue);
    }
})(Utils = Utils || {});
var Utils;
// Utility Functions End

let element = document.getElementById('inner-image-area');
$(document).ready(function () {
    //  manageBreadcrumbs(1);
    resize();
    createDraggable();
    $('#imageSlider .ui-slider-handle').attr({
        'aria-label': 'Image scale is 0',
        'role': 'button',
    });
});
window.addEventListener("resize", resize);
function resize() {
    if (!Utils.isZoomed()) {
        if ($(window).width() <= 640) {
            Utils.getImageWrapper().find('#img').addClass('resp');
        } else {
            Utils.getImageWrapper().find('#img').removeClass('resp');
        }
    } else {
        Utils.getImageWrapper().find('#img').removeClass('resp');
    }
    // Utils.setImageBound();
    createDraggable()
}
Utils.getImageWrapper().dblclick(function () {
    if (!$('.btn-plus').hasClass('disabled')) {
        $('.btn-plus').trigger('click');
    }
});

function createDraggable() {
    $('#main-image-area').droppable({
        tolerance: 'fit'
    });
    Utils.getImageWrapper().draggable({
        handle: $('#img'),
        start: function (event, ui) {
            //Utils.hideToolTip();
            console.log("Sliding")
        },
        stop: function (event, ui) {
            Utils.hideToolTip();
            Utils.setImageBound();
        },
        drag: function (event, ui) {
        }
    });
}
// New Slider JS Code Start
Utils.$imageSlider.slider({
    range: "max",
    min: Utils.getSliderMinRange(),
    max: Utils.getSliderMaxRange(),
    step: 1,
    value: 0,
    slide: function (event, ui) {
        $("#sliderInputBox").val(ui.value);
        var value1 = $("#sliderInputBox").val();
        Utils.imageScaleChanged(value1)
    },
    start: function () {
    },
    stop: function (event, ui) {
        Utils.setImageBound();
        var rangedZoom = Utils.changeRange(parseInt(ui.value));
        var msg = `Image zoomed ${rangedZoom}%`;
        Utils.ariaAnnounce(msg);
    }
});
$('.btn-range').click(function () {
    var direction = $(this).data("dir");
    var newZoom = Utils.getNewScaleByDirection(direction);
    Utils.setImageBound();
    Utils.imageScaleChanged(newZoom);
    var msg = "Image Zoomed ";
    msg += direction === "plus" ? "In " : "Out ";
    var rangedZoom = Utils.changeRange(newZoom);
    msg += rangedZoom + "%";
    Utils.ariaAnnounce(msg);
    $('#imageSlider .ui-slider-handle').attr({
        'aria-label': 'Image scale is ' + parseInt(rangedZoom),
    });
});

var imageElms = document.querySelectorAll("figure img");
imageElms.forEach(element => {
	element.addEventListener("click", function(event){
		event.preventDefault();
		return false;
	});
});