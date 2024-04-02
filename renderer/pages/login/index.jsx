import React, { useState } from 'react'

import Input from '../../components/Form/Input/Input'
import Button from '../../components/ui/Button/Button'

import * as Api from '../../api'
import Layout from '../../layouts/Layout'
import { handleSuccessLogin } from '../../utils/authHandlers'
import { showErrorSnackbar } from '../../utils/errorSnackBar'
import { showSuccessSnackbar } from '../../utils/successSnackbar'

import s from './Login.module.scss'

const LoginPage = () => {
	const [data, setData] = useState({
		email: '',
		password: ''
	})

	const handleSubmit = async e => {
		try {
			e.preventDefault()

			const preparedData = {
				...data,
				email: data.email?.trim(),
				password: data.password?.trim()
			}

			const { email, password } = preparedData

			if (!email.trim()) {
				return showErrorSnackbar({
					message: 'Почта не указана'
				})
			}

			if (!(email.indexOf('@') >= 0)) {
				return showErrorSnackbar({
					message: 'Почта указана некорретно'
				})
			}

			if (!password.trim()) {
				return showErrorSnackbar({
					message: 'Пароль не указан'
				})
			}

			await Api.auth
				.login(data)
				.then(res => {
					showSuccessSnackbar('Успешный вход в аккаунт')
					handleSuccessLogin(res)
				})
				.catch(() => {
					showErrorSnackbar({ message: 'Что-то пошло не так' })
				})
		} catch (err) {
			showErrorSnackbar({ message: 'Что-то пошло не так' })
			console.error(err)
		}
	}

	const onHandleChange = (value, key) => {
		setData(prevData => ({
			...prevData,
			[key]: value
		}))
	}

	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<h1 className={s.title}>Авторизация</h1>
				<form onSubmit={handleSubmit} className={s.form}>
					<Input
						label='Email'
						type='text'
						id='email'
						name='email'
						onChange={e => onHandleChange(e.target.value, 'email')}
						value={data.email}
						className={s.input}
					/>
					<Input
						label='Пароль'
						type='password'
						id='password'
						name='password'
						onChange={e => onHandleChange(e.target.value, 'password')}
						value={data.password}
						className={s.input}
					/>
					<Button type='submit'>Войти</Button>
				</form>
			</div>
		</div>
	)
}
LoginPage.getLayout = page => {
	return <Layout title='Auth'>{page}</Layout>
}
export default LoginPage
