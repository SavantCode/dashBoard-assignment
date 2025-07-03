import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const MiniMenu = ({ book }) => {
  return (
    <div className="absolute top-6 left-4 w-[196px] border border-[#D9D9D9] bg-white z-50 rounded shadow-md">
      {/* Profile */}
      <div className="flex items-center w-full h-[40px] px-[10px] py-[10px] gap-[10px] border-b border-[#D9D9D9] bg-[#F5F5F5]">
        <FaUser className="w-[15px] h-[15px] text-[#676767]" />
        <span className="font-poppins font-semibold text-[13px] text-[#676767]">Profile</span>
      </div>

      {/* Settings */}
      <div className="flex items-center w-full h-[40px] px-[10px] py-[10px] gap-[10px] border-b border-[#D9D9D9] hover:bg-gray-100 cursor-pointer">
        <FaCog className="w-[15px] h-[15px] text-[#676767]" />
        <span className="font-poppins font-semibold text-[13px] text-[#676767]">Settings</span>
      </div>

      {/* Logout */}
      <div className="flex items-center w-full h-[40px] px-[10px] py-[10px] gap-[10px] hover:bg-gray-100 cursor-pointer">
        <FaSignOutAlt className="w-[15px] h-[15px] text-[#676767]" />
        <span className="font-poppins font-semibold text-[13px] text-[#676767]">Logout</span>
      </div>
    </div>
  );
};

export default MiniMenu;
