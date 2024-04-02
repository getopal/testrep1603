import axios from '../../utils/axios'

export const getAll = async () => {
	const response = await axios.get('/user')
	return response.data
}
