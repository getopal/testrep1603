import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useSnapshot } from 'valtio'

import s from '../../pages/register/Register.module.scss'

import * as Api from '../../api'
import { state } from '../../state'
import { showErrorSnackbar } from '../../utils/errorSnackBar'
import { showSuccessSnackbar } from '../../utils/successSnackbar'
import Input from '../Form/Input/Input'
import Button from '../ui/Button/Button'

const CreateOrder = () => {
	const router = useRouter()
	const [data, setData] = useState({
		title: '',
		adress: '',
		adressee_name: '',
		phone: '',
		time: '',
		comment: ''
	})
	const snap = useSnapshot(state)

	const handleSubmit = async e => {
		e.preventDefault()

		const preparedData = {
			...data
		}

		const { title, adress, adressee_name, phone, time, comment } = preparedData

		if (!title.trim()) {
			return showErrorSnackbar({
				message: 'title не указана'
			})
		}

		if (!adress.trim()) {
			return showErrorSnackbar({
				message: 'adress не указана'
			})
		}
		if (!adressee_name.trim()) {
			return showErrorSnackbar({
				message: 'adressee_name не указана'
			})
		}
		if (!phone.trim()) {
			return showErrorSnackbar({
				message: 'title не указана'
			})
		}
		if (!time.trim()) {
			return showErrorSnackbar({
				message: 'title не указана'
			})
		}
		if (!comment.trim()) {
			return showErrorSnackbar({
				message: 'title не указана'
			})
		}

		await Api.orders
			.createOrder(data)
			.then(() => {
				Api.orders.getAllOrders().then(res => {
					state.ordersArray = res
				})
				showSuccessSnackbar('Заказ создан успешно')
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
		<form onSubmit={handleSubmit} className={s.form}>
			<div className={s.row}>
				<Input
					width='100%'
					label='title'
					type='text'
					id='title'
					name='title'
					onChange={e => onHandleChange(e.target.value, 'title')}
					value={data.title}
				/>
				<Input
					width='100%'
					label='adress'
					type='text'
					id='adress'
					name='adress'
					onChange={e => onHandleChange(e.target.value, 'adress')}
					value={data.adress}
				/>
			</div>
			<div className={s.row}>
				<Input
					width='100%'
					label='adressee_name'
					type='text'
					id='adressee_name'
					name='adressee_name'
					onChange={e => onHandleChange(e.target.value, 'adressee_name')}
					value={data.adressee_name}
				/>
				<Input
					width='100%'
					label='phone'
					type='text'
					id='phone'
					name='phone'
					onChange={e => onHandleChange(e.target.value, 'phone')}
					value={data.phone}
				/>
			</div>
			<Input
				width='100%'
				label='time'
				type='text'
				id='time'
				name='time'
				onChange={e => onHandleChange(e.target.value, 'time')}
				value={data.time}
			/>
			<Input
				width='100%'
				label='comment'
				type='text'
				id='comment'
				name='comment'
				onChange={e => onHandleChange(e.target.value, 'comment')}
				value={data.comment}
			/>

			<Button type='submit'>Создать заказ</Button>
		</form>
	)
}

export default CreateOrder
