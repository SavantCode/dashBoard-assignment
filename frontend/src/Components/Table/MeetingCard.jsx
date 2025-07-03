import React from 'react';
import classNames from 'classnames';

export default function MeetingCard({ date, time, title, status, participants = [], onClick }) {
  const STATUS_STYLES = {
    Completed: 'bg-green-100 text-green-800',
    Upcoming: 'bg-yellow-100 text-yellow-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    Overdue: 'bg-red-100 text-red-800',
    Draft: 'bg-gray-100 text-gray-800',
  };

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md w-full max-w-sm"
    >
      <div className="flex items-center space-x-4">
        <div className="text-gray-600 text-sm">
          <div>{date}</div>
          <div className="font-semibold">{time}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-800 font-bold">{title}</div>
          <div
            className={classNames(
              'mt-1 inline-block px-2 py-1 text-xs font-medium rounded',
              STATUS_STYLES[status] || STATUS_STYLES.Draft
            )}
          >
            {status}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <span className="text-gray-700 text-sm">
          {participants.length > 2
            ? `${participants[0]}, ${participants[1]} +${participants.length - 2}`
            : participants.join(', ')}
        </span>
      </div>
    </button>
  );
}
