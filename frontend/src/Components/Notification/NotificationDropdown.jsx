// src/components/Navbar/NotificationDropdown.jsx
import React from 'react';
import { XIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types';

const NotificationDropdown = ({
  notifications,
  onRemove,
  onViewAll,
}) => {
  const chatCount = notifications.length;

  return (
    <div className="absolute top-[55px] right-0 w-[339px] bg-white border border-gray-200 rounded shadow z-50">
      {/* Header */}
      <div className="flex justify-between items-center px-2 py-3 border-b border-gray-200">
        <div className="flex items-center gap-40">
          <span className="font-poppins font-semibold text-[18px] leading-[25px] text-black">

            Chat
          </span>
          <span className="ml-2 bg-[#B8EECC] text-[#29B95F] text-[13px] font-poppins px-2 py-[2px] rounded border-2 border-[#52c980]">
            {chatCount} new
          </span>
        </div>
      </div>

      {/* Notification Items */}
      <div className="max-h-[285px] overflow-y-auto hide-scrollbar">
        {notifications.map((n, idx) => (
          <div
            key={n.id}
                className={`flex items-start p-2 border-b border-gray-200 ${idx === notifications.length - 1 ? 'mb-8' : ''}`}

          >
            <img
              src={n.avatar}
              alt={n.user}
              className="w-[35px] h-[35px] rounded-full object-cover"
            />
            <div className="ml-2 w-[234px]">
              <p className="font-poppins font-semibold text-[13px] text-gray-700">
                New Message
              </p>
              <p className="font-poppins font-medium text-[10px] text-[#676767]">
                You have a new message from <span className='text-blue-400'>{n.from}</span>
                <span className="text-blue-500">{n.user}</span>
              </p>
              <p className="font-poppins font-medium text-[10px] text-[#676767]">
                {n.time}
              </p>
            </div>
            <button
              className="ml-auto p-1"
              onClick={() => onRemove(n.id)}
            >
              <XIcon className="w-[15px] h-[15px] text-gray-500" />
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center px-2 py-5 gap-8 border-t border-gray-200 ">
        <button
          className="w-[319px] h-[32px] bg-[#8210FB] text-white font-poppins font-medium rounded"
          onClick={onViewAll}
        >
          View All
        </button>
      </div>
    </div>
  );
};

NotificationDropdown.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      user: PropTypes.string,
      time: PropTypes.string,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onViewAll: PropTypes.func.isRequired,
};

export default NotificationDropdown;
