import Plus from "./svg/Plus";

export default function AddTask({ setShowModal }) {
  return (
    <div className="flex space-x-2">
      <button
        className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
        onClick={() => setShowModal(true)}
      >
        <Plus />
        Add
      </button>
    </div>
  );
}
