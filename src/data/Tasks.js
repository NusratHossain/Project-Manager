export const taskList = [
    {
        id: crypto.randomUUID(),
        title: "Requirements Gathering",
        description: "Conduct meetings with stakeholders to gather project requirements and expectations.",
        date: "2024-02-10",
        category: "to-do"
    },
    {
        id: crypto.randomUUID(),
        title: "Database Schema Design",
        description: "Design and document the database schema to support application features.",
        date: "2024-02-15",
        category: "to-do"
    },
    {
        id: crypto.randomUUID(),
        title: "API Development",
        description: "Develop core RESTful APIs for user authentication, data retrieval, and data management.",
        date: "2024-02-20",
        category: "to-do"
    },
    {
        id: crypto.randomUUID(),
        title: "Frontend UI Design",
        description: "Create responsive UI designs based on mockups and wireframes provided by the design team.",
        date: "2024-02-25",
        category: "on-progress"
    },
    {
        id: crypto.randomUUID(),
        title: "Testing and Bug Fixes",
        description: "Run unit and integration tests, fix any identified bugs and performance issues.",
        date: "2024-02-28",
        category: "on-progress"
    },
    {
        id: crypto.randomUUID(),
        title: "Deploy to Staging",
        description: "Deploy the application to the staging environment for final review and testing.",
        date: "2024-03-01",
        category: "done"
    },
    {
        id: crypto.randomUUID(),
        title: "Client Feedback and Revisions",
        description: "Gather feedback from clients and make necessary revisions to the application.",
        date: "2024-03-05",
        category: "revise"
    }
];


export const defaultTask = {
    title: "",
    description: "",
    date: "",
    category: ""
}