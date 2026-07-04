export const currentUser = {
  uid: "student123",
  name: "PATEL GAUTAM JAYPRAKASH",
  email: "240102101048.gautam@upluniversity.ac.in",
  phone: "9998011299",
  branch: "CE",
  semester: "5",
  division: "BE-CE - 5 - G1",
  rollNo: "48",
  batch: "A2",
  role: "student", // change to 'teacher' to test admin view
  collegeName: "SRICT"
};

export const subjects = [
  { subjectId: "CS501", name: "Data Structures", faculty: "Prof. Alan Turing", semester: "5" },
  { subjectId: "CS502", name: "Operating Systems", faculty: "Dr. Linus Torvalds", semester: "5" },
  { subjectId: "CS503", name: "Database Management", faculty: "Dr. E.F. Codd", semester: "5" },
  { subjectId: "CS504", name: "Computer Networks", faculty: "Vint Cerf", semester: "5" }
];

export const mockAttendance = [
  { subjectId: "CS501", total: 40, present: 32 },
  { subjectId: "CS502", total: 38, present: 20 },
  { subjectId: "CS503", total: 42, present: 38 },
  { subjectId: "CS504", total: 35, present: 29 },
];

export const announcements = [
  { id: 1, title: "Mid-Semester Exams Schedule Released", date: "Oct 15, 2026", description: "The time table for mid-semester exams has been published on the portal." },
  { id: 2, title: "Hackathon Registration Open", date: "Oct 12, 2026", description: "Register for the annual college hackathon before October 20th." },
  { id: 3, title: "Holiday Notice", date: "Oct 10, 2026", description: "College will remain closed on Oct 25th for Diwali." }
];

export const studentsList = [
  { uid: "student123", name: "PATEL GAUTAM", rollNo: "48" },
  { uid: "student124", name: "SHARMA ROHIT", rollNo: "49" },
  { uid: "student125", name: "SINGH AMIT", rollNo: "50" },
  { uid: "student126", name: "VERMA PRIYA", rollNo: "51" }
];
