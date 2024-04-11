import { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'

import * as Api from '../../api'
import { state } from '../../state'
import OrderTableItem from '../OrderTableItem/OrderTableItem'
import Table from '../Table/Table'

import s from './OrderTable.module.scss'

const OrderTable = () => {
	const snap = useSnapshot(state)
	// const [allOrders, setAllOrders] = useState([])
	// useEffect(() => {
	// 	Api.orders.getAllOrders().then(res => {
	// 		setAllOrders(res)
	// 	})
	// }, [])
	const handleDelete = id => {}
	console.log(snap.ordersArray)
	return (
		<div className={s.wrapper}>
			<Table
				thead={[
					{ title: 'Номер заказа' },
					{ title: 'Адрес' },
					{ title: 'Имя заказчика' },
					{ title: 'Номер' },
					{ title: 'Время' },
					{ title: 'Комментарий' }
				]}
			>
				{snap.ordersArray.map((item, index) => (
					<OrderTableItem
						handleDelete={handleDelete}
						order={item}
						key={index}
					/>
				))}
			</Table>
		</div>
	)
}

export default OrderTable
