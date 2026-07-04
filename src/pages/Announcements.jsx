import React from 'react';
import Layout from '../components/Layout';
import { announcements } from '../data/mockData';
import { Megaphone, Calendar } from 'lucide-react';

const Announcements = () => {
  return (
    <Layout title="Notice Board">
      <div className="space-y-4 pb-8">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white rounded-2xl p-5 shadow-soft hover:shadow-md transition-shadow relative overflow-hidden group">
            {/* Decorative line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-portalBlack group-hover:bg-blue-500 transition-colors"></div>
            
            <div className="flex gap-4">
              <div className="bg-blue-50 text-blue-600 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                <Megaphone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{announcement.title}</h3>
                <div className="flex items-center text-xs text-gray-500 mb-2 gap-1 font-medium">
                  <Calendar size={12} />
                  <span>{announcement.date}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {announcement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Announcements;
