const passport = require('passport');


module.exports = app =>{

	app.get(				//服务器会向该链接发送请求，获得返回值
		'/auth/google',				//发送的链接
		passport.authenticate(		//可以把请求一脚踢进passport流程的函数
			'google',
			{
				scope:['profile','email']
			}
		)
	);

	app.get(
		'/auth/google/callback',
		passport.authenticate(
			'google'
		)
	);

}
