import Logo from '../../assets/Logo.png';
import { useState } from 'react';
import { menuItems } from './menuConfig';
import MenuItem from './MenuItem';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <aside
      className="w-80 h-screen p-4 bg-white flex flex-col gap-6 shadow-md"
      role="navigation"
      aria-label="Sidebar"
    >
      {/* Logo Area */}
      <div className="flex items-center gap-4 mb-2 px-2 ">
        <img src={Logo} alt="Company Logo" className="h-12 object-contain " />
      </div>
      

      {/* Menu Items Container */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1 hide-scrollbar">
        {menuItems.map(({ name, icon: Icon, hasSub }) => (
          <MenuItem
            key={name}
            name={name}
            Icon={Icon}
            hasSub={hasSub}
            isActive={activeItem === name}
            onClick={() => setActiveItem(name)}
          />
        ))}
      </div>
    </aside>
  );
}
