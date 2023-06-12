import { NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

export async function GET(req: Request, { params }: any) {
	let client;

	try {
		client = await MongoClient.connect(process.env.MONGODB_URL as string);
	} catch (error) {
		return NextResponse.json({
			error: 'Could not connect to the database.',
		});
	}

	const db = client.db();

	const projectId = params.projectId;

	let project;

	try {
		project = await db
			.collection('projects')
			.findOne({ _id: new ObjectId(projectId) });
	} catch (error) {
		client.close();
		return NextResponse.json({ error: 'Fetching project failed!' });
	}

	client.close();

	if (!project) {
		return NextResponse.json({ error: 'Project not found!' });
	}

	return NextResponse.json(project);
}
