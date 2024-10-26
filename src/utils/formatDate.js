export let formattedDate = (taskDate) => new Date(taskDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
});