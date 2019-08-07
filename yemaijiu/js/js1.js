//banner—1
$(function(){

	/*------search-------*/
	$('#search').focus(function(){
		$(this).css('background','#ffffff');
		$(this).attr('placeholder','');
	})
	$('#search').blur(function(){
		if ($('#search').val()=='') {
			$(this).attr('placeholder','请输入您要查找的商品名称');
		}
		$(this).css('background','#f4f1f0');
		
	})
	/*------shoppingcart-------*/
	$('.shoppingcart').hover(function(){
		$(this).css('background-position','0 -195px');
		$(this).find('p').css('display','block');
	},function(){
		$(this).css('background-position','0 -160px');
		$(this).find('p').css('display','none');
	})
	/*--------Nav--------*/
	$('.navRight>li').hover(function(){
		if ($(this).index()==1) {
			$(this).css('background','#bc0001');
			$(this).next().css('background','transparent');
			$(this).next().next().css('background','transparent');
		}else{
			$(this).css('background','#bc0001');
			$(this).next().css('background','transparent');
			$(this).next().next().css('background','transparent');
			$(this).prev().css('background','transparent');
			$(this).prev().prev().css('background','transparent');
		}
	},function(){
		if ($(this).index()==1) {
			$(this).css('background','');
			$(this).next().css('background','#a01705');
			$(this).next().next().css('background','#a02c2c');
		}else{
			$(this).css('background','');
			$(this).next().css('background','#a01705');
			$(this).next().next().css('background','#a02c2c');
			$(this).prev().css('background','#a02c2c');
			$(this).prev().prev().css('background','#a01705');
		}
	})
	/*------banner-------*/
	$n = 0;
	$l = $('.banner1>li').size();
	var timer = null;
	function start(){		
		$('.banner1>li').eq($n).stop().animate({'opacity':'1'},1000).css('display','block').siblings().stop().animate({'opacity':'0'},1000,function(){$(this).css('display','none')});
		$('.banner2>li').eq($n).addClass('list1').siblings().removeClass('list1');
	}
	function move(){
		if ($n>=$l-1) {
			$n=-1;
		}
		$n++;
		start();
	}
	$('.banner2>li').hover(function(){
		clearInterval(timer);
		$n = $(this).index();
		start();
	},function(){
		timer = setInterval(move,5000);
	})
	timer = setInterval(move,5000);
	$width1 = $('.banner1>li').width();	
	$height1 = $('.banner1>li').height();
	$('.banner1>li').hover(function(){
//		console.log($width1*1.4);
		$(this).stop().animate({'width':$width1*1.1,'height':$height1*1.1,'left':-$width1*0.05,'top':-$height1*0.05},1000);
	},function(){
		$(this).stop().animate({'width':$width1,'height':$height1,'left':0,'top':0},1000);
	})	
//nav--------------------------------------------------------------------------------
	
	
	
//选酒中心--------dd——1-------------------
	$('.head_1_xuanjiuzhongxin_dl_1').hover(function(){

		$('.head_1_xuanjiuzhongxin_dd_1').css({'display':'block'}).stop().animate({'left':202,'opacity':0.8},1000);
	},function(){
		$('.head_1_xuanjiuzhongxin_dd_1').css({'display':'none'}).stop().animate({'left':188,'opacity':0},1000);		
	})
//选酒中心------一键选酒--------------dd--2
	$('.head_1_xuanjiuzhongxin_dl_2').hover(function(){
		$('.head_1_xuanjiuzhongxin_dd_2').css({'display':'block'}).stop().animate({'left':202,'opacity':0.8},1000);
	},function(){
		$('.head_1_xuanjiuzhongxin_dd_2').css({'display':'none'}).stop().animate({'left':188,'opacity':0},1000);		
	})
//限时闪购
	$('.body_1_jingpinshangou_left_1>h4>span').hover(function(){
		
		$index = $(this).index();
		//这里为什么不能用this
		$a=0;
		$('.body_1_jingpinshangou_left_1>h4>span').eq($index).addClass('jingpinshangou_list1').siblings().removeClass('jingpinshangou_list1');
		$(this).find('a').addClass('jingpinshangou_list2').parent().siblings().find('a').removeClass('jingpinshangou_list2');

		$('.body_1_jingpinshangou_left_1>ul').eq($index).addClass('jingpinshangout_list3').siblings().removeClass('jingpinshangout_list3');	
	})
	

//人气抢购
		function move99(){
			$('#body_1_jingpinshangou_right_2_box').stop().animate({'top':-318*$r2});
		}
		$('.body_1_jingpinshangou_right_1_ul>li').hover(function(){
			$r2=$(this).index();
			move99();

		})

//banner_2
/*		$b2=0;
		$banner2=null;
		$bol1=true;
		$size1=$('.banner_2>ul>li').size();
		function move2(){
			$('.banner_2>ul').stop().animate({'left':-600*$b2});
			$('.banner_2_ul2>li').eq($b2).addClass('banner_2_ul2_list').siblings().removeClass('banner_2_ul2_list');
		}
		function start2(){
			if($b2==0){
				$bol1=true;
			}
			if($b2==$size1-1){
				$bol1=false;
			}
			if($bol1){
				$b2++;
			}else{
				$b2--;
			}
			move2();
		}
		$('.banner_2_ul2>li').hover(function(){
			clearInterval($banner2);
			$b2=$(this).index();
			move2();
		},function(){
			$banner2=setInterval(start2,3000);
		})
		$banner2=setInterval(start2,3000);
		
		//banner_3
		$size3=$('.banner_3>ul>li').size();
		$bthr=0;
		$timeb3=null;
			$('.banner_3>ul>li').hover(function(){
				clearInterval($timerb3);
				$bthr= $(this).index()-1;
				startb3();
				},function(){
					$timerb3 = setInterval(startb3,2000);
				})
			function moveb3(){
				$('.banner_3>ul>li').eq($bthr).stop().animate({'width':450},600).siblings().stop().animate({'width':150},600);
			}
			function startb3(){
				$bthr++;
				if($bthr>=$size3){
					$bthr=0;
				}
//				console.log($size3);
//				console.log($bthr);
				moveb3();
			}
			$timerb3=setInterval(startb3,2000);*/




//transalte_1
			
			$('.translate_1>ul>li').hover(function(){
				$tt=$(this).index();
				$('.translate_1>ul>li').eq($tt).find('a').find('img').stop().animate({'margin':'0 0 0 -80px'},600);

			},function(){
				$('.translate_1>ul>li').eq($tt).find('a').find('img').stop().animate({'margin':'0 0 0 0'},600);

			})

//banner——4
		$b4=0;
		$b44=1;
		function moveb4(){
			$('.banner_4_box').stop().animate({'left':$b4*950},600);	
		}
		
		$('.banner_4_button_left').click(function(){
			$b4++;
			$b44--;
			$('.banner_4_button_center').html($b44+'/3');
			$('.banner_4_button_right').css({'opacity':'1'});
			if($b4>=0){
				$b4=0;	
			$('.banner_4_button_left').css({'opacity':'0.5'});

			}	
			if($b44<=1){
				$b44=1;	
			$('.banner_4_button_center').html($b44+'/3');
			}
			moveb4();
			console.log($b4);
		})
	
		$('.banner_4_button_left').hover(function(){
			$('.banner_4_button_left').css({'background-position':'-193px -65px','opacity':'1'});
			if($b4>=0){
				$('.banner_4_button_left').css({'background-position':'-130px -76px','opacity':'0.5'});				
			}
		},function(){
				if($b4>=0){
				$('.banner_4_button_left').css({'background-position':'-130px -76px','opacity':'0.5'});						
				}else{
					$('.banner_4_button_left').css({'background-position':'-130px -76px','opacity':'1'});
				}					
		})
		
		
		$('.banner_4_button_right').hover(function(){
			$('.banner_4_button_right').css({'background-position':'-193px -48px','opacity':'1'});
			if($b4<=-2){
				$('.banner_4_button_right').css({'background-position':'-154px -76px','opacity':'0.5'});				
			}
		},function(){
			if($b4<=-2){
				$('.banner_4_button_right').css({'background-position':'-154px -76px','opacity':'0.5'});			
			}else{
				$('.banner_4_button_right').css({'background-position':'-154px -76px','opacity':'1'});				
			}
							
		})
			
		$('.banner_4_button_right').click(function(){
			$b4--;
			$b44++;
			$('.banner_4_button_center').html($b44+'/3');
			$('.banner_4_button_left').css({'opacity':'1'});								
			if($b4<=-2){
				$b4=-2;
			$('.banner_4_button_right').css({'opacity':'0.5'});
			}
			if($b44>=3){
				$b44=3;
			$('.banner_4_button_center').html($b44+'/3');
			}
			moveb4();
			console.log($b4);

		})
		
		
//		banner_5
		$b5=0;
		$banner5=null;
		$bol5=true;
		$size5=$('.banner_5_ul2>li').size();
		console.log($size5);
		function move5(){
			$('.banner_5_ul1').stop().animate({'left':-760*$b5});
			$('.banner_5_ul2>li').eq($b5).addClass('banner_5_ul2_list').siblings().removeClass('banner_5_ul2_list');
		}
		function start5(){
			if($b5==0){
				$bol5=true;
			}
			if($b5==$size5-1){
				$bol5=false;
			}
			if($bol5){
				$b5++;
			}else{
				$b5--;
			}
			move5();
		}
		$('.banner_5_ul2>li').hover(function(){
			clearInterval($banner5);
			$b5=$(this).index();
			move5();
		},function(){
			$banner5=setInterval(start5,3000);
		})
		$banner5=setInterval(start5,3000);



//banner_6
		$b6=0;
		$banner6=null;
		$bol6=true;
		$size6=$('.banner_6_ul2>li').size();
		function move6(){
			$('.banner_6_ul1').stop().animate({'left':-760*$b6});
			$('.banner_6_ul2>li').eq($b6).addClass('banner_6_ul2_list').siblings().removeClass('banner_6_ul2_list');
		}
		function start6(){
			if($b6==0){
				$bol6=true;
			}
			if($b6==$size6-1){
				$bol6=false;
			}
			if($bol6){
				$b6++;
			}else{
				$b6--;
			}
			move6();
		}
		$('.banner_6_ul2>li').hover(function(){
			clearInterval($banner6);
			$b6=$(this).index();
			move6();
		},function(){
			$banner6=setInterval(start6,3000);
		})
		$banner6=setInterval(start6,3000);
		
		
//		<!--
//			作者：13522772622@163.com
//      	时间：2017-02-27
//      	描述：conmon_sec_right
//		-->
		$('.conmon_sec_right>ul:eq(1)>li').hover(function(){
			$ss=$(this).index();
			console.log($ss);
			$('.conmon_sec_right>ul:eq(1)>li').eq($ss).addClass('hot_hold_on').removeClass('hidden_on').siblings().removeClass('hot_hold_on').addClass('hidden_on');
		})
//		<!--
//			作者：13522772622@163.com
//      	时间：2017-02-27
//      	描述：conmon_sec_right3
//		-->
		$('.conmon_sec_right3>ul:eq(1)>li').hover(function(){
			$ss3=$(this).index();
			$('.conmon_sec_right3>ul:eq(1)>li').eq($ss3).addClass('hot_hold_on').removeClass('hidden_on').siblings().removeClass('hot_hold_on').addClass('hidden_on');
		})
//		<!--
//			作者：13522772622@163.com
//      	时间：2017-02-27
//      	描述：conmon_sec_right2
//		-->
		$('.conmon_sec_right2>ul:eq(1)>li').hover(function(){
			$ss2=$(this).index();
			$('.conmon_sec_right2>ul:eq(1)>li').eq($ss2).addClass('hot_hold_on').removeClass('hidden_on').siblings().removeClass('hot_hold_on').addClass('hidden_on');
		})
		
//		<!--
//			作者：13522772622@163.com
//      	时间：2017-02-27
//      	描述：conmon_sec_right_1
//		-->
		$('.conmon_sec_right_1>ul>li').hover(function(){
			$sss=$(this).index();
			console.log($sss);
			$('.conmon_sec_right_1>ul>li').eq($sss).addClass('hot_hold_on').removeClass('hidden_on').siblings().removeClass('hot_hold_on').addClass('hidden_on');
		})
//		<!--
//			作者：13522772622@163.com
//      	时间：2017-02-27
//      	描述：conmon_sec_right_2
//		-->
		$('.conmon_sec_right_2>ul>li').hover(function(){
			$sss2=$(this).index();
			$('.conmon_sec_right_2>ul>li').eq($sss2).addClass('hot_hold_on').removeClass('hidden_on').siblings().removeClass('hot_hold_on').addClass('hidden_on');
		})		
// banner 7
		$b7=0;
		$banner7=null;
		$bol7=true;
		$size7=$('.banner_7_ul2>li').size();
		console.log($size5);
		function move7(){
			$('.banner_7_ul1').stop().animate({'left':-760*$b7});
			$('.banner_7_ul2>li').eq($b7).addClass('banner_7_ul2_list').siblings().removeClass('banner_7_ul2_list');
		}
		function start7(){
			if($b7==0){
				$bol7=true;
			}
			if($b7==$size7-1){
				$bol7=false;
			}
			if($bol7){
				$b7++;
			}else{
				$b7--;
			}
			move7();
		}
		$('.banner_7_ul2>li').hover(function(){
			clearInterval($banner7);
			$b7=$(this).index();
			move7();
		},function(){
			$banner7=setInterval(start7,3000);
		})
		$banner7=setInterval(start7,3000);
		
		
//banner_8
		$b8=0;
		$banner8=null;
		$bol8=true;
		$size8=$('.banner_8_ul2>li').size();
		function move8(){
			$('.banner_8_ul1').stop().animate({'left':-760*$b8});
			$('.banner_8_ul2>li').eq($b8).addClass('banner_8_ul2_list').siblings().removeClass('banner_8_ul2_list');
		}
		function start8(){
			if($b8==0){
				$bol8=true;
			}
			if($b8==$size8-1){
				$bol8=false;
			}
			if($bol8){
				$b8++;
			}else{
				$b8--;
			}
			move8();
		}
		$('.banner_8_ul2>li').hover(function(){
			clearInterval($banner8);
			$b8=$(this).index();
			move8();
		},function(){
			$banner8=setInterval(start8,3000);
		})
		$banner8=setInterval(start8,3000);


// banner 9
		$b9=0;
		$banner9=null;
		$bol9=true;
		$size9=$('.banner_9_ul2>li').size();
		console.log($size5);
		function move9(){
			$('.banner_9_ul1').stop().animate({'left':-760*$b9});
			$('.banner_9_ul2>li').eq($b9).addClass('banner_9_ul2_list').siblings().removeClass('banner_9_ul2_list');
		}
		function start9(){
			if($b9==0){
				$bol9=true;
			}
			if($b9==$size9-1){
				$bol9=false;
			}
			if($bol9){
				$b9++;
			}else{
				$b9--;
			}
			move9();
		}
		$('.banner_9_ul2>li').hover(function(){
			clearInterval($banner9);
			$b9=$(this).index();
			move9();
		},function(){
			$banner9=setInterval(start9,3000);
		})
		$banner9=setInterval(start9,3000);
})