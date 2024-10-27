// import { useState } from "react";
// import { useTasks } from "../contexts/TaskContext";

export default function SearchBar({ searchItem, onSearch }) {
  // const [searchItem, setSearchItem] = useState("");
  // const tasks = useTasks();

  const handleSearch = (event) => {
    onSearch(event);
  };

  return (
    <div className="mx-4 flex-1">
      <input
        type="text"
        placeholder="Search here"
        className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
        value={searchItem}
        onChange={handleSearch}
      />
    </div>
  );
}
