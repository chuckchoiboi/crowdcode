'use client';

import { Fragment } from 'react';
import HeroBanner from '@/components/Home/HeroBanner';
import ProjectListing from '@/components/Home/ProjectListing';

export default function Home() {
	return (
		<Fragment>
			<HeroBanner />
			<ProjectListing />
		</Fragment>
	);
}
