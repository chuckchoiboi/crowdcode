'use client';

import { Fragment } from 'react';
import HeroBanner from '@/components/home/HeroBanner';
import ProjectListing from '@/components/home/ProjectListing';

export default function Home() {
	return (
		<Fragment>
			<HeroBanner />
			<ProjectListing />
		</Fragment>
	);
}
