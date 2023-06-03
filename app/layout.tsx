'use client';
import { ChakraProvider } from '@chakra-ui/react';

import MainNavigation from '@/components/ui/MainNavigation';

import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<ChakraProvider>
					<MainNavigation />
					<main className="main">{children}</main>
				</ChakraProvider>
			</body>
		</html>
	);
}
