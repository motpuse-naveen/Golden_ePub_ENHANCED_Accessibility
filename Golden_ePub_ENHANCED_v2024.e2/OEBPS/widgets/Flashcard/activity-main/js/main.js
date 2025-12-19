jqnc(document).ready(function () {
    jqnc('.commentButton').on('click keyup touchstart', onCommentClicked);
    jqnc('.close').on('click keydown touchstart', onCommentCloseClicked);
});

jqnc(document).on('keydown', function (e) {
    if (e.keyCode === 27 && isCommentOpen) {
        onCommentCloseClicked(e);
    }
});

var isCommentOpen = false;

function onCommentClicked(e) {
    if (e.type === 'keyup' && e.keyCode !== 13) return;

    isCommentOpen = true;
    jqnc('.modalbg')
        .addClass('modalbgAnimate')
        .attr('aria-hidden', 'false');	

    jqnc('.openModal').css('pointer-events','auto');

    setTimeout(() => {
		jqnc('#dialogClose').focus();
		jqnc('.interactive-wrapper').attr('aria-hidden', 'true');
	}, 300);
	
}

function onCommentCloseClicked(e) {
	restrictTab(e);
    if (e.type === 'keydown' && ![13,27].includes(e.keyCode)) return;

    isCommentOpen = false;
    jqnc('.modalbg')
        .removeClass('modalbgAnimate')
        .attr('aria-hidden', 'true');

    jqnc('.openModal').css('pointer-events','none');
	jqnc('.interactive-wrapper').removeAttr('aria-hidden');
    setTimeout(() => jqnc('.commentButton').focus(), 300);
}

function restrictTab(e) {
    if (e.type === 'keydown' && (e.keyCode === 9)) {
        e.preventDefault();
        jqnc('#dialogClose').focus();
    }
}


/*function setFrameSize(){
   var innerWidth = 	jqnc(window).innerWidth();

   if(innerWidth <= 320){
      jqnc('#framecontainer').;
   }

}*/