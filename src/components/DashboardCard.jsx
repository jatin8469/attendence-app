import React from 'react';
import { Link } from 'react-router-dom';

const DashboardCard = ({ title, icon: Icon, colorClass, linkTo }) => {
  return (
    <Link 
      to={linkTo}
      className="bg-white rounded-[20px] p-2 md:p-4 flex flex-col items-center justify-center gap-2 md:gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-md transition-all duration-300 aspect-square group"
    >
      <div className="mb-1 transform group-hover:scale-110 transition-transform duration-300">
        <Icon strokeWidth={1.5} className={`w-10 h-10 md:w-12 md:h-12 ${colorClass}`} />
      </div>
      <span className="text-[12px] md:text-sm font-semibold text-center leading-snug text-black">
        {title}
      </span>
    </Link>
  );
};

export default DashboardCard;
