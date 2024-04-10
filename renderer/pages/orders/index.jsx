import { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'

import * as Api from '../../api'
import { state } from '../../state'

const Orders = () => {
	const snap = useSnapshot(state)
	const [orders, setOrders] = useState([])

	const fetchAllOrders = async () => {
		Api.orders.getAllOrders().then(res => {
			setOrders(res)
		})
	}

	const deleteOrder = async id => {
		Api.orders.deleteOrder(id).then(res => {
			Api.orders.getAllOrders().then(res => {
				setOrders(res)
			})
		})
	}

	useEffect(() => {
		fetchAllOrders()
	}, [])

	return (
		<div>
			{orders.map((order, index) => (
				<div key={index}>
					<div>{order.title}</div>
					<div>{order.phone}</div>
					<div>{order.time}</div>
					{snap.user?.isAdmin ? (
						<button onClick={() => deleteOrder(order.id)}>Delete</button>
					) : null}
				</div>
			))}
		</div>
	)
}

export default Orders
