import React from 'react';
import Layout from '../components/Layout';
import { mockAttendance, subjects } from '../data/mockData';

const Attendance = () => {
  // Combine attendance with subject info
  const attendanceData = mockAttendance.map(att => {
    const subject = subjects.find(s => s.subjectId === att.subjectId);
    const percentage = Math.round((att.present / att.total) * 100);
    return {
      ...att,
      ...subject,
      percentage
    };
  });

  const overallPercentage = Math.round(
    (mockAttendance.reduce((acc, curr) => acc + curr.present, 0) / 
    mockAttendance.reduce((acc, curr) => acc + curr.total, 0)) * 100
  );

  return (
    <Layout title="Attendance Dashboard">
      {/* Overall Attendance Card */}
      <div className="bg-white rounded-2xl p-6 shadow-soft mb-6 text-center">
        <h2 className="text-gray-500 text-sm font-semibold mb-2">Overall Attendance</h2>
        <div className={`text-4xl font-bold ${overallPercentage >= 75 ? 'text-green-500' : 'text-red-500'}`}>
          {overallPercentage}%
        </div>
      </div>

      <div className="space-y-4 pb-8">
        {attendanceData.map((data, idx) => {
          const isLow = data.percentage < 75;
          return (
            <div key={idx} className="bg-white rounded-2xl p-5 shadow-soft hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-800">{data.name}</h3>
                  <p className="text-sm text-gray-500">{data.faculty}</p>
                </div>
                <div className={`text-xl font-bold ${isLow ? 'text-red-500' : 'text-green-500'}`}>
                  {data.percentage}%
                </div>
              </div>

              <div className="flex justify-between text-xs text-gray-500 mb-3">
                <span>Total: {data.total}</span>
                <span>Present: {data.present}</span>
                <span>Absent: {data.total - data.present}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div 
                  className={`h-2.5 rounded-full ${isLow ? 'bg-red-500' : 'bg-green-500'}`} 
                  style={{ width: `${data.percentage}%` }}
                ></div>
              </div>

              {isLow && (
                <p className="text-xs text-red-500 mt-2 font-medium">
                  ⚠️ Your attendance is low in this subject.
                </p>
              )}
            </div>
          )
        })}
      </div>
    </Layout>
  );
};

export default Attendance;
