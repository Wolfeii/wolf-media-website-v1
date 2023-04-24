import type { AppProps } from "next/app";

import '../input.css'

export const App = ({Component, pageProps }: AppProps) => {
    return (
        <Component {...pageProps}/>
    );
}