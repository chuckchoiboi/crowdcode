'use client';

import { usePathname } from 'next/navigation';
import ButtonHeroBanner from '@/components/common-ui/ButtonHeroBanner';
import ProjectsTable from '@/components/projects/ProjectsTable';

import { getBannerImageUrl } from '@/utils/helper';
import { getLatestProjectsByNumber } from '@/dummy-data/dummy-data.js';

type ProjectsPageProps = {};

const ProjectsPage = (props: ProjectsPageProps) => {
	const pathname = usePathname();

	const headingText = 'Projects';
	const secondaryText =
		'Are you looking for a developer to help with your project?';
	const imageUrl = getBannerImageUrl(pathname);
	const buttonText = 'Create a project';

	const projects = getLatestProjectsByNumber(10);

	return (
		<div>
			{/* Pass the currentPath as a prop to HeroBanner */}
			<ButtonHeroBanner
				headingText={headingText}
				secondaryText={secondaryText}
				bannerImageUrl={imageUrl}
				buttonText={buttonText}
			/>
			<ProjectsTable projects={projects} />
		</div>
	);
};

export default ProjectsPage;
