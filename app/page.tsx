'use client';

import { Fragment } from 'react';
import { usePathname } from 'next/navigation';

import SearchHeroBanner from '@/components/common-ui/SearchHeroBanner';
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
			<SearchHeroBanner
				headingText={headingText}
				secondaryText={secondaryText}
				bannerImageUrl={imageUrl}
			/>
			<ProjectListing />
		</Fragment>
	);
}
