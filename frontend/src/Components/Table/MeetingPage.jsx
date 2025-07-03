import React, { useState } from 'react';
import MeetingFilters from './ MeetingFilters';
import MeetingTable from './MeetingTable';

const MeetingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
 const [filters, setFilters] = useState({
  buyer: '',
  brand: '',
  dept: '',
  meetingtype: '',
  participants: '',
  meetingdate: '',
  status: '',
});

  return (
    <div className="max-w-full p-6 pt-0 bg-gray-50 min-h-screen flex flex-col">
      
      <MeetingFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filters={filters}
        setFilters={setFilters}
      />
      <MeetingTable searchQuery={searchQuery} filters={filters} />
    </div>
  );
};

export default MeetingPage;
