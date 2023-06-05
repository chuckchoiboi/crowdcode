'use client';

import { Fragment } from 'react';
import { usePathname } from 'next/navigation';

import HeroBanner from '@/components/common-ui/HeroBanner';
import ProjectListing from '@/components/home/ProjectListing';

import { getBannerImageUrl } from '@/utils/helper';

type HomePageProps = {};

export default function Home(props: HomePageProps) {
	const pathname = usePathname();

	const headingText = 'Search a project';
	const secondaryText =
		'Find a project that fits your specialty. Bring magic to a business owner!';
	const imageUrl = getBannerImageUrl(pathname);

	return (
		<Fragment>
			<HeroBanner
				headingText={headingText}
				secondaryText={secondaryText}
				imageUrl={imageUrl}
			/>
			<ProjectListing />
		</Fragment>
	);
}
