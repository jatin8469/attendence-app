import React from 'react';
import Layout from '../components/Layout';
import DashboardCard from '../components/DashboardCard';
import { 
  CalendarDays, 
  Clock, 
  ClipboardCheck, 
  BookOpen, 
  Megaphone, 
  Bus, 
  FileText, 
  Wallet, 
  MessageSquare, 
  Bell, 
  FileStack, 
  Users,
  Gavel,
  Building,
  Ticket
} from 'lucide-react';

const Dashboard = () => {
  const cards = [
    { title: 'Academic Calendar', icon: CalendarDays, colorClass: 'text-cyan-500', linkTo: '/calendar' },
    { title: 'Time Table', icon: Clock, colorClass: 'text-blue-500', linkTo: '/timetable' },
    { title: 'Attendance', icon: ClipboardCheck, colorClass: 'text-indigo-500', linkTo: '/attendance' },
    { title: 'LMS Dashboard', icon: BookOpen, colorClass: 'text-red-400', linkTo: '/lms' },
    { title: 'Announcement', icon: Megaphone, colorClass: 'text-blue-600', linkTo: '/announcements' },
    { title: 'Transport', icon: Bus, colorClass: 'text-yellow-500', linkTo: '/transport' },
    { title: 'Results', icon: FileText, colorClass: 'text-red-400', linkTo: '/results' },
    { title: 'Fees', icon: Wallet, colorClass: 'text-green-500', linkTo: '/fees' },
    { title: 'Feedback', icon: MessageSquare, colorClass: 'text-teal-500', linkTo: '/feedback' },
    { title: 'Notifications', icon: Bell, colorClass: 'text-gray-400', linkTo: '/notifications' },
    { title: 'Circular', icon: FileStack, colorClass: 'text-red-500', linkTo: '/circular' },
    { title: 'Mentoring', icon: Users, colorClass: 'text-teal-600', linkTo: '/mentoring' },
    { title: 'Punishment', icon: Gavel, colorClass: 'text-teal-700', linkTo: '/punishment' },
    { title: 'Hostel Fees', icon: Building, colorClass: 'text-green-500', linkTo: '/hostel-fees' },
    { title: 'Event Registration', icon: Ticket, colorClass: 'text-pink-500', linkTo: '/events' },
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
