import React from 'react';
import { UserCircle } from 'lucide-react';
import { currentUser } from '../data/mockData';

const Layout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-portalGray pb-10">
      {/* Dark Curved Header */}
      <div className="bg-portalBlack text-white px-6 pt-10 pb-16 header-curve shadow-md relative z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold tracking-wider">{currentUser.collegeName}</h1>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-yellow-400">{currentUser.name}</h2>
              <p className="text-xs text-gray-300 mt-1">
                {currentUser.phone} | {currentUser.email}
              </p>
            </div>
          </div>
          <div className="bg-gray-600 rounded-full p-1 border-2 border-transparent hover:border-gray-400 transition-all cursor-pointer">
             <UserCircle size={48} className="text-gray-300" />
          </div>
        </div>

        {/* Student Meta Data Row */}
        <div className="max-w-4xl mx-auto mt-6 flex justify-between text-center text-xs text-gray-300">
          <div>
            <p className="opacity-70 mb-1">Branch</p>
            <p className="font-bold text-white">{currentUser.branch}</p>
          </div>
          <div>
            <p className="opacity-70 mb-1">Sem</p>
            <p className="font-bold text-white">{currentUser.semester}</p>
          </div>
          <div>
            <p className="opacity-70 mb-1">Division</p>
            <p className="font-bold text-white">{currentUser.division}</p>
          </div>
          <div>
            <p className="opacity-70 mb-1">Roll No.</p>
            <p className="font-bold text-white">{currentUser.rollNo}</p>
          </div>
          <div>
            <p className="opacity-70 mb-1">Batch</p>
            <p className="font-bold text-white">{currentUser.batch}</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
        {title && <h3 className="text-xl font-bold mb-4 text-portalDark">{title}</h3>}
        {children}
      </main>

      {/* Footer Version */}
      <div className="text-center text-sm text-gray-400 mt-12">
        App Version : 1.0.0
      </div>
    </div>
  );
};

export default Layout;
