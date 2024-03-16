import '../styles/app.scss'


export default function _app({ Component, pageProps }) {
    const getLayout = Component.getLayout ?? (page => page)

    return getLayout(<Component {...pageProps} />)
}