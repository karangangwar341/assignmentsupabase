import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/Header';
import Filters from '../components/Filters';
import StudentsTable from '../components/StudentsTable';
import '../app/globals.css';

export default function Home() {
  const [selectedCohort, setSelectedCohort] = useState(null);

  return (
    <Provider store={store}>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <TopBar />

          {/* Content Area */}
          <main className="p-4 bg-white mx-5 rounded-2xl
           flex-1 overflow-y-auto">
           
            <StudentsTable cohortId={selectedCohort} />
          </main>
        </div>
      </div>
    </Provider>
  );
}
