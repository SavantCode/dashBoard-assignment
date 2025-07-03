// src/components/Meeting/MeetingTable.jsx
import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import { FaEllipsisV } from 'react-icons/fa';
import { FiChevronDown as SortIcon } from 'react-icons/fi';
import mockMeetings from '../Table/Data/mockData.json';
import StatusBadge from '../Common/StatusBadge';
import TypeTag from '../Common/TypeTag';
import { LeftArrow, RightArrow } from '../../assets/Icons/IconsSvg'
import { BlueDownArrow, BlueUpArrow, UpDownArrow } from '../../assets/Icons/IconsSvg';
import ActionMenu from './MiniTabs/ActionMenu';

const STATUS_STYLES = {
  Completed: 'bg-green-200 text-green-800 border border-green-300 hover:bg-green-300',
  Complete: 'bg-green-200 text-green-800 border border-green-300 hover:bg-green-300',
  Upcoming: 'bg-yellow-200 text-yellow-800 border border-yellow-300 hover:bg-yellow-300',
  Overdue: 'bg-red-200 text-red-800 border border-red-300 hover:bg-red-300',
  'In Progress': 'bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200',
  Ongoing: 'bg-blue-200 text-blue-900 border border-blue-300 hover:bg-blue-300',
  Draft: 'bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300',
  Archived: 'bg-red-100 text-red-600 border border-red-200 hover:bg-red-200',
  Cancelled: 'bg-gray-300 text-gray-700 border border-gray-400 hover:bg-gray-400',
  'Re Scheduled': 'bg-purple-200 text-purple-800 border border-purple-300 hover:bg-purple-300',
  'Follow Up': 'bg-indigo-200 text-indigo-800 border border-indigo-300 hover:bg-indigo-300',
};

export default function MeetingTable({ searchQuery, filters }) {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });

  const applyFilters = (data) => {
    if (!filters) return data;
    return data.filter((item) => {
      const matchesSearch = searchQuery
        ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.buyer.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      const matchesFilters = Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        if (key === 'buyer') return item.buyer.name === value;
        if (key === 'participants') return item.participants.includes(value);
        if (key === 'meetingtype' || key === 'type') return item.type === value;
        if (key === 'status') return item.status === value;
        if (key === 'meetingdate') return item.meetingDate === value;
        return item[key]?.toLowerCase?.() === value.toLowerCase();
      });

      return matchesSearch && matchesFilters;
    });
  };

  const filteredData = applyFilters(mockMeetings);

  const sorted = [...filteredData].sort((a, b) => {
    const dir = sortConfig.direction === 'asc' ? 1 : -1;
    let valA = a[sortConfig.key];
    let valB = b[sortConfig.key];

    if (sortConfig.key === 'buyer') {
      valA = a.buyer.name.toLowerCase();
      valB = b.buyer.name.toLowerCase();
    }

    if (valA > valB) return 1 * dir;
    if (valA < valB) return -1 * dir;
    return 0;
  });

  const totalItems = sorted.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginated = sorted.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const requestSort = (key) => {
    setSortConfig((current) => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
    }));
    setPage(1);
  };

  const headers = [
    { key: 'dateTime', label: 'Date & Time', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'buyer', label: 'Buyer Name', sortable: true },
    { key: 'brand', label: 'Brand', sortable: true },
    { key: 'dept', label: 'Dept.', sortable: true },
    { key: 'title', label: 'Title', sortable: true },
    { key: 'meetingDate', label: 'Meeting Date', sortable: true },
    { key: 'participants', label: 'Participants', sortable: true },
  ];

  return (
    <div className="">
      <div className="bg-white rounded-lg shadow border border-gray-200 flex flex-col flex-grow max-w-[calc(100vw-64px)] mx-auto overflow-x-auto rounded-tl-none rounded-tr-none">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] w-full text-left text-sm border-collapse">
            <thead className="bg-gray-100 select-none text-sm text-gray-800 font-medium shadow-sm">
              <tr className="group hover:bg-purple-100 transition-colors cursor-pointer">
                <th className="sticky left-0 z-30 bg-gray-100 px-4 py-3 w-14">
                  <input type="checkbox" className="w-5 h-5 cursor-pointer border border-gray-400 rounded" />
                </th>

                {headers.map(({ key, label, sortable }) => (
                  <th key={key} className="py-3 px-4 whitespace-nowrap bg-gray-100">
                    <button
                      onClick={() => sortable && requestSort(key)}
                      disabled={!sortable}
                      className={`flex items-center gap-1 w-full text-left font-medium text-gray-700 ${sortable ? 'hover:text-purple-700' : 'cursor-default'
                        }`}
                    >
                      {label}
                      {sortable && (
                        <>
                          {['dateTime', 'status', 'title', 'meetingDate', 'participants'].includes(key) && (
                            <UpDownArrow
                              className={`w-4 h-4 mt-2 ${sortConfig.key === key ? 'text-purple-700' : 'text-gray-400'}`}
                            />
                          )}
                          {['buyer', 'brand', 'dept'].includes(key) && (
                            <BlueDownArrow
                              className={`w-4 h-4 ${sortConfig.key === key ? 'text-purple-700' : 'text-blue-500'}`}
                            />
                          )}
                          {key === 'type' && (
                            <BlueUpArrow
                              className={`w-4 h-4 ${sortConfig.key === key ? 'text-purple-700' : 'text-blue-500'}`}
                            />
                          )}
                        </>
                      )}
                    </button>
                  </th>
                ))}

                <th className=" bg-gray-100 px-4 py-3 w-16 border-gray-300 shadow-outline">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="[&>tr]:border-b [&>tr]:border-gray-200">

              {paginated.map((me) => (
                <tr key={me.id} className="group hover:bg-purple-100 transition-colors cursor-pointer">
                  <td className="bg-white group-hover:bg-purple-100 px-4 py-3 transition-colors">
                    <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">{me.dateTime}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded text-xs font-semibold ${STATUS_STYLES[me.status]}`}>
                      {me.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <TypeTag type={me.type} />
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    {me.buyer.url ? (
                      <a
                        href={me.buyer.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black font-bold underline"
                      >
                        {me.buyer.name}
                      </a>
                    ) : (
                      me.buyer.name
                    )}
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-black font-bold underline ">{me.brand}</td>
                  <td className="py-3 px-4 whitespace-nowrap text-black font-bold underline">{me.dept}</td>
                  <td className="py-3 px-4 whitespace-nowrap text-black font-bold underline cursor-pointer">{me.title}</td>
                  <td className="py-3 px-4 whitespace-nowrap">{me.meetingDate}</td>
                  <td className="py-3 px-4 whitespace-nowrap w-[138.5px] h-6">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#32B245] flex items-center justify-center text-white text-[10px] font-semibold">
                        {me.participants[0]?.name?.charAt(0)}
                      </div>
                      <div className="leading-tight w-[111px] h-6 text-[13px] text-gray-800 font-medium">
                        <div>
                          {me.participants[0]?.name}
                          {me.participants.length > 1 && (
                            <span className="text-gray-500"> +{me.participants.length - 1}</span>
                          )}
                        </div>
                        <div className="text-[12px] text-gray-600">
                          {me.participants[0]?.role}
                        </div>
                      </div>
                    </div>
                  </td>



                  <td className=" right-0 border-gray-300 px-4 py-3 text-center bg-white group-hover:bg-purple-100 transition-colors">
                    {/* <FaEllipsisV  onClick={<ActionMenu book={me} />}/> */}
                    <ActionMenu book={me} />

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="w-full flex items-center justify-between gap-4 p-4 border-t border-gray-300 bg-white rounded-b-lg sticky bottom-0 z-20">

          {/* LEFT: Items per page */}
          <div className="flex items-center gap-2 text-gray-700 font-medium select-none whitespace-nowrap w-full">
            <label htmlFor="itemsPerPage">Items per page:</label>
            <select
              id="itemsPerPage"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setPage(1);
              }}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {[5, 8, 10, 25, 50].map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* CENTER: Item range + Pagination */}
          <div className="flex items-center gap-4 flex-1 justify-end  w-full">
            {/* Item Range */}
            <div className="text-gray-600 text-sm select-none whitespace-nowrap">
              {`${(page - 1) * itemsPerPage + 1} - ${Math.min(page * itemsPerPage, totalItems)} of ${totalItems}`}
            </div>

            {/* Pagination Controls */}
            <nav className="flex items-center space-x-1" aria-label="Pagination">
              {/* Previous button */}
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-2 py-2 rounded border border-gray-300 bg-white text-gray-700 hover:bg-purple-100 disabled:opacity-50"
              >
                <LeftArrow />
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((num) => {
                  return (
                    num === 1 || // first page
                    num === totalPages || // last page
                    Math.abs(num - page) <= 1 || // current, previous, next
                    (num <= 3 && page < 5) || // show first few pages when early
                    (num >= totalPages - 2 && page > totalPages - 4) // show last few when near end
                  );
                })
                .reduce((acc, curr, idx, arr) => {
                  // Insert ellipsis (...) if needed
                  if (idx > 0 && curr - arr[idx - 1] > 1) {
                    acc.push('ellipsis');
                  }
                  acc.push(curr);
                  return acc;
                }, [])
                .map((item, index) =>
                  item === 'ellipsis' ? (
                    <span key={`ellipsis-${index}`} className="px-2 text-gray-500 select-none">
                      ...
                    </span>
                  ) : (
                    <button
                      key={item}
                      onClick={() => setPage(item)}
                      className={`px-3 py-1 rounded border text-sm transition ${page === item
                          ? 'bg-purple-600 text-white border-purple-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-100'
                        }`}
                    >
                      {item}
                    </button>
                  )
                )}

              {/* Next button */}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-2 py-2 rounded border border-gray-300 bg-white text-gray-700 hover:bg-purple-100 disabled:opacity-50"
              >
                <RightArrow />
              </button>
            </nav>
          </div>

          {/* RIGHT: Empty or reserved for future actions */}
          <div className="w-[180px]"></div>
        </div>

        {/* Pagination ends*/}

      </div>
    </div>
  );
}
