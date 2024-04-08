import { useRouter } from 'next/router'
import React, { useState } from 'react'

import Input from '../../components/Form/Input/Input'
import UploadFile from '../../components/Form/UploadFile/UploadFile'
import Button from '../../components/ui/Button/Button'

import * as Api from '../../api'
import { showErrorSnackbar } from '../../utils/errorSnackBar'
import { showSuccessSnackbar } from '../../utils/successSnackbar'

import s from './Register.module.scss'

const RegisterPage = () => {
	const router = useRouter()
	const [data, setData] = useState({
		nick: '',
		email: '',
		password: '',
		password_confir: '',
		ava: null
	})

	const handleSubmit = async e => {
		e.preventDefault()

		const preparedData = {
			...data,
			email: data.email?.trim(),
			password: data.password?.trim(),
			nick: data.nick?.trim()
		}

		const { email, password, password_confir, nick } = preparedData

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

		if (!nick.trim()) {
			return showErrorSnackbar({
				message: 'Никнейм не указан'
			})
		}

		if (!password.trim()) {
			return showErrorSnackbar({
				message: 'Пароль не указан'
			})
		}

		if (password !== password_confir) {
			return showErrorSnackbar({
				message: 'Пароли не совпадают'
			})
		}

		if (password.trim().length < 6) {
			return showErrorSnackbar({
				message: 'Пароль не может быть меньше 6 симолов'
			})
		}

		await Api.auth
			.register(data)
			.then(() => {
				showSuccessSnackbar('Аккаунт зарегистрован успешно')
				router.push('/login')
			})
			.catch(() => {
				showErrorSnackbar({ message: 'Что-то пошло не так' })
			})
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
				<h1 className={s.title}>Регистрация</h1>
				<form onSubmit={handleSubmit} className={s.form}>
					<div className={s.row}>
						<Input
							width='100%'
							label='Email'
							type='text'
							id='email'
							name='email'
							onChange={e => onHandleChange(e.target.value, 'email')}
							value={data.email}
						/>
						<Input
							width='100%'
							label='Имя пользователя'
							type='nick'
							id='nick'
							name='nick'
							onChange={e => onHandleChange(e.target.value, 'nick')}
							value={data.nick}
						/>
					</div>
					<div className={s.row}>
						<Input
							width='100%'
							label='Пароль'
							type='password'
							id='password'
							name='password'
							onChange={e => onHandleChange(e.target.value, 'password')}
							value={data.password}
						/>
						<Input
							width='100%'
							label='Подтверждение пароля'
							type='password'
							id='password_confir'
							name='password_confir'
							onChange={e => onHandleChange(e.target.value, 'password_confir')}
							value={data.password_confir}
						/>
					</div>
					<UploadFile
						setValue={value => onHandleChange(value, 'ava')}
						file={data.ava}
						id='ava'
						placeholder='Добавить фото профиля'
					/>
					<Button type='submit'>Создать профиль</Button>
				</form>
			</div>
		</div>
	)
}

export default RegisterPage
