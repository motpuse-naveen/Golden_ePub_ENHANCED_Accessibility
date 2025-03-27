jqnc(document).ready(function(){
	jqnc('.h-hotspot').find('.commentButton').bind('click keyup touchstart',onCommentClicked);
	jqnc('.h-hotspot').find('.close').bind('click keydown touchstart',onCommentCloseClicked);
	/*jqnc(window).resize(function(){
		setFrameSize();
	});
	setFrameSize();*/
});

jqnc(document).keydown(function(event) { 
	if (event.keyCode == 27) { 
		//isCommentOpen = true;
		jqnc('.h-hotspot').find('.modalbg').removeClass('modalbgAnimate');
		jqnc('.h-hotspot').find('.openModal').css('pointer-events','none');
		jqnc('.h-hotspot').find('.modalbg').attr('aria-hidden', 'true');
		setTimeout(function () {
			jqnc('.h-hotspot').find('.commentButton').focus();
		},200);
	}
  });
var isCommentOpen = false;
function onCommentClicked(e)
{
	if(e.type == 'keyup' && (e.keyCode != 13))
		return false;
	//if(!isCommentOpen){
		jqnc('.h-hotspot').find('.modalbg').addClass('modalbgAnimate')
		jqnc('.h-hotspot').find('.openModal').css('pointer-events','auto')
		jqnc('.h-hotspot').find('.modalbg').attr('aria-hidden', 'false');
		setTimeout(function () {
			jqnc('#dialogClose').focus();
		},300);	
	//}
	//isCommentOpen = false;
}

function onCommentCloseClicked(e)
{	
	restrictTab(e);
	if(e.type == 'keydown' && (e.keyCode != 13) && (e.keyCode != 27))
		return false;
	//isCommentOpen = true;
	jqnc('.h-hotspot').find('.modalbg').removeClass('modalbgAnimate');
	jqnc('.h-hotspot').find('.openModal').css('pointer-events','none');
	jqnc('.h-hotspot').find('.modalbg').attr('aria-hidden', 'true');
	setTimeout(function () {
		jqnc('.h-hotspot').find('.commentButton').focus();
	},300);
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