'use client';

import { usePathname } from 'next/navigation';

import ButtonHeroBanner from '@/components/common-ui/ButtonHeroBanner';

import { getBannerImageUrl } from '@/utils/helper';

type RequestsPageProps = {};
const RequestsPage = (props: RequestsPageProps) => {
	const pathname = usePathname();

	const headingText = 'Requests';
	const secondaryText =
		"Here's a list of developers who want to help you out!";
	const imageUrl = getBannerImageUrl(pathname);

	return (
		<div>
			<ButtonHeroBanner
				headingText={headingText}
				secondaryText={secondaryText}
				bannerImageUrl={imageUrl}
			/>
		</div>
	);
};
export default RequestsPage;
