import { AppProps } from 'next/app';
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/highlight.js/scss/darcula.scss';
import '../styles/global.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default App;