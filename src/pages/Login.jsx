import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { currentUser } from '../data/mockData';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login for now
    if (email) {
      if(email.includes('teacher')) {
         navigate('/admin');
      } else {
         navigate('/dashboard');
      }
    }
  };

  return (
    <div className="min-h-screen bg-portalGray flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-portalBlack text-white p-8 text-center rounded-b-[40px] shadow-md relative z-10">
          <h1 className="text-3xl font-bold tracking-widest">{currentUser.collegeName}</h1>
          <p className="mt-2 text-gray-300 text-sm">Student Portal Login</p>
        </div>

        {/* Form Section */}
        <div className="p-8 pt-10 -mt-6 relative z-0">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portalBlack transition-all"
                placeholder="Enter your college email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-portalBlack transition-all"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-portalBlack text-white py-3 rounded-xl font-semibold hover:bg-portalDark transition-colors flex items-center justify-center gap-2"
            >
              <LogIn size={20} />
              Login
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Use "teacher@..." for Admin View</p>
            <p>Use any other email for Student View</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
