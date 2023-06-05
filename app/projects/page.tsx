'use client';

import { usePathname } from 'next/navigation';
import ButtonHeroBanner from '@/components/common-ui/ButtonHeroBanner';

import { getBannerImageUrl } from '@/utils/helper';

type ProjectsPageProps = {};

const ProjectsPage = (props: ProjectsPageProps) => {
	const pathname = usePathname();

	const headingText = 'Projects';
	const secondaryText =
		'Are you looking for a developer to help with your project?';
	const imageUrl = getBannerImageUrl(pathname);
	const buttonText = 'Create a project';

	return (
		<div>
			{/* Pass the currentPath as a prop to HeroBanner */}
			<ButtonHeroBanner
				headingText={headingText}
				secondaryText={secondaryText}
				bannerImageUrl={imageUrl}
				buttonText={buttonText}
			/>
		</div>
	);
};

export default ProjectsPage;
