export const taskList = [
    {
        id: crypto.randomUUID(),
        title: "Content Writer Content Writer Content Writer",
        description: "Prepare proctor for client meeting",
        date: "2024-02-20",
        status: "to-do"
    },
    {
        id: crypto.randomUUID(),
        title: "Develop API",
        description: "Prepare proctor for client meeting",
        date: "2024-02-20",
        status: "to-do"
    },
    {
        id: crypto.randomUUID(),
        title: "Deploy to VPS",
        description: "Prepare proctor for client meeting",
        date: "2024-02-20",
        status: "to-do"
    },
    {
        id: crypto.randomUUID(),
        title: "Content Writer -  On-Progress",
        description: "Prepare proctor for client meeting",
        date: "2024-02-20",
        status: "on-progress"
    },
    {
        id: crypto.randomUUID(),
        title: "Content Writer - Done",
        description: "Make Promotional Ads for Instagram fastos",
        date: "2024-02-20",
        status: "done"
    },
    {
        id: crypto.randomUUID(),
        title: "Content Writer - Done",
        description: "Prepare proctor for client meeting",
        date: "2024-02-20",
        status: "done"
    },
    {
        id: crypto.randomUUID(),
        title: "Content Writer - Revise",
        description: "Prepare proctor for client meeting",
        date: "2024-02-20",
        status: "revise"
    },
]

export const taskCategories = [
    { type: "To-Do", bgColor: "bg-indigo-600", textColor: "text-indigo-500" },
    { type: "On-Progress", bgColor: "bg-yellow-500", textColor: "text-yellow-500" },
    { type: "Done", bgColor: "bg-teal-500", textColor: "text-teal-500" },
    { type: "Revise", bgColor: "bg-rose-500", textColor: "text-rose-500" }
]

// let formattedDate = new Date(task.date).toLocaleDateString(
//     "en-GB",
//     { year: "numeric", month: "long", day: "2-digit" }
//   );