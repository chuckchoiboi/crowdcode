import {
	Flex,
	Box,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Heading,
	Text,
	Button,
} from '@chakra-ui/react';
import TechStackButton from './TechStackButton';
import ProductAreaButton from './ProductAreaButton';
import Link from 'next/link';

interface Project {
	id: string;
	title: string;
	description: string;
	createDate: string;
	techStacks: string[];
	productArea: string[];
	companyName: string;
}

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<Card key={project.id}>
			<Flex direction="column" height="100%">
				<CardHeader
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Heading size="lg" mb={2}>
						{project.title}
					</Heading>
					<Flex direction="column" alignItems="flex-end">
						<Text fontSize="lg" fontWeight="bold" color="gray.700">
							{project.companyName}{' '}
						</Text>
						<Text fontSize="sm" color="gray.500">
							{project.createDate}
						</Text>
					</Flex>
				</CardHeader>
				<CardBody>
					<Text mt={0} mb={4}>
						{project.description}
					</Text>
					<Flex direction="row" flexWrap="wrap" gap={2} mt={4}>
						{project.techStacks.map((stack) => (
							<TechStackButton key={stack} stack={stack} />
						))}
					</Flex>
					<Flex direction="row" flexWrap="wrap" gap={2} mt={2}>
						{project.productArea.map((area) => (
							<ProductAreaButton key={area} area={area} />
						))}
					</Flex>
				</CardBody>
				<CardFooter>
					<Link href={`/projects/${project.id}`}>
						<Button colorScheme="blue" size="sm">
							View here
						</Button>
					</Link>
				</CardFooter>
			</Flex>
			<Box bg="gray.100" width="20%" height="100%" />
		</Card>
	);
};

export default ProjectCard;
