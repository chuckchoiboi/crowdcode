'use client';

import { usePathname } from 'next/navigation';

import HeroBanner from '@/components/common-ui/HeroBanner';

import { getBannerImageUrl } from '@/utils/helper';

type RequestsPageProps = {};
const RequestsPage = (props: RequestsPageProps) => {
	const pathname = usePathname();

	const headingText = 'Manage project requests';
	const secondaryText =
		"Here's a list of developers who want to help you out!";
	const imageUrl = getBannerImageUrl(pathname);

	return (
		<div>
			<HeroBanner
				headingText={headingText}
				secondaryText={secondaryText}
				imageUrl={imageUrl}
			/>
		</div>
	);
};
export default RequestsPage;
