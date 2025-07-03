// src/components/Navbar/NotificationIcon.jsx
import PropTypes from 'prop-types';

const NotificationIcon = ({ icon: Icon, count, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-[34px] h-[34px] flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
    >
      <Icon className="w-[24px] h-[24px] text-gray-600" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#6C2BD9] text-white text-[11px] w-5 h-5 flex items-center justify-center rounded-full font-semibold">
          {count}
        </span>
      )}
    </button>
  );
};

NotificationIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default NotificationIcon;
