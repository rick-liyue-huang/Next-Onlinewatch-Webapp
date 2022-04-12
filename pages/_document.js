import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head >
				{/* eslint-disable-next-line @next/next/no-title-in-document-head */}
				<title>Online Watch</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
				<link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet" />
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
		</Html>
	)
}
