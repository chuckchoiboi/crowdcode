import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function GET(req: Request) {
	let client;

	try {
		client = await MongoClient.connect(process.env.MONGODB_URL as string);
	} catch (error) {
		return NextResponse.json({
			error: 'Could not connect to the database.',
		});
	}

	const db = client.db();

	let projects;

	try {
		projects = await db.collection('projects').find().toArray();
	} catch (error) {
		client.close();
		return NextResponse.json({ error: 'Fetching projects failed!' });
	}

	client.close();
	return NextResponse.json(projects);
}
