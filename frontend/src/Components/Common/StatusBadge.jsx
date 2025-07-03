const STATUS_STYLES = {
  Completed: 'bg-green-100 text-green-700',
  Overdue: 'bg-red-100 text-red-700',
  Draft: 'bg-gray-200 text-gray-700',
  // ...add others
};

const StatusBadge = ({ status }) => {
  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded ${STATUS_STYLES[status] || ''}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
