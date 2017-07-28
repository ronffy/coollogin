/*
** index.js
** 2017.7.28
** from: https://github.com/wanghairong-i/coollogin
*/
import $ from './common/jquery'
import '../css/reset'
import '../css/common'
import '../css/index'

$(function(){
	$('#v-main').show();//webpack打包样式表的短板时需要js加载时才能将样式推送到页面上，这时可能会造成页面无样式错乱。 所以先将main容器隐藏，待css样式有了后再显示此容器
	const $modelbox = $('#v-modelbox'),
			$btnbox = $('#v-btnbox'),
			$body = $('body');
	let $btnReturn = $('#v-icon-return');

	const model = {
		state: false, //记录当前是否显示了登录或注册弹层，默认false
		type: 'login',  //标记显示的是登录弹层还是注册弹层
		set state(b){
			toggleModelState(b);
		},
		set type(type){
			toggleModelType(type);
		}
	};

	$body
	.on('click', '#v-btn-login', () => {
		Object.assign(model, {
			state: true,
			type: 'login'
		});
	})
	.on('click', '#v-btn-signup', () => {
		Object.assign(model, {
			state: true,
			type: 'signup'
		});
	})
	.on('click', '#v-icon-return', function(){
		model.state = false;
	});

	function toggleModelState(bool = false){
		if(bool === true){//显示登录/注册弹层时
			$btnReturn.show();
			$btnbox.addClass('showmodel');
		}else{//关闭登录/注册弹层时
			$btnReturn.hide();
			$btnbox.removeClass('showmodel');
			$modelbox.removeClass('overup-login overup-signup').find('.modelbox-info').hide().css('opacity', 0);
		}
	}

	function toggleModelType(type = 'login'){
		let relati = 'signup';
		let signupState = ''; //弹层收回时，根据当前type设置需要高亮的modelbox位置
		type === 'signup' ? relati = 'login' : '';
		$btnbox.removeClass(`btnbox-${relati}`).addClass(`btnbox-${type}`);
		$modelbox
		.removeClass(`overup-${relati} ${type === 'signup' ? '' : 'signupState'}`)
		.addClass(`overup-${type} ${type === 'signup' ? 'signupState' : ''}`)
		.find('.modelbox-info').hide().css('opacity', 0);
		$(`.modelbox-${type}`).show(function(){
			setTimeout(() => {
				$(this).css('opacity','1');
			},100)
		})
	}
});
















































function clog(...args){
	console.log(...args);
}