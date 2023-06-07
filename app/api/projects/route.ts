import { NextResponse } from 'next/server';
import { Project } from '@/types/project';

export async function GET(req: Request) {
	const res = await fetch(`${process.env.CROWD_CODE_API_URL}/projects/.json`);

	const data = await res.json();

	const result = Object.entries(data).map(([id, projectData]) => {
		const parsedData: Project = {
			id,
			...projectData,
			productArea: parseStringArray(projectData.productArea),
			techStacks: parseStringArray(projectData.techStacks),
		};

		return parsedData;
	});

	return NextResponse.json(result);
}

function parseStringArray(str: string): string[] {
	// Assuming the string is in the format "['item1', 'item2', ...]"
	const trimmed = str.trim();
	const withoutQuotes = trimmed.substring(1, trimmed.length - 1);
	const items = withoutQuotes
		.split(',')
		.map((item) => item.trim().slice(1, -1));

	return items;
}
