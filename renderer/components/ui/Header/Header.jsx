import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useSnapshot } from 'valtio'

import { state } from '../../../state'

import s from './Header.module.scss'

const Header = () => {
	const snap = useSnapshot(state)
	const headerRef = useRef(null)
	const { t } = useTranslation()

	const headerNavNoAuth = [
		{
			display: t('Главная'),
			path: '/'
		},
		{
			display: 'Вход',
			path: '/login'
		},
		{
			display: 'Регистрация',
			path: '/register'
		}
	]

	const headerNavAuth = [
		{
			display: t('Главная'),
			path: '/'
		},
		{
			display: t('Заказы'),
			path: '/orders'
		},
		...(snap.user?.isAdmin
			? [
					{
						display: t('Admin Dashboard'),
						path: '/admin-dashboard'
					}
				]
			: []),
		{
			display: (
				<div className={s.profile}>
					<Image src={snap.user?.ava} width={50} height={50} />
					<div>{snap.user?.nick}</div>
				</div>
			),
			path: '/profile'
		}
	]

	useEffect(() => {
		const shrinkHeader = () => {
			if (headerRef.current) {
				if (
					document.body.scrollTop > 100 ||
					document.documentElement.scrollTop > 100
				) {
					headerRef.current.classList.add('shrink')
				} else {
					headerRef.current.classList.remove('shrink')
				}
			}
		}
		window.addEventListener('scroll', shrinkHeader)
		return () => {
			window.removeEventListener('scroll', shrinkHeader)
		}
	}, [])

	return (
		<div className={s.header} ref={headerRef}>
			<div className={s.header__wrap}>
				<ul className={s.header__nav}>
					{snap.user ? (
						<>
							{headerNavAuth.map((e, i) => (
								<li key={i}>
									<Link href={e.path}>{e.display}</Link>
								</li>
							))}
						</>
					) : (
						<>
							{headerNavNoAuth.map((e, i) => (
								<li key={i}>
									<Link href={e.path}>{e.display}</Link>
								</li>
							))}
						</>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Header
