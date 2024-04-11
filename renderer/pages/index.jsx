import Head from 'next/head'
import React from 'react'

import Layout from '../layouts/Layout'

function Index() {
	return (
		<React.Fragment>
			<Head>
				<title>PackDrive</title>
			</Head>
		</React.Fragment>
	)
}
Index.getLayout = page => {
	return <Layout title='Home'>{page}</Layout>
}

export default Index
