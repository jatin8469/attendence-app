import React, { useState } from 'react';
import Layout from '../components/Layout';
import { subjects, studentsList } from '../data/mockData';
import { Save } from 'lucide-react';

const AdminAttendance = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendance, setAttendance] = useState(
    studentsList.reduce((acc, student) => ({ ...acc, [student.uid]: true }), {})
  );
  const [message, setMessage] = useState('');

  const toggleAttendance = (uid) => {
    setAttendance(prev => ({
      ...prev,
      [uid]: !prev[uid]
    }));
  };

  const handleSave = () => {
    // Simulate save
    setMessage('Attendance saved successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <Layout title="Mark Attendance (Admin)">
      <div className="bg-white rounded-2xl p-6 shadow-soft mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Subject</label>
            <select 
              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portalBlack"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              <option value="">-- Choose Subject --</option>
              {subjects.map(sub => (
                <option key={sub.subjectId} value={sub.subjectId}>
                  {sub.name} ({sub.subjectId})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
            <input 
              type="date"
              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portalBlack"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      {selectedSubject && (
        <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <h3 className="font-semibold text-gray-700">Students List</h3>
            <span className="text-sm text-gray-500">Total: {studentsList.length}</span>
          </div>
          
          <div className="divide-y divide-gray-100">
            {studentsList.map(student => (
              <div key={student.uid} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                <div>
                  <p className="font-semibold text-gray-800">{student.name}</p>
                  <p className="text-xs text-gray-500">Roll No: {student.rollNo}</p>
                </div>
                <button
                  onClick={() => toggleAttendance(student.uid)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    attendance[student.uid] 
                      ? 'bg-green-100 text-green-700 border border-green-200' 
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}
                >
                  {attendance[student.uid] ? 'Present' : 'Absent'}
                </button>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-100 flex flex-col items-center">
            {message && (
              <p className="text-green-600 text-sm font-medium mb-3">{message}</p>
            )}
            <button 
              onClick={handleSave}
              className="w-full md:w-auto px-8 py-3 bg-portalBlack text-white rounded-xl font-semibold hover:bg-portalDark transition-colors flex items-center justify-center gap-2"
            >
              <Save size={18} />
              Save Attendance
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default AdminAttendance;
