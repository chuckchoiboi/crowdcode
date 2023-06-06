'use client';
import { useParams } from 'next/navigation';
import { Box, Heading, Text } from '@chakra-ui/react';
import { getProjectById } from '@/dummy-data/dummy-data';

const ProjectDetailPage = () => {
	const { projectId } = useParams();

	const project = getProjectById(projectId);

	if (!project) {
		return <Text>Project not found</Text>;
	}

	return (
		<Box maxW="600px" mx="auto" p={6}>
			<Heading as="h1" mb={4}>
				{project.title}
			</Heading>
			<Text mb={2}>Company: {project.companyName}</Text>
			<Text mb={2}>Create Date: {project.createDate}</Text>
			<Text mb={4}>Description: {project.description}</Text>
			<Text mb={2}>Number of Requests: {project.numOfRequests}</Text>
			<Text mb={2}>Tech Stacks: {project.techStacks.join(', ')}</Text>
			<Text mb={2}>Product Area: {project.productArea.join(', ')}</Text>
		</Box>
	);
};

export default ProjectDetailPage;
