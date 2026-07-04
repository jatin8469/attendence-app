import React from 'react';

export const AcademicCalendarIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 3v3M12 3v3M17 3v3" />
    <path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10l-5 6H7a2 2 0 0 1-2-2z" />
    <path d="M14 15h3.5M14 15v5" />
    <text x="11.5" y="14" fontSize="6.5" fontFamily="Poppins, sans-serif" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">365</text>
  </svg>
);

export const TimeTableIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 2v4M17 2v4" />
    <path d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" />
    <path d="M5 9h14" />
    <circle cx="8" cy="13" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="13" r="1" fill="currentColor" stroke="none" />
    <circle cx="8" cy="17" r="1" fill="currentColor" stroke="none" />
    <circle cx="17" cy="17" r="5" fill="white" stroke="none" />
    <circle cx="17" cy="17" r="5" fill="none" stroke="currentColor" />
    <path d="M17 14.5v2.5l1.5 1.5" />
  </svg>
);

export const AttendanceIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="5" cy="5" r="3" />
    <path d="M3.5 5.5l1 1 2-2" />
    <circle cx="11" cy="4" r="1.5" fill="currentColor" stroke="none" />
    <path d="M9 8c0-1.5 1-2 2-2s2 .5 2 2" fill="currentColor" stroke="none" />
    <path d="M15 4h6M15 7h4" />
    
    <circle cx="5" cy="12" r="3" />
    <path d="M3.5 12.5l1 1 2-2" />
    <circle cx="11" cy="11" r="1.5" fill="currentColor" stroke="none" />
    <path d="M9 15c0-1.5 1-2 2-2s2 .5 2 2" fill="currentColor" stroke="none" />
    <path d="M15 11h6M15 14h4" />

    <circle cx="5" cy="19" r="3" />
    <path d="M3.5 19.5l1 1 2-2" />
    <circle cx="11" cy="18" r="1.5" fill="currentColor" stroke="none" />
    <path d="M9 22c0-1.5 1-2 2-2s2 .5 2 2" fill="currentColor" stroke="none" />
    <path d="M15 18h6M15 21h4" />
  </svg>
);

export const LMSDashboardIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 21.5V5c-2-1-5-1-8 0v15c3-1 6-1 8 0z" />
    <path d="M12 21.5V5c2-1 5-1 8 0v15c-3-1-6-1-8 0z" />
    <path d="M6 8h4M6 11h4M6 14h4" />
    <path d="M14 8h4M14 11h4M14 14h4" />
  </svg>
);

export const AnnouncementIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M16 10l-4-4-7 3v4l7 3 4-4z" />
    <path d="M16 10a3 3 0 0 1 0 6l1-3-1-3z" />
    <path d="M10 16l-2 4h3l1.5-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M19 8a5 5 0 0 1 0 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 5a9 9 0 0 1 0 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const TransportIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="3" width="16" height="15" rx="3" />
    <path d="M4 11h16" />
    <path d="M4 15h16" />
    <rect x="6" y="5" width="12" height="6" rx="1" />
    <path d="M12 5v6" />
    <path d="M6 18v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2" />
    <path d="M14 18v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2" />
    <circle cx="7.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="16.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const ResultsIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3z" />
    <text x="9" y="8" fontSize="5" fontFamily="Poppins, sans-serif" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">A+</text>
    <rect x="6.5" y="4.5" width="5" height="4" stroke="currentColor" />
    <path d="M14 5h3M14 8h3M7 12h10M7 15h10M7 18h10" />
  </svg>
);

export const FeesIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 12V7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v5" />
    <circle cx="12.5" cy="8.5" r="1.5" />
    <path d="M9 7h1M15 7h1" />
    <rect x="4" y="11" width="16" height="9" rx="2" fill="white" />
    <path d="M20 14h-3a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h3" />
    <circle cx="18" cy="15.5" r="0.5" fill="currentColor" />
  </svg>
);

export const FeedbackIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="6" y="2" width="12" height="20" rx="2" />
    <path d="M11 20h2" />
    <path d="M18 5h-7a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2l3 3v-3h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" fill="white" />
    <path d="M12 8h5M12 10h3" />
  </svg>
);

export const CircularIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="9" r="6" />
    <path d="M9 6v3l2 2" />
    <rect x="11" y="9" width="10" height="13" rx="1" fill="white" stroke="currentColor" />
    <path d="M13.5 12l1 1 2-2M17.5 12h1.5" />
    <path d="M13.5 16l1 1 2-2M17.5 16h1.5" />
    <path d="M13.5 20l1 1 2-2M17.5 20h1.5" />
  </svg>
);

export const MentoringIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="8" y="14" width="8" height="4" rx="1" fill="white" />
    <path d="M10 18v3M14 18v3" />
    <circle cx="5" cy="11" r="2" />
    <path d="M3 17v-1.5a2.5 2.5 0 0 1 2.5-2.5h1" />
    <circle cx="19" cy="11" r="2" />
    <path d="M21 17v-1.5a2.5 2.5 0 0 0-2.5-2.5h-1" />
    <circle cx="12" cy="7" r="2" />
    <path d="M10 12h4" />
    <path d="M5.5 8h2v2h-2z" fill="currentColor" />
    <path d="M16.5 8h2v2h-2z" fill="currentColor" />
    <path d="M12 2h2v2h-2z" fill="currentColor" />
  </svg>
);

export const PunishmentIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <circle cx="15" cy="7" r="2.5" />
    <path d="M16 11h-2c-1.5 0-2.5 1-2.5 2.5v7.5h2v-6h1v6h2v-7.5c0-.5.5-1 1-1h1v-1.5c0-.8-.7-1.5-1.5-1.5z" />
    <path d="M14 12.5l-4 1-1-1.5 4-1z" />
    <circle cx="7" cy="11" r="2" />
    <path d="M8 14H6c-1 0-2 1-2 2v5h2v-4h1v4h2v-5c0-1-1-2-2-2z" />
  </svg>
);

export const HostelFeesIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 22V6h16v16z" />
    <path d="M2 22h20" />
    <path d="M6 6V3h12v3" />
    <text x="12" y="5.1" fontSize="3" fontFamily="Poppins, sans-serif" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">HOSTEL</text>
    <path d="M10 22v-4h4v4" />
    <rect x="6" y="9" width="3" height="3" />
    <rect x="10.5" y="9" width="3" height="3" />
    <rect x="15" y="9" width="3" height="3" />
    <rect x="6" y="14" width="3" height="3" />
    <rect x="15" y="14" width="3" height="3" />
  </svg>
);

export const EventRegistrationIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <path d="M10 19h4" />
    <path d="M4 9h16v6H4z" fill="white" />
    <path d="M5 9v6" strokeDasharray="2 2" />
    <path d="M19 9v6" strokeDasharray="2 2" />
    <path d="M4 9h16v6H4z" />
    <path d="M10 13l-1-1-1 1 .5-1.5L7 11h1.5l.5-1.5.5 1.5H11l-1.5 1L10 13z" fill="currentColor" stroke="none"/>
    <path d="M13.5 12.5l-.8-.8-.8.8 .4-1.2-1-.8h1.2l.4-1.2 .4 1.2h1.2l-1 .8 .4 1.2z" fill="currentColor" stroke="none"/>
    <path d="M17 13l-1-1-1 1 .5-1.5L14 11h1.5l.5-1.5.5 1.5H18l-1.5 1L17 13z" fill="currentColor" stroke="none"/>
  </svg>
);
