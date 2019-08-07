$(function(){
	$('.jj-span .jia,.jj-span .jian').click(function(){
		var $num2=0;
		var $num=0;
		var $num_subtotal=$(this).parent().parent().prev().find('strong').html();
		if($(this).attr('class')=='jia'){
			$num=parseInt($(this).parent().find('.input1').val());
			$num++;
			$(this).parent().find('.input1').val($num);
//			console.log($num);
		}else if($(this).attr('class')=='jian'){
			$num=parseInt($(this).parent().find('.input1').val());
			$num--;
			if($num<=1){
				$num=1;
			}
			$(this).parent().find('.input1').val($num);
		}
//		$('.jj-span .input1').each(function(){
//			$num2+=parseInt($(this).html());
//		})
		var $num1=$num*$num_subtotal;
		$(this).parent().parent().next().find('strong').html($num1);
//		$('.num_car').html($num2);

	})
	$('.jj-span .jia,.jj-span .jian,.shopcar_1_body .del,.shopcar_1_body .input1').click(function(){
		var $num_sellall=0;
		$('.shop_money_all').each(function(){
			$num_sellall+=parseInt($(this).html());
		})
		$('.shop_all1').html($num_sellall);
		$('.shop_all2').html($num_sellall);
	})
	
})
