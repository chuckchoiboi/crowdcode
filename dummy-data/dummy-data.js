const dummyData = [
	{
		id: 'p1',
		title: 'E-commerce landing page',
		description:
			'My company needs to build a landing page using React and TypeScript.',
		createDate: '2023-05-01',
		numOfRequests: 10,
		techStacks: ['React', 'TypeScript', 'Node.js'],
		productArea: ['Web Development'],
	},
	{
		id: 'p2',
		title: 'Mobile expense tracker',
		description:
			'Develop a mobile app to track personal expenses and budgets.',
		createDate: '2023-05-03',
		numOfRequests: 5,
		techStacks: ['React Native', 'JavaScript', 'Firebase'],
		productArea: ['Mobile Development', 'Finance'],
	},
	{
		id: 'p3',
		title: 'Online food delivery platform',
		description:
			'Create a platform for ordering food online and delivery services.',
		createDate: '2023-05-05',
		numOfRequests: 15,
		techStacks: ['Angular', 'Node.js', 'MongoDB'],
		productArea: ['Web Development', 'Food & Delivery'],
	},
	{
		id: 'p4',
		title: 'Weather forecasting app',
		description: 'Build a weather app to provide accurate forecasts.',
		createDate: '2023-05-07',
		numOfRequests: 12,
		techStacks: ['React', 'JavaScript', 'OpenWeatherAPI'],
		productArea: ['Mobile Development', 'Weather'],
	},
	{
		id: 'p5',
		title: 'Blog content management system',
		description: 'Develop a CMS for managing blog articles and authors.',
		createDate: '2023-05-10',
		numOfRequests: 8,
		techStacks: ['Vue.js', 'Node.js', 'MongoDB'],
		productArea: ['Web Development', 'Content Management'],
	},
	{
		id: 'p6',
		title: 'Inventory management system',
		description: 'Create a system for tracking and managing inventory.',
		createDate: '2023-05-12',
		numOfRequests: 7,
		techStacks: ['Java', 'Spring Boot', 'MySQL'],
		productArea: ['Software Development', 'Inventory'],
	},
	{
		id: 'p7',
		title: 'Fitness tracking app',
		description: 'Build an app to track and monitor fitness activities.',
		createDate: '2023-05-15',
		numOfRequests: 9,
		techStacks: ['React Native', 'Firebase', 'GraphQL'],
		productArea: ['Mobile Development', 'Health & Fitness'],
	},
	{
		id: 'p8',
		title: 'E-learning platform',
		description:
			'Develop a platform for online courses and educational content.',
		createDate: '2023-05-18',
		numOfRequests: 11,
		techStacks: ['Angular', 'Node.js', 'MongoDB'],
		productArea: ['Web Development', 'Education'],
	},
	{
		id: 'p9',
		title: 'Ticketing system',
		description:
			'Create a system for managing and tracking customer support tickets.',
		createDate: '2023-05-20',
		numOfRequests: 6,
		techStacks: ['Ruby on Rails', 'PostgreSQL', 'Redis'],
		productArea: ['Software Development', 'Customer Support'],
	},
	{
		id: 'p10',
		title: 'Music streaming app',
		description: 'Build an app for streaming and discovering music.',
		createDate: '2023-05-23',
		numOfRequests: 14,
		techStacks: ['React Native', 'Node.js', 'MongoDB'],
		productArea: ['Mobile Development', 'Music'],
	},
	{
		id: 'p11',
		title: 'Task management tool',
		description: 'Develop a tool for managing tasks and to-do lists.',
		createDate: '2023-05-26',
		numOfRequests: 8,
		techStacks: ['Vue.js', 'Firebase', 'PWA'],
		productArea: ['Web Development', 'Productivity'],
	},
	{
		id: 'p12',
		title: 'Real estate listings website',
		description:
			'Create a website for listing and searching real estate properties.',
		createDate: '2023-05-29',
		numOfRequests: 10,
		techStacks: ['Angular', 'Node.js', 'Elasticsearch'],
		productArea: ['Web Development', 'Real Estate'],
	},
	{
		id: 'p13',
		title: 'Restaurant reservation system',
		description:
			'Build a system for making and managing restaurant reservations.',
		createDate: '2023-06-01',
		numOfRequests: 6,
		techStacks: ['Ruby on Rails', 'PostgreSQL', 'Redis'],
		productArea: ['Software Development', 'Hospitality'],
	},
	{
		id: 'p14',
		title: 'Job search platform',
		description:
			'Develop a platform for job seekers and employers to connect.',
		createDate: '2023-06-04',
		numOfRequests: 12,
		techStacks: ['React', 'Node.js', 'MongoDB'],
		productArea: ['Web Development', 'Employment'],
	},
	{
		id: 'p15',
		title: 'Social media analytics dashboard',
		description:
			'Build a dashboard to analyze social media engagement and metrics.',
		createDate: '2023-06-07',
		numOfRequests: 8,
		techStacks: ['Vue.js', 'Python', 'Django'],
		productArea: ['Web Development', 'Analytics'],
	},
	{
		id: 'p16',
		title: 'Online marketplace for handmade crafts',
		description:
			'Create a platform for artisans to sell their handmade crafts.',
		createDate: '2023-06-10',
		numOfRequests: 10,
		techStacks: ['React', 'Node.js', 'MongoDB'],
		productArea: ['Web Development', 'E-commerce'],
	},
	{
		id: 'p17',
		title: 'Travel itinerary planner',
		description:
			'Develop a tool for planning travel itineraries and bookings.',
		createDate: '2023-06-13',
		numOfRequests: 9,
		techStacks: ['Angular', 'Java', 'Spring Boot'],
		productArea: ['Web Development', 'Travel'],
	},
	{
		id: 'p18',
		title: 'Cryptocurrency portfolio tracker',
		description:
			'Build a tool to track and manage cryptocurrency investments.',
		createDate: '2023-06-16',
		numOfRequests: 7,
		techStacks: ['React', 'Node.js', 'MongoDB'],
		productArea: ['Web Development', 'Finance'],
	},
	{
		id: 'p19',
		title: 'Event management platform',
		description: 'Create a platform for organizing and managing events.',
		createDate: '2023-06-19',
		numOfRequests: 11,
		techStacks: ['React', 'Python', 'Django'],
		productArea: ['Web Development', 'Event Management'],
	},
	{
		id: 'p20',
		title: 'Fitness class booking app',
		description: 'Build an app for booking fitness classes and sessions.',
		createDate: '2023-06-22',
		numOfRequests: 8,
		techStacks: ['React Native', 'Firebase', 'GraphQL'],
		productArea: ['Mobile Development', 'Health & Fitness'],
	},
];

export function getLatestProjectsByNumber(numProjects) {
	const sortedProjects = [...dummyData].sort((a, b) => {
		const createDateA = new Date(a.createDate);
		const createDateB = new Date(b.createDate);
		return createDateB - createDateA;
	});

	const selectedProjects = sortedProjects.slice(0, numProjects);
	return selectedProjects;
}

export function getAllProjects() {
	return dummyData;
}

export function getFilteredProjects(dateFilter) {
	const { year, month } = dateFilter;

	let filteredProjects = dummyData.filter((project) => {
		const createDate = new Date(project.createDate);
		return (
			createDate.getFullYear() === year &&
			createDate.getMonth() === month - 1
		);
	});

	return filteredProjects;
}

export function getProjectById(id) {
	return dummyData.find((project) => project.id === id);
}
