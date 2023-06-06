'use client';

import ButtonHeroBanner from '@/components/common-ui/ButtonHeroBanner';
import ProjectsCreateForm from '@/components/projects/ProjectsCreateForm';

type Props = {};
const ProjectsCreatePage = (props: Props) => {
	return (
		<div>
			<ButtonHeroBanner
				headingText="Create a Project Request"
				secondaryText="Add a project you want to build"
			/>
			<ProjectsCreateForm />
		</div>
	);
};
export default ProjectsCreatePage;
