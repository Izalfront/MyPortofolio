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
    title: ' Website Branding Joey',
    description: '',
    image: '/projects/joey.png',
    link: 'https://joeybranding.vercel.app',
  },
  {
    title: ' Landing Page Indexes Website',
    description: '',
    image: '/projects/index.png',
    link: 'https://indexwebsites.vercel.app',
  },
  {
    title: ' Twittr desktop UI',
    description: '',
    image: '/projects/aatwitter.png',
    link: 'https://twittr-buildwithangga.vercel.app',
  },
  {
    title: ' Landing Page Renewable Energy',
    description: '',
    image: '/projects/renewableenegrgy.png',
    link: 'https://renewable-energy.pages.dev',
  },
  {
    title: ' Landing Page Akademi Crypto',
    description: '',
    image: '/projects/akademikripto.png',
    link: 'https://bloomberglite.pages.dev',
  },
  {
    title: 'Website of the Indonesian National Political Association',
    description: '',
    image: '/projects/kesbangpol.png',
    link: 'https://kesbangpol.hstkab.go.id',
  },
] as const;

export const VIDEOINTRO = [
  {
    title: 'Hello I am a Frontend Developer',
    description: 'frontend web developer from indonesia',
    image: '/projects/asdasaas.png',
    link: 'https://youtu.be/pelHTN6saFQ?si=_t-VM6Z_UmnvDoeN',
  },
];

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
