import $ from './common/jquery'
import '../css/reset'
import '../css/common'
import '../css/index'

$(function(){
	$('#v-main').show();
	const $modelbox = $('#v-modelbox');
	const $body = $('body');
	let $btnReturn = $('#v-icon-return');

	$body
	.on('click', '#v-btn-login', () => {
		toggleModel('login');
	})
	.on('click', '#v-btn-signup', () => {
		toggleModel('signup');
	})
	.on('click', '#v-icon-return', function(){
		$(this).hide();
		$modelbox.removeClass('overup-login overup-signup').find('.modelbox-info').hide().css('opacity', 0);
	});

	function toggleModel(state){
		$btnReturn.show();
		state = state || 'login';
		let relati = 'signup';
		state === 'signup' ? relati = 'login' : '';
		$modelbox
		.addClass(`overup-${state}`)
		.removeClass(`overup-${relati}`)
		.find('.modelbox-info').hide().css('opacity', 0);
		$(`.modelbox-${state}`).show(function(){
			setTimeout(() => {
				$(this).css('opacity','1');
			},100)
		})
	}
})
















































function clog(...args){
	console.log(...args);
}