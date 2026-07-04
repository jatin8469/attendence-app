import React, { useState } from 'react';
import Layout from '../components/Layout';
import { currentUser } from '../data/mockData';
import { User, Mail, Phone, Book, GraduationCap, Edit2, Save, X } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(currentUser);

  const handleSave = () => {
    // In a real app, save to Firebase here
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const InputField = ({ label, icon: Icon, name, value, type = "text", disabled = false }) => (
    <div className="mb-4">
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          disabled={disabled || !isEditing}
          className={`block w-full pl-10 pr-3 py-2 border ${
            isEditing && !disabled ? 'border-gray-300 focus:ring-portalBlack focus:border-portalBlack bg-white' : 'border-transparent bg-gray-50 text-gray-700'
          } rounded-xl focus:outline-none transition-colors sm:text-sm`}
        />
      </div>
    </div>
  );

  return (
    <Layout title="Student Profile">
      <div className="bg-white rounded-3xl shadow-soft p-6 relative">
        <div className="absolute top-6 right-6">
          {isEditing ? (
            <div className="flex gap-2">
              <button onClick={() => setIsEditing(false)} className="p-2 text-gray-400 hover:text-red-500 transition-colors bg-gray-100 rounded-full">
                <X size={20} />
              </button>
              <button onClick={handleSave} className="p-2 text-white bg-portalBlack hover:bg-portalDark transition-colors rounded-full shadow-md">
                <Save size={20} />
              </button>
            </div>
          ) : (
            <button onClick={() => setIsEditing(true)} className="p-2 text-portalBlack bg-gray-100 hover:bg-gray-200 transition-colors rounded-full">
              <Edit2 size={20} />
            </button>
          )}
        </div>

        <div className="flex flex-col items-center mb-8 pt-4">
          <div className="w-24 h-24 bg-portalBlack rounded-full flex items-center justify-center text-4xl text-white font-bold mb-4 shadow-lg">
            {profileData.name.charAt(0)}
          </div>
          <h2 className="text-xl font-bold text-gray-800 text-center">{profileData.name}</h2>
          <p className="text-sm text-gray-500">{profileData.rollNo} • {profileData.branch}</p>
        </div>

        <div className="space-y-2">
          <InputField label="Full Name" icon={User} name="name" value={profileData.name} />
          <InputField label="Email Address" icon={Mail} name="email" value={profileData.email} type="email" disabled />
          <InputField label="Phone Number" icon={Phone} name="phone" value={profileData.phone} type="tel" />
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Branch" icon={Book} name="branch" value={profileData.branch} disabled />
            <InputField label="Semester" icon={GraduationCap} name="semester" value={profileData.semester} disabled />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
