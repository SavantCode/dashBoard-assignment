import { useState } from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from './Components/Navbar/Navbar';
// import BuyerMeetingPage from './Pages/BuyerMeetingPage';  // removed this import
import DashboardHeader from './Components/DashboardHeader/DashboardHeader';
import StatusTable from './Components/Table/StatusTable';
import MeetingPage from './Components/Table/MeetingPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      {sidebarOpen && <Sidebar />}
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={() => setSidebarOpen((prev) => !prev)} />

        <main className="bg-gray-50 overflow-auto p-4 main-no-scrollbar">

          {/* Dashboard Header added here */}
          <DashboardHeader />
          {/* this is Search bar filters+ contains TABLE Too */}
          <MeetingPage />

        </main>
      </div>
    </div>
  );
}

export default App;
