import { proxy } from 'valtio'

const state = proxy({
	user: null,
	ordersArray: []
})

export { state }
