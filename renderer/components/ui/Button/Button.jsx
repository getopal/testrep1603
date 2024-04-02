import React from 'react'

import s from './Button.module.scss'

const Button = ({ children, className, onClick, type }) => {
	return (
		<button
			type={type || 'button'}
			className={`${s.btn} ${className || ''}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export const OutlineButton = ({ children, className, onClick, type }) => {
	return (
		<Button
			type={type}
			className={`${s.btnOutline} ${className || ''}`}
			onClick={onClick}
		>
			{children}
		</Button>
	)
}

export default Button
