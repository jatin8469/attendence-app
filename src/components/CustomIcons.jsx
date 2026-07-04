import React from 'react';

export const AcademicCalendarIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Binder rings */}
    <path d="M7 3v3M12 3v3M17 3v3" />
    {/* Main outline with folded corner */}
    <path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10l-5 6H7a2 2 0 0 1-2-2z" />
    {/* Fold line */}
    <path d="M14 15h3.5M14 15v5" />
    {/* 365 Text */}
    <text x="11.5" y="14" fontSize="6.5" fontFamily="Poppins, sans-serif" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">365</text>
  </svg>
);

export const TimeTableIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Binder rings */}
    <path d="M7 2v4M17 2v4" />
    {/* Main outline */}
    <path d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4z" />
    {/* Header line */}
    <path d="M5 9h14" />
    {/* Grid dots */}
    <circle cx="8" cy="13" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="13" r="1" fill="currentColor" stroke="none" />
    <circle cx="8" cy="17" r="1" fill="currentColor" stroke="none" />
    {/* Clock background to hide calendar lines */}
    <circle cx="17" cy="17" r="5" fill="white" stroke="none" />
    {/* Clock outline & hands */}
    <circle cx="17" cy="17" r="5" fill="none" stroke="currentColor" />
    <path d="M17 14.5v2.5l1.5 1.5" />
  </svg>
);

export const AttendanceIcon = ({ className, strokeWidth = 1.5 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Row 1 */}
    <circle cx="5" cy="5" r="3" />
    <path d="M3.5 5.5l1 1 2-2" />
    <circle cx="11" cy="4" r="1.5" fill="currentColor" stroke="none" />
    <path d="M9 8c0-1.5 1-2 2-2s2 .5 2 2" fill="currentColor" stroke="none" />
    <path d="M15 4h6M15 7h4" />
    
    {/* Row 2 */}
    <circle cx="5" cy="12" r="3" />
    <path d="M3.5 12.5l1 1 2-2" />
    <circle cx="11" cy="11" r="1.5" fill="currentColor" stroke="none" />
    <path d="M9 15c0-1.5 1-2 2-2s2 .5 2 2" fill="currentColor" stroke="none" />
    <path d="M15 11h6M15 14h4" />

    {/* Row 3 */}
    <circle cx="5" cy="19" r="3" />
    <path d="M3.5 19.5l1 1 2-2" />
    <circle cx="11" cy="18" r="1.5" fill="currentColor" stroke="none" />
    <path d="M9 22c0-1.5 1-2 2-2s2 .5 2 2" fill="currentColor" stroke="none" />
    <path d="M15 18h6M15 21h4" />
  </svg>
);
