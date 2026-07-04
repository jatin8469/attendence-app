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
    { title: 'Academic Calendar', icon: CalendarDays, colorClass: 'bg-cyan-500', linkTo: '/calendar' },
    { title: 'Time Table', icon: Clock, colorClass: 'bg-blue-500', linkTo: '/timetable' },
    { title: 'Attendance', icon: ClipboardCheck, colorClass: 'bg-indigo-500', linkTo: '/attendance' },
    { title: 'LMS Dashboard', icon: BookOpen, colorClass: 'bg-red-400', linkTo: '/lms' },
    { title: 'Announcement', icon: Megaphone, colorClass: 'bg-blue-600', linkTo: '/announcements' },
    { title: 'Transport', icon: Bus, colorClass: 'bg-yellow-500', linkTo: '/transport' },
    { title: 'Results', icon: FileText, colorClass: 'bg-red-400', linkTo: '/results' },
    { title: 'Fees', icon: Wallet, colorClass: 'bg-green-500', linkTo: '/fees' },
    { title: 'Feedback', icon: MessageSquare, colorClass: 'bg-teal-500', linkTo: '/feedback' },
    { title: 'Notifications', icon: Bell, colorClass: 'bg-gray-400', linkTo: '/notifications' },
    { title: 'Circular', icon: FileStack, colorClass: 'bg-red-500', linkTo: '/circular' },
    { title: 'Mentoring', icon: Users, colorClass: 'bg-teal-600', linkTo: '/mentoring' },
    { title: 'Punishment', icon: Gavel, colorClass: 'bg-teal-700', linkTo: '/punishment' },
    { title: 'Hostel Fees', icon: Building, colorClass: 'bg-green-500', linkTo: '/hostel-fees' },
    { title: 'Event Registration', icon: Ticket, colorClass: 'bg-pink-500', linkTo: '/events' },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-8">
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
