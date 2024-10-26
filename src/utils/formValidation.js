
export const FormValidation = (transaction) => {
    const { category, title, date, description } = transaction;
    const areFieldsFilled = Boolean(category && title && date && description);
    const fieldsNotFilled = ["Category", "Title", "Date", "Description"].filter(
        (field) => !transaction[field.toLowerCase()]
    );

    return {
        notValidated: Boolean(!areFieldsFilled),
        fieldsNotFilled: fieldsNotFilled.join(", "),
    };
}

export const FormEdittingValidation = (tasks, taskToCheck) => {
    const existingTask = tasks.find((item) => item.id === taskToCheck.id);
    return !(
        existingTask &&
        JSON.stringify(existingTask) === JSON.stringify(taskToCheck)
    )
}