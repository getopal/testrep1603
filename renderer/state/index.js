import { proxy } from 'valtio'

const state = proxy({
	user: null
})

export { state }
