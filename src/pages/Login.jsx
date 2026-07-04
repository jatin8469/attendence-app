import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, CheckSquare } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email) {
      if(email.includes('teacher')) {
         navigate('/admin');
      } else {
         navigate('/dashboard');
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans relative">
      
      {/* Top Image Section with Dark Overlay */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        {/* Placeholder image for the university building */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000)' }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Header Text */}
        <div className="absolute top-16 left-0 right-0 text-center z-10 px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">UPL</h1>
          <p className="text-gray-200 text-sm md:text-base mt-2 font-light">Login to your GNUMS ERP</p>
        </div>

        {/* White Curve at the bottom of the image */}
        <svg viewBox="0 0 1440 200" className="absolute -bottom-1 w-full h-16 md:h-24 z-10" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,50 L720,200 L1440,50 L1440,200 L0,200 Z"></path>
        </svg>
      </div>

      {/* Main Form Content */}
      <div className="flex-1 px-5 md:px-8 flex flex-col items-center">
        
        {/* Login Card */}
        <div className="w-full max-w-md bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] relative z-20 -mt-8 p-4 md:p-6 pb-5">
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-black" strokeWidth={2.5} />
              </div>
              <input 
                type="text" 
                className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-[15px] text-black placeholder-gray-500"
                placeholder="Email/Mobile No./USN *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-black" strokeWidth={2.5} />
              </div>
              <input 
                type="password" 
                className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-gray-300 focus:outline-none focus:border-black text-[15px] text-black placeholder-gray-500"
                placeholder="Enter Password *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center pt-1">
              <div className="w-5 h-5 bg-black rounded-[4px] flex items-center justify-center mr-3 flex-shrink-0 cursor-pointer">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <label className="text-[15px] font-medium text-black cursor-pointer">Remember Me</label>
            </div>

            {/* Login Button */}
            <button 
              type="submit" 
              className="w-full bg-black text-white py-3.5 rounded-lg text-[15px] font-bold tracking-wide mt-2"
            >
              LOGIN
            </button>

            {/* Forgot Password */}
            <div className="text-center pt-2">
              <a href="#" className="text-indigo-500 text-[15px] font-semibold hover:underline">
                Forgot Password ?
              </a>
            </div>
          </form>
        </div>

        {/* App Version */}
        <div className="text-center text-gray-500 text-[13px] font-medium mt-4">
          App Version : 2.0.8
        </div>
      </div>

      {/* Footer Logo Area */}
      <div className="pb-8 pt-10 flex justify-center items-center">
        <div className="flex items-center gap-3">
          {/* Mock Molecule Logo */}
          <div className="relative w-12 h-14">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <line x1="50" y1="20" x2="65" y2="30" stroke="#ccc" strokeWidth="2" />
              <line x1="65" y1="30" x2="60" y2="45" stroke="#ccc" strokeWidth="2" />
              <line x1="30" y1="45" x2="60" y2="45" stroke="#ccc" strokeWidth="2" />
              <line x1="30" y1="45" x2="30" y2="70" stroke="#ccc" strokeWidth="2" />
              <line x1="60" y1="45" x2="75" y2="65" stroke="#ccc" strokeWidth="2" />
              <line x1="30" y1="70" x2="50" y2="85" stroke="#ccc" strokeWidth="2" />
              <line x1="75" y1="65" x2="50" y2="85" stroke="#ccc" strokeWidth="2" />
              
              <circle cx="50" cy="20" r="6" fill="#88C057" />
              <circle cx="65" cy="30" r="5" fill="#F39C12" />
              <circle cx="60" cy="45" r="5" fill="#3498DB" />
              <circle cx="30" cy="45" r="5" fill="#3498DB" />
              <circle cx="30" cy="70" r="5" fill="#3498DB" />
              <circle cx="75" cy="65" r="5" fill="#3498DB" />
              <circle cx="50" cy="85" r="5" fill="#3498DB" />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[#3466A1] font-bold text-[15px] leading-tight tracking-wide">UPL UNIVERSITY</span>
            <span className="text-[#3466A1] text-[9px] font-semibold leading-tight ml-[4.5rem]">OF</span>
            <span className="text-[#3466A1] font-semibold text-[10px] leading-tight tracking-wide">SUSTAINABLE TECHNOLOGY</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
