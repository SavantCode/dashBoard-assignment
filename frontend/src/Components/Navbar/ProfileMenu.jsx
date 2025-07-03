import PropTypes from 'prop-types';

const ProfileMenu = ({ name, role, imageUrl }) => {
  return (
    <div className="flex items-center gap-3 w-[160px]">
      <img
        src={imageUrl}
        alt="User Profile"
        className="w-[48px] h-[48px] rounded-full object-cover"
      />
      <div>
        <p className="text-[15px] font-semibold font-poppins text-gray-900 leading-[18px]">
          {name}
        </p>
        <p className="text-[13px] text-[#676767] font-poppins">{role}</p>
      </div>
    </div>
  );
};

ProfileMenu.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProfileMenu;
