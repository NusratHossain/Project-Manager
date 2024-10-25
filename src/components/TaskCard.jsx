import Delete from "./svg/Delete";
import Edit from "./svg/Edit";

export default function TaskCard({ task, color }) {
  let formattedDate = new Date(task.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className={`mb-2 flex-1 font-semibold ${color}`}>{task.title}</h4>

        <div className="flex gap-2">
          <Delete />
          <Edit />
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{task.description}</p>

      <p className="mt-6 text-xs text-zinc-400">{formattedDate}</p>
    </div>
  );
}
