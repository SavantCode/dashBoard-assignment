import React, { useState } from 'react';

const filters = [
  { label: 'All', count: 100 },
  { label: 'Draft', count: 50 },
  { label: 'Archive', count: 75 },
];

const FilterBar = () => {
  const [selected, setSelected] = useState('All');

  return (
    <div className="mt-6 border border-gray-300 rounded-lg p-4 flex gap-6 flex-wrap">
      {filters.map(({ label, count }) => {
        const isSelected = selected === label;

        return (
          <div
            key={label}
            onClick={() => setSelected(label)}
            className={`flex items-center gap-3 cursor-pointer rounded-lg px-5 py-2
              ${isSelected ? 'bg-purple-100' : ''}
              hover:bg-purple-50
            `}
          >
            <span
              className={`font-semibold text-lg ${
                isSelected ? 'text-purple-600' : 'text-gray-600'
              }`}
            >
              {label}
            </span>
            <span
              className={`px-3 py-1 text-sm rounded-md font-semibold ${
                isSelected
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {count}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FilterBar;
// This FilterBar component can be imported and used in the DashboardHeader component as shown in the previous code snippet.