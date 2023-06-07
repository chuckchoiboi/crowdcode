import React, { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Input } from '@chakra-ui/react';
import { RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri';
import Link from 'next/link';

import { Project } from '@/types/project';

type ProjectsTableProps = {
	projects: Project[];
};

const ProjectsTable = ({ projects }: ProjectsTableProps) => {
	const [sortConfig, setSortConfig] = useState<{
		key: keyof Project;
		direction: 'asc' | 'desc';
	}>({
		key: 'createDate',
		direction: 'desc',
	});

	const sortedProjects = [...projects].sort((a, b) => {
		if (sortConfig.direction === 'asc') {
			if (a[sortConfig.key] < b[sortConfig.key]) return -1;
			if (a[sortConfig.key] > b[sortConfig.key]) return 1;
		} else {
			if (a[sortConfig.key] > b[sortConfig.key]) return -1;
			if (a[sortConfig.key] < b[sortConfig.key]) return 1;
		}
		return 0;
	});

	const handleSort = (key: keyof Project) => {
		if (sortConfig.key === key) {
			setSortConfig({
				key,
				direction: sortConfig.direction === 'asc' ? 'desc' : 'asc',
			});
		} else {
			setSortConfig({
				key,
				direction: 'asc',
			});
		}
	};

	const renderSortIcon = (key: keyof Project) => {
		if (sortConfig.key === key) {
			if (sortConfig.direction === 'asc') {
				return <RiArrowUpLine />;
			} else {
				return <RiArrowDownLine />;
			}
		}
		return null;
	};

	return (
		<Box m={10} border="1px solid #e2e8f0" borderRadius="md">
			<Table variant="simple">
				<Thead>
					<Tr>
						<Th
							onClick={() => handleSort('title')}
							bg="gray.100"
							color="#4a5568"
							fontSize="16px"
							_hover={{ cursor: 'pointer', bg: '#e5f5f8' }}
						>
							<span
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}
							>
								<span>Title</span>
								{renderSortIcon('title')}
							</span>
						</Th>
						<Th
							onClick={() => handleSort('description')}
							bg="gray.100"
							color="#4a5568"
							fontSize="16px"
							_hover={{ cursor: 'pointer', bg: '#e5f5f8' }}
						>
							<span
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}
							>
								<span>Description</span>
								{renderSortIcon('description')}
							</span>
						</Th>
						<Th
							onClick={() => handleSort('companyName')}
							bg="gray.100"
							color="#4a5568"
							fontSize="16px"
							_hover={{ cursor: 'pointer', bg: '#e5f5f8' }}
						>
							<span
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}
							>
								<span>Company</span>
								{renderSortIcon('companyName')}
							</span>
						</Th>
						<Th
							onClick={() => handleSort('createDate')}
							bg="gray.100"
							color="#4a5568"
							fontSize="16px"
							_hover={{
								cursor: 'pointer',
								bg: '#e5f5f8',
							}}
						>
							<span
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}
							>
								<span>Create Date</span>
								{renderSortIcon('createDate')}
							</span>
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					{sortedProjects.map((project) => (
						<Tr
							key={project.id}
							_hover={{
								bg: '#f7f9fc',
							}}
						>
							<Td>
								<Link
									href={`/projects/${project.id}`}
									style={{ color: '#0091ae' }}
								>
									{project.title}
								</Link>
							</Td>
							<Td>{project.description}</Td>
							<Td>{project.companyName}</Td>
							<Td>{project.createDate}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</Box>
	);
};

export default ProjectsTable;
