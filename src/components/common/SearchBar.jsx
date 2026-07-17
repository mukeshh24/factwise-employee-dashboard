import React from "react";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex items-center justify-between gap-4 mb-5">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
        <Input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search by name, department, position..."
          className="pl-10 h-11 shadow-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
