import { AnimatePresence } from 'framer-motion'
import { SnackbarProvider } from 'notistack'
import React, { useEffect } from 'react'

import Footer from '../components/ui/Footer/Footer'
import Header from '../components/ui/Header/Header'

import * as Api from '../api'
import { state } from '../state'
import '../styles/App.scss'
import '../styles/index.scss'
import { getCookie } from '../utils/getCookie'

import 'swiper/css'

export default function App({ Component, pageProps, router }) {
	useEffect(() => {
		const token = getCookie('_token')

		if (token && token !== 'undefined') {
			Api.auth.getMe().then(user => {
				state.user = user
			})
		}

		Api.orders.getAllOrders().then(res => {
			state.ordersArray = res
		})
	}, [])

	return (
		<div className='main'>
			<Header />
			<div className='content-container'>
				<SnackbarProvider
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right'
					}}
					maxSnack={2}
					autoHideDuration={2000}
				>
					<AnimatePresence mode='wait'>
						<Component key={router.route} {...pageProps} />
					</AnimatePresence>
				</SnackbarProvider>
			</div>
			<Footer />
		</div>
	)
}
