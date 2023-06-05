'use client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import MainNavigation from '@/components/common-ui/MainNavigation';

import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const theme = extendTheme({
		fonts: {
			body: 'Monospace, sans-serif',
			heading: 'Monospace, sans-serif',
		},
	});

	return (
		<html lang="en">
			<body>
				<ChakraProvider theme={theme}>
					<MainNavigation />
					<main className="main">{children}</main>
				</ChakraProvider>
			</body>
		</html>
	);
}
