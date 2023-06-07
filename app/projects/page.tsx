'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Spinner, Flex } from '@chakra-ui/react';

import ButtonHeroBanner from '@/components/common-ui/ButtonHeroBanner';
import ProjectsTable from '@/components/projects/ProjectsTable';

import { getBannerImageUrl } from '@/utils/helper';
import { Project } from '@/types/project';

type ProjectsPageProps = {};

const ProjectsPage = (props: ProjectsPageProps) => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const pathname = usePathname();

	const headingText = 'Projects';
	const secondaryText =
		'Are you looking for a developer to help with your project?';
	const imageUrl = getBannerImageUrl(pathname);
	const buttonProp = {
		text: 'Create a project',
		link: 'projects/create',
	};

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
		<div>
			{/* Pass the currentPath as a prop to HeroBanner */}
			<ButtonHeroBanner
				headingText={headingText}
				secondaryText={secondaryText}
				bannerImageUrl={imageUrl}
				buttonProp={buttonProp}
			/>
			{isLoading ? (
				<Flex justify="center" align="center" mt={10}>
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
					/>
				</Flex>
			) : (
				<ProjectsTable projects={projects} />
			)}
		</div>
	);
};

export default ProjectsPage;
