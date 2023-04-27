import '../globals.css'

import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import Head from 'next/head';

export default function App({Component, pageProps}: AppProps) {
	useEffect(() => {
		//CAT
		console.log(
		  `%c
			   /\\_____/\\ \r
			  /  o   o  \\ \r
			 ( ==  ^  == ) \r
			  )         ( \r
			 (           ) \r
			( (  )   (  ) ) \r
		   (__(__)___(__)__)
		`,
		  "font-weight:bold; font-size:15px;color:#ff4747"
		);
	}, []);

	return (
		<>
			<Head>
				<title>Wolfeiii Media</title>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Component {...pageProps} />
		</>
	);
}