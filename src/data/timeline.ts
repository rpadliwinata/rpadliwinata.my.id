export type TimelineProps = {
  title: string;
  description: string;
  place: string;
  startDate?: Date;
  endDate?: Date | null;
  date?: string;
  type: 'edu' | 'work';
};

export const Timelines: TimelineProps[] = [
  // {
  //   title: 'Frontend Developer',
  //   description:
  //     'Kerjago is a platform to educate job and job seekers to Technology Enthusiast and a platform to bring together Human Resources, Users, Companies and Job Seekers. I work as a Frontend Developer that developed a website for kerjago.com',
  //   place: 'Kerjago.id',
  //   date: 'May 2022 - Present',
  //   type: 'work',
  // },
  {
    title: 'College',
    description:
      'Just like when I was in vocational high school, I majored in Software Engineering in college. Current GPA 3.27 out of 4.0',
    place: 'Telkom University',
    date: '2020 - Present',
    type: 'edu',
  },
  {
    title: 'Intern Software Engineer',
    description:
      'I work as a software engineer intern in developing Smart Travo interface to monitoring website with LabVIEW.',
    place: 'PT. Adhim Aju Sejahtera',
    date: 'Jun 2019 - Sep 2019',
    type: 'work',
  },
  {
    title: 'Vocational High School',
    description:
      'I majored in Software Engineering because I was really interested in Computer Science.',
    place: 'SMKN 13 Bandung',
    date: '2017 - 2020',
    type: 'edu',
  },
];
