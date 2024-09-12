import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { RxDiscordLogo, RxGithubLogo, RxInstagramLogo, RxTwitterLogo, RxLinkedinLogo } from 'react-icons/rx';

export const SOCIALS = [
  {
    name: 'GitHub',
    icon: RxGithubLogo,
    link: 'https://github.com/Izalfront',
  },
] as const;

export const FRONTEND_SKILL = [] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: 'JavaScript',
    image: 'js.png',
    width: 65,
    height: 65,
  },
  {
    skill_name: 'Tailwind CSS',
    image: 'tailwind.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Vite',
    image: 'vite.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'React',
    image: 'react.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Svelte',
    image: 'svelte.svg',
    width: 70,
    height: 70,
  },
  {
    skill_name: 'TypeScript',
    image: 'ts.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Figma',
    image: 'figma.png',
    width: 50,
    height: 50,
  },
] as const;

export const PROJECTS = [
  {
    title: 'Generate Resume with ReactJs',
    description: '',
    image: '/projects/image.png',
    link: 'https://generate-resume-peach.vercel.app',
  },
  {
    title: 'Travel Website with ReactJs and Scss',
    description: '',
    image: '/projects/flight.png',
    link: 'https://wanderair.vercel.app',
  },
  {
    title: 'Stunting Diagnosis Website Application',
    description: '',
    image: '/projects/stunting.png',
    link: 'https://pakar-stunting.devpro.web.id/diagnosis',
  },
  {
    title: 'Website of the Indonesian National Political Association',
    description: '',
    image: '/projects/kesbangpol.png',
    link: 'https://kesbangpol.hstkab.go.id',
  },
  {
    title: 'Travel Website with ReactJs',
    description: '',
    image: '/projects/travel1.png',
    link: 'https://github.com/Izalfront/Tours-Travels-Booking-Website',
  },
] as const;

export const FOOTER_DATA = [
  {
    title: 'Community',
    data: [
      {
        name: 'GitHub',
        icon: RxGithubLogo,
        link: 'https://github.com/Izalfront',
      },
    ],
  },
  {
    title: 'Social Media',
    data: [
      {
        name: 'Instagram',
        icon: RxInstagramLogo,
        link: 'https://www.instagram.com/starflight_txt/',
      },
      {
        name: 'Linkedin',
        icon: RxLinkedinLogo,
        link: 'https://www.linkedin.com/in/muhammad-rizal-wahyudi-06a95429b/',
      },
    ],
  },
  {
    title: 'About',
    data: [
      {
        name: 'rizalhajakubastarus@gmail.com',
        icon: null,
        link: 'https://mail.google.com',
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: 'About me',
    link: '#about-me',
  },
  {
    title: 'Skills',
    link: '#skills',
  },
  {
    title: 'Projects',
    link: '#projects',
  },
] as const;
