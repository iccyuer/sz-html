 /*------------------------------------------
  *
  * 版块：闪购
  * Developed By: lei_wang
  * 版本号：2013-11-13 V1.0
  * 最后修改：2015-04-14
  ----------------------------------------------*/
(function($) {
	// --------------------------------
	YM.namespace('YM.page.set');
	// --------------------------------
	YM.page.set.init = function() {
		this.initContentExecute();
		this.tab();
		this.showBtn();
		this.showBox();
	};

	YM.page.set.initContentExecute = function(){
		/*左右移动*/
		var banner = {
			nums:1,
			numsOut:function(){
				return $('.scroller-nav li').length;	
			},
			timer:function(){
				if(this.nums == 0){
					this.nums = this.numsOut();
				}
				if(this.nums > this.numsOut()){
					this.nums = 1;
				}
				var taget = this.nums - 1;
				$('.scroller-nav li:eq('+taget+')').addClass('on').siblings().removeClass('on');
				$('.scroller-content li:eq('+taget+')').addClass('on').siblings().removeClass('on');
				var left = -($('.scroller-content li').width() * taget);
				$('.scroller-content').stop().animate({
					left:left
				},300);
			},
			scroll:function(){
				var oUl = $('.scroller-content');
				var nav = $('.scroller-nav');
				var oUlWidth = $('.scroller-content li').width();
				var oUlLength = $('.scroller-content li').length;
				var index;
				oUl.css('width',oUlWidth*oUlLength+'px');
				if(this.numsOut() == 1){ //执行效果前，先判断焦点个数，1个的话则隐藏多余部分
					$('.scroller-nav,.banner .prev,.banner .next').hide(0);
					return false;
				}
				$('.scroller-nav li').click(function(){
					banner.nums = $(this).index() + 1;
					index = $(this).index();
					$('.scroller-nav li:eq('+index+')').addClass('on').siblings().removeClass('on');
					$('.scroller-content li:eq('+index+')').addClass('on').siblings().removeClass('on');
					var left = -oUlWidth * index;
					oUl.stop().animate({
						left:left
					},300);
				});
				$('.banner .prev').click(function(){
					banner.nums--;
					banner.timer();
				});
				$('.banner .next').click(function(){
					banner.nums++;
					banner.timer();
				});
				//定时滚动
				var times = setInterval(function(){
					banner.nums++;
					banner.timer();
				},5000);
				//鼠标悬停，暂停滚动
				$('.banner').hover(function(){
					clearInterval(times);
				},function(){
					times = setInterval(function(){
						banner.nums++;
						banner.timer();
				    },5000);
				})
			}			
		}
		banner.scroll();
		
		var floatTool = {};
		floatTool.moveBox = $('.floatTool'); 
		floatTool.defaultTop = (window.screen.height - floatTool.moveBox.height())/2 - 50; 
		$(window).scroll(function(){
			var offsetTop = floatTool.defaultTop + $(window).scrollTop()+'px';
			floatTool.moveBox.animate({top:offsetTop},{
				duration: 600,
	   			queue: false
	   		});						  
		});
		floatTool.moveBox.find('li').each(function(){
			var str = $(this).find('a').html();
			$(this).find('a').html(countCharacters(str,13));
		})
        
		//导航判断是否有多行
		if($('.top_nav').size()>0){
			if($('.subNav ul').height() <= 40){
				$('.subNav').addClass('oneNav');
			}
		};
		//倒计时
		$('.countdown').bindYMUI('CountDown');
		//预售时间&售完加图片
		$('.col3 li').each(function(){
			var $that = $(this).find('.prod-countdown');
			if(!$that.is(':animated')){
				$(this).hover(function(){
					$that.stop().animate({'right':'0'});
					},function(){
					$that.stop().animate({'right':'-140px'});
				});
			};
			if($(this).find('.prod-num a').hasClass('btn-over')){
				$(this).find('.prod-img').prepend('<span class="sellout"></span>');
			};
		});

		//产品中文名黎裁切
		$('.prod-cn b').each(function(){
			var $en = $(this).html();
			$(this).html(YM.page.set.showNameLength($en,32));
		})
		$('.prod-cn span').each(function(){
			var $en = $(this).html();
			$(this).html(YM.page.set.showNameLength($en,32));
		})
	}
	YM.page.set.showNameLength = function(name,len){
		var singleNum = 0;
		var neWstr = '',singleChar = '';
		for(var i = 0;i < name.length;i++){
		singleChar = name.charAt(i).toString();
		if(name.charCodeAt(i) < 0 || name.charCodeAt(i) > 255){
			singleNum += 2;
		}else{
			singleNum++;
		};
		if(singleNum > len){
			//neWstr += "...";
			break;
		};
			neWstr +=singleChar;
		};
		return neWstr;
	}; 
	YM.page.set.tab = function(){
		 var items = $('.fold').find('li');
		 items.addClass('e-childload');
		 items.mouseenter(function() {
			 items.removeClass('on');
			 $(this).addClass('on').bindYMUI('LoadChildImage');
		 }); 
	};
	YM.page.set.showBtn = function(){
		$('.prod-md strong').each(function(){
			$(this).hover(function(){
				$(this).parents('.prod-info').css('position','relative');
				$(this).parent().next('.prod-text').show().css({'position':'absolute','left':'0','top':'25px'});
			},function(){
				$(this).parent().next('.prod-text').hide();
			})
		});
	}
	YM.page.set.showBox = function(){
		$('.prod-info').each(function(){
			var timer = null;
			var This = $(this);
			This.find('.prod-feature').hover(function(){
				clearInterval(timer);
				var position = $(this).find('b').position();
				This.find('.prod-feature-model').css({'top':position.top + 30,'left':position.left - 140}).fadeIn()
			},function(){
				timer = setInterval(function(){
					This.find('.prod-feature-model').fadeOut();
				},1000)
			});
		})
		
	}
	YM.page.set.init();
})(jQuery);