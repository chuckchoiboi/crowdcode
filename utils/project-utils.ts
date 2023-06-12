import { Project } from '@/types/project';

type AllProjectsDataResponse = {
	data: Project[] | null;
	error: Error | null;
	loading: boolean;
};

type ProjectDataResponse = {
	data: Project | null;
	error: Error | null;
	loading: boolean;
};

export const getAllProjects = async (): Promise<AllProjectsDataResponse> => {
	try {
		let data: Project[] | null = null;
		let error: Error | null = null;
		let loading = true;

		const res = await fetch('/api/projects');
		if (res.ok) {
			data = await res.json();
		} else {
			throw new Error('Error fetching projects');
		}

		loading = false;
		return { data, error, loading };
	} catch (error: unknown) {
		console.error('Error fetching projects:', error);
		return { data: null, error: error as Error, loading: false };
	}
};

export const getProjectById = async (
	projectId: string
): Promise<ProjectDataResponse> => {
	try {
		let data: Project | null = null;
		let error: Error | null = null;
		let loading = true;

		const res = await fetch(`/api/projects/${projectId}`);

		if (res.ok) {
			data = await res.json();
		} else {
			throw new Error('Error fetching projects');
		}

		loading = false;
		return { data, error, loading };
	} catch (error: unknown) {
		console.error('Error fetching projects:', error);
		return { data: null, error: error as Error, loading: false };
	}
};

// export function getLatestProjectsByNumber(numProjects) {
// 	const sortedProjects = [...dummyData].sort((a, b) => {
// 		const createDateA = new Date(a.createDate);
// 		const createDateB = new Date(b.createDate);
// 		return createDateB - createDateA;
// 	});

// 	const selectedProjects = sortedProjects.slice(0, numProjects);
// 	return selectedProjects;
// }
