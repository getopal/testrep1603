import { setCookie } from 'nookies'

export const handleSuccessLogin = data => {
	setCookie(null, '_token', data.token, {
		path: '/'
	})
	location.href = '/'
}
