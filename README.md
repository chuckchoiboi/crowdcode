# CrowdCode

CrowdCode is a web application designed to connect start-ups with a pair of engineers consisting of a mentor and a junior engineer, ensuring the delivery of high-quality work.

-   It provides opportunities for start-ups to get their projects done while offering aspiring junior engineers real-life coding experience under the guidance of experienced mentors
-   The platform allows start-ups to list their projects, and engineers can browse through the listings, select projects of interest, and request to work on them.

---

## User Story

For Start-ups:

-   Create project listings with detailed descriptions, required tech stack, estimated duration, and a link to the project's GitHub repository.
-   Manage and review requests from aspiring engineers and mentor-junior engineer pairs, accepting or rejecting them based on their skills and qualifications.
-   Communicate and collaborate effectively with the selected mentor-junior engineer pairs, providing them with necessary project details and updates.

For Mentors:

-   Act as experienced engineers providing guidance and mentorship to junior engineers.
-   Collaborate with junior engineers in delivering high-quality work for start-up projects.
-   Share knowledge and best practices with junior engineers to facilitate their learning and growth.

For Aspiring Engineers:

-   Browse through project listings, filtering them based on skills and interests, and view detailed project descriptions.
-   Submit requests to work on projects that align with skills and interests, providing information about background and relevant experience.
-   Collaborate with mentors as part of a mentor-junior engineer pair, receiving guidance and mentorship while gaining real-life coding experience.

For All Users (Start-ups, Mentors, and Engineers):

-   Have a profile to showcase skills, past projects, and receive ratings and reviews from other users.
-   Rate and provide feedback on the collaboration experience with other users, building a reputation within the platform.

---

## Features

-   **Start-up Listings:** Start-ups can create project listings that include details such as project title, description, required tech stack, estimated duration, and a link to the project's GitHub repository.
-   **Engineer Requests:** Aspiring engineers can browse through the project listings, view project details, and request to work on projects that match their skills and interests.
-   **Project Management:** Start-ups can manage their projects, review and accept/reject requests from mentor-junior engineer pairs, and communicate with the selected pairs.
-   **User Profiles:** Both start-ups and engineers have user profiles where they can provide information about their background, skills, and past projects.
-   **Rating and Reviews:** Users can rate and provide feedback on their experience working with each other, allowing for reputation building within the platform.
-   **Notifications:** Users receive notifications about project updates, request status changes, and new messages.

---

## Tech Stack

-   Front-end: Next.js (React framework), HTML, CSS, JavaScript
-   Back-end: Node.js, Express.js
-   Database: MongoDB
-   Authentication: JWT (JSON Web Tokens)

---

## Data Model

The data model for CrowdCode includes the following entities:

### User Model

-   **Attributes**:
    -   User ID (unique identifier)
    -   Name
    -   Email
    -   Password (encrypted)
    -   Bio (brief description of the user's background, skills, and interests)
    -   Role (either "start-up" or "engineer")
    -   Skills (a list of programming languages, frameworks, or other relevant skills)
    -   Portfolio (links or descriptions of the user's past projects, if any)
    -   Rating (average rating received from other users)
    -   Reviews (feedback and reviews received from other users)
-   **Relationships**:
    -   One user can have multiple projects (if they are a start-up)
    -   One user can work on multiple projects (if they are an engineer)

### Project Model

-   **Attributes**:
    -   Project ID (unique identifier)
    -   Title
    -   Description
    -   Tech Stack (programming languages, frameworks, etc., required for the project)
    -   Duration (estimated duration of the project)
    -   GitHub Repository (link to the project's GitHub repository)
    -   Status (e.g., "

in progress," "completed," "closed")

### Request Model

-   **Attributes**:
    -   Request ID (unique identifier)
    -   Project ID (foreign key referencing the project being requested)
    -   Mentor ID (foreign key referencing the mentor in the mentor-junior engineer pair)
    -   Junior Engineer ID (foreign key referencing the junior engineer in the mentor-junior engineer pair)
    -   Status (e.g., "pending," "accepted," "rejected")
-   **Relationships**:
    -   One request belongs to one project
    -   One request belongs to one mentor
    -   One request belongs to one junior engineer

These data models provide a foundation for building the app and managing the core entities involved, such as users, projects, requests, and mentors. Remember, you can further expand and refine these models based on additional features and requirements of your app.

---

## Contributing

We welcome contributions to CrowdCode! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your commit message"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request with a detailed description of your changes.

Please ensure that your code adheres to our coding guidelines and includes appropriate tests. Thank you for contributing to CrowdCode!

---

## Installation

1. Clone the repository: `git clone https://github.com/yourusername/crowdcode.git`
2. Navigate to the project directory: `cd crowdcode`
3. Install dependencies: `npm install`
4. Configure the environment variables: Rename the `.env.example` file to `.env` and update the necessary variables such as database credentials, API keys, etc.
5. Start the application: `npm run dev`
6. Open your browser and visit `http://localhost:3000` to access CrowdCode.

---

## License

This project is licensed under the [MIT License](LICENSE).
