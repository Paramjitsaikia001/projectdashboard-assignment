
import React from 'react';
import { ProjectStatus } from '../type/type.js';
import { Search } from 'lucide-react';

const ProjectFilters = ({ filters, onFilterChange }) => {


  const toggleStatus = (status) => {
    const newStatus = filters.status.includes(status)
      ? filters.status.filter((s) => s !== status)
      : [...filters.status, status];
    onFilterChange({ ...filters, status: newStatus });
  };


  const handleSearch = (e) => {
    onFilterChange({ ...filters, search: e.target.value });
  };


  const statusOptions = Object.values(ProjectStatus);


  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">

      <div className="relative w-full md:w-96">

        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
          <Search className="h-5 w-5" />
        </div>

        <input
          type="text"
          value={filters.search}
          onChange={handleSearch}
          placeholder="Search projects or clients..."
          className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-full leading-5 bg-white  text-slate-900  placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all shadow-sm"
        />

      </div>


      <div className="flex flex-wrap gap-2">

        {statusOptions.map((status) => {
          const isActive = filters.status.includes(status);
          return (
            <button
              key={status}
              onClick={() => toggleStatus(status)}
              className={`px-3 py-1.5 rounded-full cursor-pointer text-sm font-medium transition-all border ${
                isActive
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                  : 'bg-white  border-slate-200  text-slate-600  hover:border-slate-300 '
              }`}
            >
              {status}
            </button>
          );
        })}

        <div className="allclear">
          <button
            onClick={() => onFilterChange({ search: '', status: [] })}
            className="px-3 py-1.5 rounded-full cursor-pointer text-sm font-medium transition-all border bg-slate-100 border-slate-300 text-slate-500 hover:bg-slate-200"
          >
            Clear All
          </button>
        </div>
      </div>


    </div>
  );
};

export default ProjectFilters;
