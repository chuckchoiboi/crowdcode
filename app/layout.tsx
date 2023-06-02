import './globals.css';
import MainNavigation from '@/components/ui/MainNavigation';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<MainNavigation />
				<main className="main">{children}</main>
			</body>
		</html>
	);
}
