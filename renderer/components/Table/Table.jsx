import s from './Table.module.scss'

export default function Table({
	children,
	thead,
	className,
	sort,
	setSort,
	isHaveData = true
}) {
	const handleChangeSort = item => {
		if (!setSort || !isHaveData) return

		const newSort = {
			type: sort?.type === 'desc' ? 'asc' : 'desc',
			title: item
		}

		setSort(newSort)
	}

	return (
		<div className={`${s.wrapper} ${className ? className : ''}`}>
			<thead>
				<tr>
					{thead.map((item, index) => {
						return (
							<td key={index} className={item?.sort ? 'sortable' : ''}>
								<p
									onClick={() => handleChangeSort(item.title)}
									className={
										sort?.title === item.title && sort?.type === 'desc'
											? 'active'
											: ''
									}
								>
									{item.title}
									{isHaveData && item?.sort && (
										<img
											src='/pic/arrow-up.svg'
											alt='arrow'
											className='sort_arrow'
										/>
									)}
								</p>
							</td>
						)
					})}
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</div>
	)
}
