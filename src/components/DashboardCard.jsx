import React from 'react';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, icon: Icon, colorClass, linkTo }) => {
  return (
    <Link 
      to={linkTo}
      className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-3 shadow-soft hover:shadow-md transition-shadow duration-300 aspect-square group"
    >
      <div className={`p-3 rounded-full ${colorClass} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
        <Icon className={`w-8 h-8 ${colorClass.replace('bg-', 'text-')}`} />
      </div>
      <span className="text-sm font-semibold text-center text-gray-800 group-hover:text-black transition-colors">
        {title}
      </span>
    </Link>
  );
};

export default DashboardCard;
