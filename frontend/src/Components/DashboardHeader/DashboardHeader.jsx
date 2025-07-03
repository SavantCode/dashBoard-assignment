import { FiPlus, FiDownload } from "react-icons/fi";
import { DoubleRightArrow, ArrowUpTrayIcon } from '../../assets/Icons/IconsSvg';
import FilterBar from './FilterBar.jsx';
import { Menu } from '@headlessui/react';


const DashboardHeader = () => {
  return (
    <div className="px-8 pt-8 pb-6 bg-gray-50 rounded-xl shadow-sm">
      {/* Breadcrumb and Title */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Buyer Meeting List View
          </h1>
          <div className="text-sm text-gray-500 flex items-center flex-wrap gap-1">
            <span className="text-purple-600 font-medium">Buyer Meeting</span>
            <span className="mx-2 inline-block align-middle">
              <DoubleRightArrow className="w-4 h-4" />
            </span>
            <span>Buyer Meeting List View</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap">
          

          <button className="inline-flex items-center px-5 py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-700 transition">
            <ArrowUpTrayIcon className="mr-2 w-5 h-5" />
            Export
          </button>
          <button className="inline-flex items-center px-5 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition">
            <FiPlus className="mr-2 text-lg" />
            Create New Meeting
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mt-8">
        <FilterBar />
      </div>
    </div>
  );
};

export default DashboardHeader;
