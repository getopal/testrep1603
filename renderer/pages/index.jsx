import React from 'react'
import Head from 'next/head'
import Navbar from "../components/Navbar/Navbar";
import Layout from "../layouts/Layout";

function Index() {

    return (
        <React.Fragment>
            <Head>
                <title>Home - Nextron (basic-lang-javascript)</title>
            </Head>
            <Navbar/>
            <div>
                h1
            </div>
        </React.Fragment>
    )
}
Index.getLayout = (page) => {
    return <Layout title='Home'>{page}</Layout>
}

export default Index