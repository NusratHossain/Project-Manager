export default function taskReducer(draft, action) {
  switch (action.type) {
    case "added": {
      draft.push({
        id: action.id,
        title: action.task.title,
        description: action.task.description,
        date: action.task.date,
        category: action.task.category,
      });
      break;
    }
    case "changed": {
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }
    case "deleted": {
      return draft.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error(`No action matched with ${action.type}`);
    }
  }
}
