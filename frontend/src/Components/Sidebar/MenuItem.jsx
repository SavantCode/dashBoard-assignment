import { ChevronRightIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

const MenuItem = ({ name, Icon, isActive, onClick, hasSub }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-5 py-3 rounded-full transition-colors duration-200
        ${isActive ? 'bg-violet-100 text-violet-800 ' : 'bg-white text-gray-700 hover:bg-gray-100'}
      `}
      role="menuitem"
      aria-current={isActive ? 'page' : undefined}
    >
      <div className="flex items-center gap-4 overflow-hidden">
        <Icon
          className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-violet-700' : 'text-gray-500'}`}
        />
        <span className="font-medium text-sm font-poppins truncate ">{name}</span>
      </div>
      {hasSub && (
        <ChevronRightIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
      )}
    </button>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  hasSub: PropTypes.bool,
};

export default MenuItem;
