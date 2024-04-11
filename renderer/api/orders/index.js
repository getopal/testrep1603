import { isAxiosError } from 'axios'
import { destroyCookie } from 'nookies'

import axios from '../../utils/axios'

export const createOrder = async values => {
	try {
		const response = await axios.post('/order', values)
		return response.data
	} catch (error) {
		if (isAxiosError(error)) {
			if (
				error.response &&
				error.response.data &&
				error.response.data.message
			) {
				const errorMessage = error.response.data.message
				throw new Error(errorMessage)
			} else {
				throw error
			}
		} else {
			throw error
		}
	}
}
export const getAllOrders = async () => {
	const response = await axios.get('/order')
	return response.data
}

export const deleteOrder = async id => {
	const response = await axios.delete(`/order/${id}`)
	return response.data
}
