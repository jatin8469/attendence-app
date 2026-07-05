import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';

const Attendance = () => {
  const [activeTab, setActiveTab] = useState('Previous');

  // Dummy data matching the screenshot
  const previousData = [
    { sem: 4, ay: 'A.Y. 2025-26 - Even', percentage: 82.22 },
    { sem: 3, ay: 'A.Y. 2025-26 - Odd', percentage: 76.22 },
    { sem: 3, ay: 'A.Y. 2025-26 - Odd', percentage: 76.22 },
  ];

  const currentData = {
    sem: 5,
    ay: 'A.Y. 2026-27 - Odd',
    percentage: 95,
    present: 63,
    absent: 6,
    pending: 0,
    noAttendance: 0,
    total: 69
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans pb-10">
      {/* Header */}
      <header className="bg-black text-white h-14 flex items-center px-4 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 cursor-pointer">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="flex-1 text-center text-[17px] font-semibold pr-8">Attendance</h1>
      </header>

      {/* Tabs */}
      <div className="flex border-b border-gray-300 pt-4 px-6 gap-6 bg-[#F2F2F2]">
        <button 
          onClick={() => setActiveTab('Current')}
          className={`pb-2 text-[15px] transition-colors ${
            activeTab === 'Current' 
              ? 'text-[#2e2e48] font-bold border-b-2 border-[#2e2e48]' 
              : 'text-gray-400 font-medium'
          }`}
        >
          Current
        </button>
        <button 
          onClick={() => setActiveTab('Previous')}
          className={`pb-2 text-[15px] transition-colors ${
            activeTab === 'Previous' 
              ? 'text-[#2e2e48] font-bold border-b-2 border-[#2e2e48]' 
              : 'text-gray-400 font-medium'
          }`}
        >
          Previous
        </button>
      </div>

      {/* Content List */}
      <div className="p-4 space-y-3 mt-2">
        {activeTab === 'Previous' && previousData.map((data, idx) => (
          <div key={idx} className="bg-white rounded-[14px] p-3 flex gap-3 shadow-[0_1px_8px_rgba(0,0,0,0.05)] items-center">
            
            {/* Left Semester Block */}
            <div className="bg-[#E2E2E2] rounded-[10px] w-14 h-14 flex flex-col items-center justify-center flex-shrink-0 text-[13px] font-semibold text-black leading-tight">
              <span>Sem</span>
              <span>{data.sem}</span>
            </div>
            
            {/* Right Details */}
            <div className="flex-1 pr-1">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[#329683] text-[13px] font-semibold tracking-tight">{data.ay}</span>
                <span className="text-gray-700 text-[13px]">Attendance</span>
              </div>
              
              <div className="flex justify-between items-center gap-3">
                {/* Progress Bar Track */}
                <div className="flex-1 bg-gray-200 h-[3px] rounded-full overflow-hidden">
                   {/* Progress Bar Fill */}
                   <div 
                     className="bg-[#59A859] h-full rounded-full" 
                     style={{ width: `${data.percentage}%` }}
                   ></div>
                </div>
                {/* Percentage Text */}
                <span className="text-[#59A859] text-[13px] font-bold w-12 text-right">
                  {data.percentage}%
                </span>
              </div>
            </div>
          </div>
        ))}

        {activeTab === 'Current' && (
          <div className="flex flex-col gap-2">
            {/* Main Current Attendance Card */}
            <div className="bg-white rounded-[14px] p-3 flex gap-3 shadow-[0_1px_8px_rgba(0,0,0,0.05)] items-center">
              {/* Left Semester Block */}
              <div className="bg-[#E2E2E2] rounded-[10px] w-14 h-14 flex flex-col items-center justify-center flex-shrink-0 text-[13px] font-semibold text-black leading-tight">
                <span>Sem</span>
                <span>{currentData.sem}</span>
              </div>
              
              {/* Right Details */}
              <div className="flex-1 pr-1">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[#329683] text-[13px] font-semibold tracking-tight">{currentData.ay}</span>
                  <ChevronDown className="w-5 h-5 text-black" strokeWidth={2.5} />
                </div>
                
                <div className="flex justify-between items-center gap-3">
                  {/* Progress Bar Track */}
                  <div className="flex-1 bg-gray-200 h-[3px] rounded-full overflow-hidden">
                     {/* Progress Bar Fill */}
                     <div 
                       className="bg-[#59A859] h-full rounded-full" 
                       style={{ width: `${currentData.percentage}%` }}
                     ></div>
                  </div>
                  {/* Percentage Text */}
                  <span className="text-[#59A859] text-[13px] font-bold w-12 text-right">
                    {currentData.percentage}%
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Breakdown Card */}
            <div className="bg-white rounded-[14px] p-4 shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                <div className="flex justify-between items-center text-[15px]">
                  <span className="text-[#4CAF50] font-medium">Present :</span>
                  <span className="text-[#4CAF50] font-semibold">{currentData.present} / {currentData.total}</span>
                </div>
                <div className="flex justify-between items-center text-[15px]">
                  <span className="text-[#EF4444] font-medium">Absent :</span>
                  <span className="text-[#EF4444] font-semibold">{currentData.absent} / {currentData.total}</span>
                </div>
                <div className="flex justify-between items-center text-[15px]">
                  <span className="text-[#F59E0B] font-medium">Pending :</span>
                  <span className="text-[#F59E0B] font-semibold">{currentData.pending} / {currentData.total}</span>
                </div>
                <div className="flex justify-between items-center text-[15px]">
                  <span className="text-[#3B82F6] font-medium">No Attendance :</span>
                  <span className="text-[#3B82F6] font-semibold">{currentData.noAttendance} / {currentData.total}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Attendance;
