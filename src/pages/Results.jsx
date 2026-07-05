import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, TrendingUp, X } from 'lucide-react';

const Results = () => {
  const [activeTab, setActiveTab] = useState('Transcript');

  const semesters = [
    { sem: 4, spi: 7.89, bl: 0 },
    { sem: 3, spi: 6.33, bl: 0 },
    { sem: 2, spi: 7.7, bl: 0 },
    { sem: 1, spi: 7.76, bl: 0 },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans pb-10">
      {/* Header */}
      <header className="bg-black text-white h-14 flex items-center px-4 sticky top-0 z-10">
        <Link to="/dashboard" className="p-2 -ml-2 cursor-pointer">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="flex-1 text-center text-[17px] font-semibold pr-8">Results</h1>
      </header>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 pt-4 px-6 gap-6 bg-white">
        <button 
          onClick={() => setActiveTab('Transcript')}
          className={`pb-2 text-[15px] transition-colors ${
            activeTab === 'Transcript' 
              ? 'text-[#2e2e48] font-bold border-b-2 border-[#2e2e48]' 
              : 'text-gray-400 font-medium'
          }`}
        >
          Transcript
        </button>
        <button 
          onClick={() => setActiveTab('Result')}
          className={`pb-2 text-[15px] transition-colors ${
            activeTab === 'Result' 
              ? 'text-[#2e2e48] font-bold border-b-2 border-[#2e2e48]' 
              : 'text-gray-400 font-medium'
          }`}
        >
          Result
        </button>
      </div>

      <div className="p-4 mt-2">
        {/* Top Summary Cards */}
        {activeTab === 'Transcript' && (
          <>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {/* CPI Card */}
              <div className="bg-white rounded-[14px] p-4 flex justify-between items-center shadow-sm relative overflow-hidden">
                {/* Soft green gradient blob on right */}
                <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-green-100 to-transparent opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="text-xl font-bold text-gray-900 leading-tight">7.4</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">CPI</div>
                </div>
                <div className="bg-green-100/80 p-2 rounded-full relative z-10">
                  <TrendingUp className="w-4 h-4 text-green-700" strokeWidth={2.5} />
                </div>
              </div>

              {/* Total Backlog Card */}
              <div className="bg-white rounded-[14px] p-4 flex justify-between items-center shadow-sm relative overflow-hidden">
                {/* Soft red gradient blob on right */}
                <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-red-100 to-transparent opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="text-xl font-bold text-gray-900 leading-tight">0</div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">Total Backlog</div>
                </div>
                <div className="bg-red-400 p-1 rounded-full relative z-10 flex items-center justify-center w-6 h-6">
                  <X className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              </div>
            </div>

            {/* Semester Wise Result List */}
            <h2 className="text-[15px] font-semibold text-[#545A6B] mb-3 px-1">Semester Wise Result</h2>
            
            <div className="space-y-3">
              {semesters.map((sem, idx) => (
                <div key={idx} className="bg-white rounded-[12px] p-3.5 px-4 shadow-sm flex items-center justify-between cursor-pointer">
                  <div className="flex items-center text-[14px] font-semibold tracking-tight">
                    <span className="text-gray-900 w-16">Sem - {sem.sem}</span>
                    <span className="text-gray-300 mx-1">•</span>
                    <span className="text-[#59A859] w-20">SPI: {sem.spi}</span>
                    <span className="text-gray-300 mx-1">•</span>
                    <span className="text-[#F15555]">BL: {sem.bl}</span>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-800" strokeWidth={2} />
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'Result' && (
          <div className="text-center text-gray-400 mt-10">
            Current Semester Result not published yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
