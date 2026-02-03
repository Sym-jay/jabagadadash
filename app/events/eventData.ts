import { Event } from './types';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Drishti (Reels Making)',
    date: '2026-03-15',
    location: 'San Francisco, CA',
    overview: 'Annual technology conference featuring the latest innovations in AI and software development.',
    fullDescription: 'Join us for a full day of talks, workshops, and networking with industry leaders. Topics include machine learning, cloud architecture, and modern web development practices.\n\nThis conference brings together thought leaders, innovators, and technology enthusiasts from around the world. Expect keynote speeches, interactive sessions, and hands-on demonstrations of cutting-edge technologies.',
    coordinator: {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@techconf.com',
      phone: '+1 (555) 123-4567',
    },
    image: '/images/tech-conf.jpg',
    registrationLink: 'https://example.com/tech-conf-2026',
  },
  {
    id: '2',
    title: 'Navodayam (Idea Pitch)',
    date: '2026-04-22',
    location: 'New York, NY',
    overview: 'Watch emerging startups pitch their ideas to top venture capitalists.',
    fullDescription: 'An evening of innovation where 10 selected startups will present their groundbreaking ideas. Network with founders, investors, and entrepreneurs shaping the future.\n\nThis is your chance to witness the next generation of tech unicorns present their vision. Each startup will have 10 minutes to pitch followed by a Q&A session with our panel of experienced VCs.',
    coordinator: {
      name: 'Michael Chen',
      email: 'michael.chen@startupnight.com',
    },
    registrationLink: 'https://example.com/pitch-night-2026',
  },
  {
    id: '3',
    title: 'Kurukshetra (IPL Auction)',
    date: '2026-05-10',
    location: 'Austin, TX',
    overview: 'Hands-on workshop covering UI/UX design principles and modern design tools.',
    fullDescription: 'A comprehensive workshop series spanning three sessions. Learn Figma, design systems, user research, and prototyping. Perfect for designers and developers looking to level up their skills.\n\nEach session is 4 hours long with practical exercises and real-world case studies. Participants will leave with a portfolio piece and actionable skills they can apply immediately.',
    coordinator: {
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@designworkshop.com',
      phone: '+1 (555) 987-6543',
    },
    image: '/images/design-workshop.jpg',
    registrationLink: 'https://example.com/design-workshop-2026',
  },
  {
    id: '4',
    title: 'Chakravyuham',
    date: '2026-06-05',
    location: 'Seattle, WA',
    overview: '48-hour coding marathon to build innovative solutions for social good.',
    fullDescription: 'Team up with developers, designers, and product managers to create impactful projects. Prizes for top teams, mentorship from industry experts, and plenty of food and energy drinks.\n\nThemes include sustainability, education, healthcare, and accessibility. All skill levels welcome! We provide APIs, datasets, and continuous mentorship throughout the event.',
    coordinator: {
      name: 'David Park',
      email: 'david.park@hackathon.com',
      phone: '+1 (555) 456-7890',
    },
    registrationLink: 'https://example.com/hackathon-2026',
  },
];
