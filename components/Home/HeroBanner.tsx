import React from 'react';
import styles from './HeroBanner.module.css';

const HeroBanner = () => {
	return (
		<section className={styles.heroBanner}>
			{/* overlay to shade the banner image */}
			<div className={styles.overlay}></div>
			<div className={styles.searchBar}>
				<input type="text" placeholder="Search..." />
				<button>Search</button>
			</div>
			<h1 className={styles.heading}>Search a project</h1>
			<p className={styles.blurb}>
				Find a project that fits your specialty. Bring magic to a
				business owner!
			</p>
		</section>
	);
};

export default HeroBanner;
