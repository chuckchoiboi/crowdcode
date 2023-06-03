const dummyData = [
	{
		id: 'p1',
		title: 'E-commerce landing page',
		description:
			'My company needs to build a landing page using React and TypeScript.',
		companyName: 'ABC Company',
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
		companyName: 'XYZ Corporation',
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
		companyName: '123 Food Services',
		createDate: '2023-05-05',
		numOfRequests: 15,
		techStacks: ['Angular', 'Node.js', 'MongoDB'],
		productArea: ['Web Development', 'Food & Delivery'],
	},
	{
		id: 'p4',
		title: 'Weather forecasting app',
		description: 'Build a weather app to provide accurate forecasts.',
		companyName: 'WeatherTech',
		createDate: '2023-05-07',
		numOfRequests: 12,
		techStacks: ['React', 'JavaScript', 'OpenWeatherAPI'],
		productArea: ['Mobile Development', 'Weather'],
	},
	{
		id: 'p5',
		title: 'Blog content management system',
		description: 'Develop a CMS for managing blog articles and authors.',
		companyName: 'Blogify',
		createDate: '2023-05-10',
		numOfRequests: 8,
		techStacks: ['Vue.js', 'Node.js', 'MongoDB'],
		productArea: ['Web Development', 'Content Management'],
	},
	{
		id: 'p6',
		title: 'Inventory management system',
		description: 'Create a system for tracking and managing inventory.',
		companyName: 'Inventrix',
		createDate: '2023-05-12',
		numOfRequests: 7,
		techStacks: ['Java', 'Spring Boot', 'MySQL'],
		productArea: ['Software Development', 'Inventory'],
	},
	{
		id: 'p7',
		title: 'Fitness tracking app',
		description: 'Build an app to track and monitor fitness activities.',
		companyName: 'FitLife',
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
		companyName: 'LearnEdu',
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
		companyName: 'SupportTicketPro',
		createDate: '2023-05-20',
		numOfRequests: 6,
		techStacks: ['Ruby on Rails', 'PostgreSQL', 'Redis'],
		productArea: ['Software Development', 'Customer Support'],
	},
	{
		id: 'p10',
		title: 'Music streaming app',
		description: 'Build an app for streaming and discovering music.',
		companyName: 'GrooveTunes',
		createDate: '2023-05-23',
		numOfRequests: 14,
		techStacks: ['React Native', 'Node.js', 'MongoDB'],
		productArea: ['Mobile Development', 'Music'],
	},
	{
		id: 'p11',
		title: 'Task management tool',
		description: 'Develop a tool for managing tasks and to-do lists.',
		companyName: 'TaskMaster',
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
		companyName: 'RealEstateCo',
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
		companyName: 'TableBooking',
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
		companyName: 'JobQuest',
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
		companyName: 'SocialInsights',
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
		companyName: 'CraftBay',
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
		companyName: 'TravelPlan',
		createDate: '2023-06-13',
		numOfRequests: 9,
		techStacks: ['Angular', 'Java', 'Spring Boot'],
		productArea: ['Web Development', 'Travel'],
	},
	{
		id: 'p18',
		title: 'Cryptocurrency portfolio tracker',
		description:
			'Build an app to track and manage cryptocurrency portfolios.',
		companyName: 'CryptoTrack',
		createDate: '2023-06-16',
		numOfRequests: 7,
		techStacks: ['React Native', 'Firebase', 'CoinGeckoAPI'],
		productArea: ['Mobile Development', 'Cryptocurrency'],
	},
	{
		id: 'p19',
		title: 'Online event ticketing platform',
		description:
			'Create a platform for selling and managing event tickets online.',
		companyName: 'TicketHub',
		createDate: '2023-06-19',
		numOfRequests: 11,
		techStacks: ['Vue.js', 'Node.js', 'MongoDB'],
		productArea: ['Web Development', 'Event Management'],
	},
	{
		id: 'p20',
		title: 'Recipe sharing app',
		description: 'Build an app for sharing and discovering recipes.',
		companyName: 'RecipeBox',
		createDate: '2023-06-22',
		numOfRequests: 13,
		techStacks: ['React Native', 'Firebase', 'GraphQL'],
		productArea: ['Mobile Development', 'Food & Cooking'],
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
