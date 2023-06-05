import { SimpleGrid, Spinner, Flex } from '@chakra-ui/react';
import { getLatestProjectsByNumber } from '../../dummy-data/dummy-data';

import ProjectCard from './ProjectCard/ProjectCard';

const ProjectListing: React.FC = () => {
	const projects = getLatestProjectsByNumber(5);

	return (
		<SimpleGrid m={10} spacing={4} templateColumns="repeat(auto-fill)">
			{projects ? (
				projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))
			) : (
				<Flex justify="center" align="center">
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
					/>
				</Flex>
			)}
		</SimpleGrid>
	);
};

export default ProjectListing;
