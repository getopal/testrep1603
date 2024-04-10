import { isAxiosError } from 'axios'
import { destroyCookie } from 'nookies'

import axios from '../../utils/axios'

export const getAllOrders = async () => {
	const response = await axios.get('/order')
	return response.data
}

export const deleteOrder = async id => {
	const response = await axios.delete(`/order/${id}`)
	return response.data
}
