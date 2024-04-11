import s from './Tabs.module.scss'

export default function Tabs({ array, active, onChange, className }) {
	return (
		<div className={`${s.wrapper}  ${className ? className : ''}`}>
			{array.map((item, index) => {
				return (
					<li
						className={active === index ? 'active' : ''}
						onClick={() => onChange(index)}
						key={index}
					>
						{item.image && <img src={item.image} alt={item.title} />}
						{item.title ? item.title : item}
					</li>
				)
			})}
		</div>
	)
}
