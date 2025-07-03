// src/components/Navbar/Navbar.jsx
import { useState, useRef, useEffect } from 'react';
import { MenuIcon, SearchIcon } from '@heroicons/react/outline';
import NotificationIcon from './NotificationIcon';
import ProfileMenu from './ProfileMenu';
import NotificationDropdown from '../Notification/NotificationDropdown';
import BellNotificationDropdown from '../Notification/BellNotificationDropdown'
import ProfileImage from '../../assets/profile/profile.png';
import { ChatIcon, BellIcon } from '../../assets/Icons/IconsSvg';
import Profile from '../../assets/profile/profile.png';
// import {GreyCalendar} from '../../assets/Icons/IconsSvg'
import GreyCalendar from '../../assets/Icons/GreyCalendar.png'

const Navbar = ({ toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPingNotifications, setShowPingNotifications] = useState(false);

  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New message from Alice', time: '2 hrs ago', unread: true, avatar: Profile, from: '[user_name]' },
    { id: 2, message: 'Payment completed', time: '1 day ago', unread: false, avatar: Profile, from: '[user_name]' },
    { id: 3, message: 'Server error occurred', time: '3 days ago', unread: true, avatar: Profile, from: '[user_name]' },
    { id: 4, message: 'Meeting scheduled with Design team', time: '30 mins ago', unread: true, avatar: Profile, from: '[user_name]' },
  ]);

// ping notifications--> actual bell notifications
// notifications -->  chat notifications

  const [pingNotifications, setPingNotifications] = useState([
    {
      id: 1,
      message: 'Task Completed',
      time: '2 hrs ago',
      unread: true,
      avatar: Profile,
      task: '[task_title]',
      date: '2025-07-03 10:00 AM',
      title: 'Design Review Meeting',
    },
    {
      id: 2,
      message: 'Task Completed',
      time: '1 day ago',
      unread: false,
      avatar: Profile,
      task: '[task_title]',
      date: '2025-07-02 02:30 PM',
      title: 'UI Feedback Session',
    },
    {
      id: 3,
      message: 'Task Completed',
      time: '4 hrs ago',
      unread: true,
      avatar: GreyCalendar,
      task: '[task_title]',
      date: '2025-07-03 01:00 PM',
      title: 'Quarterly Campaign Review',
    },
    {
      id: 4,
      message: 'Task Completed',
      time: '2 days ago',
      unread: false,
      avatar: GreyCalendar,
      task: '[task_title]',
      date: '2025-07-01 09:00 AM',
      title: 'Budget Planning Call',
    },
  ]);

  const notificationRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (notificationRef.current && !notificationRef.current.contains(e.target)) {
        setShowNotifications(false);
        setShowPingNotifications(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="relative w-full h-[112px] flex items-center justify-between px-6 bg-white shadow-sm border-b border-gray-200">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle Sidebar"
        >
          <MenuIcon className="h-6 w-6 text-gray-700" />
        </button>
        <div className="w-[360px] h-[40px] flex items-center bg-[#F8FAFD] border border-[#ECECEC] rounded-md px-3 focus-within:ring-1 focus-within:ring-purple-500">
          <SearchIcon className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search anything here..."
            className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-6 relative" ref={notificationRef}>
        {/* Chat Notification */}
        <NotificationIcon
          icon={ChatIcon}
          count={notifications.filter(n => n.unread).length}
          onClick={() => {
            setShowNotifications(prev => !prev);
            setShowPingNotifications(false);
          }}
        />

        {/* Ping Notification */}
        <NotificationIcon
          icon={BellIcon}
          count={pingNotifications.filter(n => n.unread).length}
          onClick={() => {
            setShowPingNotifications(prev => !prev);
            setShowNotifications(false);
          }}pingNotifications
        />

        {/* Chat Notification Dropdown */}
        {showNotifications && (
          <NotificationDropdown
            notifications={notifications}
            onRemove={(id) =>
              setNotifications(notifications.filter(n => n.id !== id))
            }
            onViewAll={() =>
              setNotifications(notifications.map(n => ({ ...n, unread: false })))
            }
          />
        )}

        {/* Ping Notification Dropdown */}
        {showPingNotifications && (
          <BellNotificationDropdown
            notifications={pingNotifications}
            onRemove={(id) =>
              setPingNotifications(pingNotifications.filter(n => n.id !== id))
            }
            onViewAll={() =>
              setPingNotifications(pingNotifications.map(n => ({ ...n, unread: false })))
            }
          />
        )}

        {/* Profile */}
        <ProfileMenu
          name="Mohd Saleem"
          role="Admin"
          imageUrl={ProfileImage}
        />
      </div>
    </header>
  );
};

export default Navbar;
