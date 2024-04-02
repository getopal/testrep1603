import Head from 'next/head'

import Footer from '../components/ui/Footer/Footer'
import Header from '../components/ui/Header/Header'

import s from './Layout.module.scss'

const Layout = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main>
				<Header />
				<div className={s.main_content}>
					<div className=''>{children}</div>
				</div>
				<Footer />
			</main>
		</>
	)
}

export default Layout
