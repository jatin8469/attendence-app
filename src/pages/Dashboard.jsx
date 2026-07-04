import React from 'react';
import Layout from '../components/Layout';
import DashboardCard from '../components/DashboardCard';


import { 
  AcademicCalendarIcon, 
  TimeTableIcon, 
  AttendanceIcon,
  LMSDashboardIcon,
  AnnouncementIcon,
  TransportIcon,
  ResultsIcon,
  FeesIcon,
  FeedbackIcon,
  CircularIcon,
  MentoringIcon,
  PunishmentIcon,
  HostelFeesIcon,
  EventRegistrationIcon
} from '../components/CustomIcons';

const Dashboard = () => {
  const cards = [
    { title: 'Academic Calendar', icon: AcademicCalendarIcon, colorClass: 'text-cyan-500', linkTo: '/calendar' },
    { title: 'Time Table', icon: TimeTableIcon, colorClass: 'text-blue-500', linkTo: '/timetable' },
    { title: 'Attendance', icon: AttendanceIcon, colorClass: 'text-indigo-500', linkTo: '/attendance' },
    { title: 'LMS Dashboard', icon: LMSDashboardIcon, colorClass: 'text-red-400', linkTo: '/lms' },
    { title: 'Announcement', icon: AnnouncementIcon, colorClass: 'text-blue-600', linkTo: '/announcements' },
    { title: 'Transport', icon: TransportIcon, colorClass: 'text-yellow-500', linkTo: '/transport' },
    { title: 'Results', icon: ResultsIcon, colorClass: 'text-red-400', linkTo: '/results' },
    { title: 'Fees', icon: FeesIcon, colorClass: 'text-green-500', linkTo: '/fees' },
    { title: 'Feedback', icon: FeedbackIcon, colorClass: 'text-teal-500', linkTo: '/feedback' },
    { title: 'Notifications', icon: ResultsIcon, colorClass: 'text-gray-400', linkTo: '/notifications' },
    { title: 'Circular', icon: CircularIcon, colorClass: 'text-red-500', linkTo: '/circular' },
    { title: 'Mentoring', icon: MentoringIcon, colorClass: 'text-teal-600', linkTo: '/mentoring' },
    { title: 'Punishment', icon: PunishmentIcon, colorClass: 'text-teal-700', linkTo: '/punishment' },
    { title: 'Hostel Fees', icon: HostelFeesIcon, colorClass: 'text-green-500', linkTo: '/hostel-fees' },
    { title: 'Event Registration', icon: EventRegistrationIcon, colorClass: 'text-pink-500', linkTo: '/events' },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-3 md:gap-4 pb-8">
        {cards.map((card, idx) => (
          <DashboardCard 
            key={idx} 
            title={card.title} 
            icon={card.icon} 
            colorClass={card.colorClass} 
            linkTo={card.linkTo} 
          />
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
