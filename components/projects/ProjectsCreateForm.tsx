import React from 'react';
import {
	Box,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Button,
	Select,
} from '@chakra-ui/react';

type ProjectsCreateFormProps = {};

const ProjectsCreateForm = ({}: ProjectsCreateFormProps) => {
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		// Handle form submission logic here
	};

	return (
		<Box
			my={8}
			maxW="600px"
			mx="auto"
			p={6}
			borderWidth={1}
			borderRadius="md"
			boxShadow="lg"
		>
			<form onSubmit={handleSubmit}>
				<FormControl mb={4}>
					<FormLabel>Title</FormLabel>
					<Input type="text" placeholder="Enter project title" />
				</FormControl>
				<FormControl mb={4}>
					<FormLabel>Description</FormLabel>
					<Textarea
						placeholder="Enter project description"
						rows={4}
					></Textarea>
				</FormControl>
				<FormControl mb={4}>
					<FormLabel>Company Name</FormLabel>
					<Input type="text" placeholder="Enter company name" />
				</FormControl>
				<FormControl mb={4}>
					<FormLabel>Create Date</FormLabel>
					<Input type="date" />
				</FormControl>
				<FormControl mb={4}>
					<FormLabel>Number of Requests</FormLabel>
					<Input
						type="number"
						placeholder="Enter number of requests"
					/>
				</FormControl>
				<FormControl mb={4}>
					<FormLabel>Tech Stacks</FormLabel>
					<Select multiple>
						<option>React</option>
						<option>Angular</option>
						<option>Vue.js</option>
						<option>React Native</option>
						<option>JavaScript</option>
						<option>TypeScript</option>
						<option>Node.js</option>
						<option>Java</option>
						<option>Python</option>
						<option>Ruby on Rails</option>
					</Select>
				</FormControl>
				<FormControl mb={4}>
					<FormLabel>Product Area</FormLabel>
					<Select multiple>
						<option>Web Development</option>
						<option>Mobile Development</option>
						<option>Software Development</option>
						<option>Finance</option>
						<option>Food & Delivery</option>
						<option>Weather</option>
						<option>Content Management</option>
						<option>Inventory</option>
						<option>Health & Fitness</option>
						<option>Education</option>
						<option>Customer Support</option>
						<option>Music</option>
						<option>Productivity</option>
						<option>Real Estate</option>
						<option>Hospitality</option>
						<option>Employment</option>
						<option>Analytics</option>
						<option>E-commerce</option>
						<option>Travel</option>
						<option>Cryptocurrency</option>
						<option>Event Management</option>
						<option>Food & Cooking</option>
					</Select>
				</FormControl>
				<Button type="submit" colorScheme="blue" mt={4}>
					Create Project
				</Button>
			</form>
		</Box>
	);
};

export default ProjectsCreateForm;
