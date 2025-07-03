// src/components/Meeting/MeetingFilters.jsx
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import {BlueDownArrow,BlueUpArrow} from '../../assets/Icons/IconsSvg'

const FilterSelect = ({ label, value, onChange }) => (
  <select
    value={value}
    onChange={(e) => onChange(label.toLowerCase(), e.target.value)}
    className="px-3 py-2 h-10 border border-gray-300 rounded-md bg-white text-sm text-gray-700 min-w-[150px]"
  >
    <option value="">{label}</option>
    <option value="Sample 1">{label} 1</option>
    <option value="Sample 2">{label} 2</option>
  </select>
);

const MeetingFilters = ({ searchQuery, setSearchQuery, filters, setFilters }) => {
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-4 border border-gray-200 rounded-md bg-white space-y-4 rounded-bl-none rounded-br-none">
      <div className="flex gap-4 flex-wrap">
        {/* Search */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 w-[250px] h-10 bg-white">
          <FiSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-3 outline-none text-sm w-full"
          />
        </div>

        {/* Filters */}
        <FilterSelect label="Buyer" value={filters.buyer} onChange={handleFilterChange} />
        <FilterSelect label="Brand" value={filters.brand} onChange={handleFilterChange} />
        <FilterSelect label="Dept" value={filters.dept} onChange={handleFilterChange} />
        <FilterSelect label="MeetingType" value={filters.meetingType} onChange={handleFilterChange} />
        <FilterSelect label="Participants" value={filters.participants} onChange={handleFilterChange} />
        <FilterSelect label="MeetingDate" value={filters.meetingDate} onChange={handleFilterChange} />
        <FilterSelect label="Status" value={filters.status} onChange={handleFilterChange} />
      </div>
    </div>
  );
};

export default MeetingFilters;
