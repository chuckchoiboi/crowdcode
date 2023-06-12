import { useEffect, useState } from 'react';
import { SimpleGrid, Spinner, Flex } from '@chakra-ui/react';
import ProjectCard from './ProjectCard/ProjectCard';

import { Project } from '@/types/project';
import { getAllProjects } from '@/utils/project-utils';

const ProjectListing: React.FC = () => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const { data, error, loading } = await getAllProjects();
				setProjects(data || []);
				setIsLoading(loading);
				if (error) {
					console.error('Error fetching projects:', error);
				}
			} catch (error) {
				console.error('Error fetching projects:', error);
			}
		};

		fetchProjects();
	}, []);

	return (
		<>
			{isLoading ? (
				<Flex justify="center" align="center" m={10}>
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
					/>
				</Flex>
			) : (
				<SimpleGrid m={10} spacing={4} templateColumns="repeat(3, 1fr)">
					{projects.map((project) => (
						<ProjectCard key={project._id} project={project} />
					))}
				</SimpleGrid>
			)}
		</>
	);
};

export default ProjectListing;
