// JavaScript Document

/**
* @name		:mianInit
* @author	:Nice
* @dependent:总初始化
*/
function mianInit(){
	
}
mianInit();
/* @end **/


/**
* @name		:mianInit
* @author	:Nice
* @dependent:产品切换
*/
function productSwitch(){
	var nav=$('#productNav');
	
	var navLi=$('#productNav .list');
	var column=$('.product_lists');

	var navL=$('#productNav .list').length;
	var columnL=column.length;

	// function (){

	// }

	$(column[0]).css('display', 'block');


	$('#productNav .list').on('click',{navLi:navLi,column:column},function(event){
		/* Act on the event */
		var i=$(this).index();
		// var e=$(event.data.columnLi[i]);

		navLi.removeClass('hover');
		$(this).addClass('hover');

		$(column).animate({opacity:0}, 200);
		$(column).css('display', 'none');


		column.eq(i).css('display', 'block');
        column.eq(i).animate({opacity:1}, 200);

		// columnLi.animate({opacity:0}, 200);
		// columnLi.css('display', 'none');

		// e.css('display', 'block');
		// e.animate({opacity:1}, 200);

		// console.log(i,column.eq(i));

		// var i=$('.news_nav li').index(this);
		// $(this).addClass('pitch_on');
		// $('.news_nav li:not('+i+'))').removeClass('pitch_on');
		// $('.news_nav li:not(li:eq('+i+'))').removeClass('pitch_on');

  //       $('.news_info .news_detail:not(li:eq('+i+'))').animate({opacity:0}, 200);
  //       $('.news_info .news_detail:not(li:eq('+i+'))').css('display', 'none');

  //       $('.news_info .news_detail:eq('+i+')').css('display', 'block');
  //       $('.news_info .news_detail:eq('+i+')').animate({opacity:1}, 200);
	});
}
/* @end **/


/**
* @name		:messageSwitch
* @author	:Nice
* @dependent:留言切换
*/
function messageSwitch(){
	var contact=$('#contactUSTier');
	var message=$('#messageTier');

	function fun(event){
		console.log(event.data.contact);

		event.data.contact.animate({
            left:-2000+"px"
        },1000);
        setTimeout(function(){
        	event.data.contact.css({
        		display: 'none'
        	});
        	event.data.message.css({
	    		left: 2000+'px',
	    		opacity: 0,
	    		display: 'block'
    		});
    		event.data.message.animate({
            	left:0,
            	opacity: 1
        	},1000);
        },800);
        console.log('s');
	}

	var obj={
		message:message,
		contact:contact
	}
	// $(e).click(obj,fun);
	$('#messageBtn').click(obj,fun);
	// console.log('s');
	// fun(obj);
}












/**
* @name		:名称
* @author	:作者
* @dependent:描述
*/

/* @end **/

/**
* @name		:
* @author	:Nice
* @version	:
* @type		:基类
* @explain	:
* @relating	:
* @dependent:
*/

/* @end **/