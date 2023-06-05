'use client';

import { usePathname } from 'next/navigation';
import HeroBanner from '@/components/common-ui/HeroBanner';

import { getBannerImageUrl } from '@/utils/helper';

type ProjectsPageProps = {};

const ProjectsPage = (props: ProjectsPageProps) => {
	const pathname = usePathname();

	const headingText = 'Create a project';
	const secondaryText =
		'Are you looking for a developer to help with your project?';
	const imageUrl = getBannerImageUrl(pathname);

	return (
		<div>
			{/* Pass the currentPath as a prop to HeroBanner */}
			<HeroBanner
				headingText={headingText}
				secondaryText={secondaryText}
				imageUrl={imageUrl}
			/>
		</div>
	);
};

export default ProjectsPage;
