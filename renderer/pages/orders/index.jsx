import React, { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'

import CreateOrder from '../../components/CreateOrder/CreateOrder'
import OrderTable from '../../components/OrderTable/OrderTable'
import Tabs from '../../components/Tabs/Tabs'

import { state } from '../../state'

const Orders = () => {
	const [active, setActive] = useState(0)
	const snap = useSnapshot(state)
	const renderBlock = active => {
		switch (active) {
			case 0:
				return <CreateOrder />
			case 1:
				return <OrderTable />
		}
	}

	const tabs = ['Создать заказ', 'Все заказы', 'Аккаунты']

	return (
		<div>
			<Tabs array={tabs} active={active} onChange={setActive} className={''} />
			{renderBlock(active)}
		</div>
	)
}

export default Orders
