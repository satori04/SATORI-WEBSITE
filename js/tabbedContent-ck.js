//tab effects
var TabbedContent={init:function(){$(".tab_item").click(function(){var e=$(this).parent().find(".moving_bg");$(e).stop().animate({left:$(this).position().left},{duration:300});TabbedContent.slideContent($(this))})},slideContent:function(e){var t=$(e).parent().parent().find(".slide_content").width();t*=$(e).prevAll().size()-1;t*=-1;$(e).parent().parent().find(".tabslider").stop().animate({marginLeft:t+"px"},{duration:300})}};$(document).ready(function(){TabbedContent.init()});