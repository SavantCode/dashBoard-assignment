// src/components/ActionMenu.jsx
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Menu } from '@headlessui/react';
import { FaEllipsisV } from 'react-icons/fa';
import BookCard from './BookCard';
import {ProfileIcon, SettingsIcon, LogOutIcon} from '../../../assets/Icons/IconsSvg'

const ActionMenu = ({ book }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Menu as="div" className="relative inline-block text-left z-100">
        <Menu.Button className="p-1 rounded transition-colors hover:bg-gray-100 focus:outline-none">
          <FaEllipsisV />
        </Menu.Button>

        <Menu.Items className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 shadow-lg rounded text-sm z-50 focus:outline-none">
          <Menu.Item className="border-b border-gray-200">
            {({ active, close }) => (
              <button
                className={`flex items-center w-full px-4 py-2 gap-2 ${active ? 'bg-gray-100' : ''}`}
                onClick={() => {
                  close();         // 👈 Close the menu
                  setIsOpen(true); // 👈 Open the dialog
                }}
              >
                <ProfileIcon className="text-gray-600 w-4 h-4" />
                <span>View Book</span>
              </button>
            )}
          </Menu.Item>

          <Menu.Item className="border-b border-gray-200">
            {({ active, close }) => (
              <button
                className={`flex items-center w-full px-4 py-2 gap-2 ${active ? 'bg-gray-100' : ''}`}
                onClick={() => {
                  close();
                  console.log('Settings clicked');
                }}
              >
                <SettingsIcon className="text-gray-600 w-4 h-4" />
                <span>Settings</span>
              </button>
            )}
          </Menu.Item>

          <Menu.Item className="border-b border-gray-200">
            {({ active, close }) => (
              <button
                className={`flex items-center w-full px-4 py-2 gap-2 ${active ? 'bg-gray-100' : ''}`}
                onClick={() => {
                  close();
                  console.log('Logout clicked');
                }}
              >
                <LogOutIcon className="text-gray-600 w-4 h-4" />
                <span>Logout</span>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>

      {/* Dialog for Book Details */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300 bg-opacity-30"
      >
        <Dialog.Panel className="bg-white p-6 rounded max-w-md w-full shadow-lg">
          <Dialog.Title className="text-lg font-bold mb-4">Book Details</Dialog.Title>
          <BookCard book={book} />
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Close
          </button>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default ActionMenu;
