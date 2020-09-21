$(function(){
	var elemento = $('.navegacao');
	function removeestilo(){
		var abaaba = $('.navegacao');

		for(var i = 0; i < abaaba.length; i++){
			abaaba[i].children[0].css('display','none');
	        abaaba[i].children[1].css('font-weight','normal');
		}
	}

	var alternarAbas = function(){
		var aba = $(this).attr('aba');
		var elementoaba = aba;

		removeestilo();

		$('#publicacoes').css('display','none');
		$('#igtv').css('display','none');
		$('#marcados').css('display','none');

		elementoaba.css('display','block');

		$(this).children[0].css('display','block');
        $(this).children[1].css('font-weight','bold');
	}

	for(var i=0; i < elemento.length; i++){
		elemento[i].click(function(){
			alternarAbas();
		})
	}
})