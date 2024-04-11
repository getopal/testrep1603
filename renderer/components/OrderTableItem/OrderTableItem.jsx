import s from './OrderTableItem.module.scss'

const OrderTableItem = ({ order, handleDelete }) => {
	return (
		<tr className={s.wrapper}>
			<td>{order.title}</td>
			<td>{order.adress}</td>
			<td>{order.adressee_name}</td>
			<td>{order.phone}</td>
			<td>{order.time}</td>
			<td>{order.comment}</td>
			<td>
				<div className={s.actions_block}>
					<button>Редактировать</button>
					<button onClick={() => handleDelete(order.id)}>Удалить</button>
				</div>
			</td>
		</tr>
	)
}

export default OrderTableItem
