'use client';

import { SimpleGrid } from '@chakra-ui/react';
import { getAllProjects } from '../../dummy-data/dummy-data';

import ProjectCard from '../ui/ProjectCard/ProjectCard';

const ProjectListing: React.FC = () => {
	const projects = getAllProjects();

	return (
		<SimpleGrid
			m={10}
			spacing={4}
			templateColumns="repeat(auto-fill, minmax(1060px, 1fr))"
		>
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</SimpleGrid>
	);
};

export default ProjectListing;
