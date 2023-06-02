import Link from 'next/link';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<header className={styles.header}>
			<Link className={styles.logo} href="/">
				<span className={styles.logoText}>CrowdCode</span>
			</Link>
			<nav className={styles.menu}>
				<ul>
					<li>
						<a href="#">Projects</a>
					</li>
					<li>
						<a href="#">Requests</a>
					</li>
					<li>
						<a href="#">Profile</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default MainNavigation;
