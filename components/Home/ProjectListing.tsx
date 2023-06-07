import { useEffect, useState } from 'react';
import { SimpleGrid, Spinner, Flex } from '@chakra-ui/react';
import ProjectCard from './ProjectCard/ProjectCard';
import { Project } from '@/types/project';

const ProjectListing: React.FC = () => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('/api/projects');
				const data = await res.json();
				setProjects(data);
			} catch (error) {
				console.error('Error fetching projects:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<SimpleGrid m={10} spacing={4} templateColumns="repeat(3, 1fr)">
			{isLoading ? (
				<Flex justify="center" align="center">
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
					/>
				</Flex>
			) : (
				projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))
			)}
		</SimpleGrid>
	);
};

export default ProjectListing;
