import type { NavLink, Service, Project, Stat, ProcessStep, FAQItem, Testimonial } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Studio', href: '#hero' },
  { label: 'Expertise', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const services: Service[] = [
  {
    id: 's1',
    number: '01',
    title: 'Architectural design',
    description: 'From the first sketch to planning permission, we draw volumes that hold a conversation with their site.',
    icon: 'concept',
  },
  {
    id: 's2',
    number: '02',
    title: 'Interior architecture',
    description: 'Noble materials, measured light and true proportions for interiors that never date.',
    icon: 'interior',
  },
  {
    id: 's3',
    number: '03',
    title: 'Restoration',
    description: 'We reveal the potential of an existing building while honoring its character and its history.',
    icon: 'renovation',
  },
  {
    id: 's4',
    number: '04',
    title: 'Site supervision',
    description: 'Rigorous oversight, from the first stone to the handover of the keys, with no compromise on standards.',
    icon: 'supervision',
  },
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Villa Solstice',
    location: 'Cap Ferrat',
    year: '2024',
    category: 'Private residence',
    description:
      'A sun-filled villa set on the rock, where every window frames the Mediterranean.',
    image: 'https://www.luxclusivehomes.com/wp-content/uploads/2023/02/modern-home-on-the-coast.jpg',
  },
  {
    id: 'p2',
    title: 'Glass House',
    location: 'Chamonix',
    year: '2023',
    category: 'Private residence',
    description:
      'A glass-and-steel extension that dissolves the boundary between the studio and the forest.',
    image: 'https://images.pexels.com/photos/9113612/pexels-photo-9113612.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200',
  },
  {
    id: 'p3',
    title: 'The Monolith',
    location: 'Bordeaux',
    year: '2023',
    category: 'Headquarters',
    description: 'A headquarters sculpted in raw concrete, inhabited by light falling from above.',
    image: 'https://agastudio.ma/wp-content/uploads/2023/12/5.jpg',
  },
  {
    id: 'p4',
    title: 'Shadow Pavilion',
    location: 'Aix-en-Provence',
    year: '2022',
    category: 'Private residence',
    description:
      'A pale-timber pavilion, paced by brise-soleil that filter the Provençal light.',
    image: 'https://story-rabat.com/wp-content/uploads/2025/12/Grand-Theatre-of-Rabat-Morocco-1024x546.webp',
  },
  {
    id: 'p5',
    title: 'Light Atelier',
    location: 'Lyon',
    year: '2022',
    category: 'Cultural space',
    description:
      'The conversion of a derelict industrial site into a place of creation bathed in natural light.',
    image: 'https://images.adsttc.com/media/images/67d0/0e99/6fa6/0801/8951/1a07/large_jpg/buildner-reveals-the-winning-projects-of-the-morocco-oasis-retreat-competition_1.jpg?1741688486',
  },
];

export const stats: Stat[] = [
  { id: 'st1', value: 18, suffix: '+', label: 'Years of experience' },
  { id: 'st2', value: 126, suffix: '', label: 'Projects delivered' },
  { id: 'st3', value: 24, suffix: '', label: 'Architects & designers' },
  { id: 'st4', value: 98, suffix: '%', label: 'Satisfied clients' },
];

export const processSteps: ProcessStep[] = [
  {
    id: 'pr1',
    index: '01',
    title: 'Listening & analysis',
    description: 'We study your site, the way you live and your ambitions to lay the foundations of the project.',
  },
  {
    id: 'pr2',
    index: '02',
    title: 'Concept sketch',
    description: 'A first architectural narrative takes shape, between volume, light and materiality.',
  },
  {
    id: 'pr3',
    index: '03',
    title: 'Technical development',
    description: 'Plans, sections and construction details are refined down to the millimeter.',
  },
  {
    id: 'pr4',
    index: '04',
    title: 'Construction',
    description: 'We guide every stage of the build to guarantee absolute fidelity to the project as drawn.',
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 'f1',
    question: 'What are the stages of working with Atelier Verrier?',
    answer:
      'Every project begins with a meeting on site, followed by a sketch phase, then full technical development before construction starts — which we supervise through to handover.',
  },
  {
    id: 'f2',
    question: 'Do you take on renovation projects?',
    answer:
      'Yes, restoration is a significant part of our practice. We pay close attention to the existing structure and to its architectural heritage.',
  },
  {
    id: 'f3',
    question: 'How long does a project take, from sketch to handover?',
    answer:
      'Depending on the scale of the project, expect between twelve and twenty-four months. Every schedule is drawn up individually during our first conversation.',
  },
  {
    id: 'f4',
    question: 'Do you work outside France?',
    answer:
      'Our studio works internationally on a selected number of projects, notably in Switzerland, Italy and the United Kingdom.',
  },
  {
    id: 'f5',
    question: 'How are your fees set?',
    answer:
      'Our fees are calculated according to the nature, the complexity and the scale of the project. A detailed quote is sent after our first visit.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Claire Dubreuil',
    role: 'Villa Solstice, Cap Ferrat',
    quote:
      'A rare quality of listening and an absolute sense of detail. Every room in our house tells a story thought through with precision.',
    rating: 5,
    image: 'https://picsum.photos/seed/claire-d/200/200',
  },
  {
    id: 't2',
    name: 'Antoine Ferrand',
    role: 'The Monolith, Bordeaux',
    quote:
      'The team turned a simple brief into a strong, timeless architectural signature.',
    rating: 5,
    image: 'https://picsum.photos/seed/antoine-f/200/200',
  },
  {
    id: 't3',
    name: 'Margaux Silvestri',
    role: 'Glass House, Chamonix',
    quote:
      'Exemplary professionalism from the first sketch to the handover of the keys. The result goes beyond everything we hoped for.',
    rating: 5,
    image: 'https://picsum.photos/seed/margaux-s/200/200',
  },
  {
    id: 't4',
    name: 'Julien Roquefort',
    role: 'Shadow Pavilion, Aix-en-Provence',
    quote:
      'A sensitive, almost sculptural approach to architecture that fully respects the spirit of the place.',
    rating: 5,
    image: 'https://picsum.photos/seed/julien-r/200/200',
  },
];
