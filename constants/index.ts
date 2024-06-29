import { FaYoutube, FaFacebook } from 'react-icons/fa';
import { RxDiscordLogo, RxGithubLogo, RxInstagramLogo, RxTwitterLogo, RxLinkedinLogo } from 'react-icons/rx';

export const SOCIALS = [
  {
    name: 'Instagram',
    icon: RxInstagramLogo,
    link: 'https://www.instagram.com/starflight_txt/',
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
    skill_name: 'TypeScript',
    image: 'ts.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Next.js 14',
    image: 'next.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Firebase',
    image: 'firebase.png',
    width: 55,
    height: 55,
  },
  {
    skill_name: 'MySQL',
    image: 'mysql.png',
    width: 70,
    height: 70,
  },
  {
    skill_name: 'Figma',
    image: 'figma.png',
    width: 50,
    height: 50,
  },
  {
    skill_name: 'Solidity',
    image: 'solidity.png',
    width: 50,
    height: 50,
  },
  {
    skill_name: 'Kotlin',
    image: 'kotlin.png',
    width: 50,
    height: 50,
  },
] as const;

export const PROJECTS = [
  {
    title: 'Travel Website with ReactJs',
    description:
      'Discover the world from the comfort of your home with our dynamic Travel Website built using ReactJS. This platform offers an immersive experience, showcasing top travel destinations, personalized itineraries, and user reviews. Whether you are planning your next adventure or just exploring new places, our website provides all the information you need, with a user-friendly interface and seamless navigation. Start your journey with us and let ReactJS enhance your travel planning experience.',
    image: '/projects/travel1.png',
    link: 'https://github.com/Izalfront',
  },
  {
    title: 'Parallax Website JavaScript',
    description:
      'Experience the web like never before with our Parallax Website crafted using JavaScript. This site offers a visually stunning experience where elements move at different speeds as you scroll, creating a sense of depth and immersion. Perfect for storytelling and showcasing creative content, our parallax design enhances user engagement and provides a memorable browsing experience. Explore the smooth animations and dynamic transitions that bring the web to life with JavaScript-driven parallax effects.',
    image: '/projects/parallax.png',
    link: 'https://github.com/Izalfront',
  },
  {
    title: 'Website of the Indonesian National Political Association',
    description:
      'Welcome to the official website of the Indonesian National Political Association. Stay informed with the latest news and updates on political developments, policies, and events from across the nation. Our platform offers comprehensive profiles of key political figures, providing insights into their backgrounds, contributions, and visions for Indonesian future. Explore our strategic plans and initiatives aimed at driving positive change and fostering a more inclusive and progressive society. Join us in shaping the future of Indonesia through informed political engagement and active participation.',
    image: '/projects/kesbangpol.png',
    link: 'https://kesbangpol.hstkab.go.id',
  },
  {
    title: 'Travel Website with ReactJs and Scss',
    description:
      'Explore the world effortlessly with our Travel Website, expertly crafted using ReactJS and SCSS. Our platform provides a seamless user experience, offering comprehensive travel information, personalized itineraries, and vibrant destination guides. The powerful combination of ReactJS ensures a dynamic and responsive interface, while SCSS adds a touch of elegance with its sophisticated styling and smooth animations. Whether youre planning your next adventure or just dreaming of distant lands, our website is your perfect travel companion, making trip planning intuitive and enjoyable. Embark on your journey today with our cutting-edge Travel Website.',
    image: '/projects/flight.png',
    link: 'https://github.com/Izalfront',
  },
  {
    title: 'Intern Information Systems',
    description:
      'Join our dynamic team as an Intern in Information Systems and gain hands-on experience in managing and optimizing our IT infrastructure. As an intern, you will work closely with experienced professionals, assisting in the development, implementation, and maintenance of various information systems. This role offers a unique opportunity to enhance your technical skills, learn about system integration, and contribute to real-world projects. Ideal candidates are enthusiastic about technology, eager to learn, and ready to take on challenges in a fast-paced environment. Kickstart your career in Information Systems with us and be a part of our innovative journey.',
    image: '/projects/simagang.png',
    link: 'https://github.com/Izalfront',
  },
  {
    title: 'Stunting Diagnosis Website Application',
    description:
      'Introducing our Stunting Diagnosis Website Application, designed to provide comprehensive and accurate assessments of stunting in children. Utilizing advanced algorithms and user-friendly interfaces, our platform allows healthcare professionals and caregivers to easily input data and receive instant diagnostic results. The application offers detailed insights into growth metrics, nutritional status, and potential health interventions, aiding in early detection and effective management of stunting. Committed to improving child health outcomes, our website serves as a valuable tool for both medical practitioners and parents, ensuring timely and informed decisions in the fight against stunting.',
    image: '/projects/stunting.png',
    link: 'https://diagnosisstunting.my.id/login',
  },
] as const;

export const PROJECT_MOBILE = [
  {
    title: 'Temen In',
    description:
      'Discover meaningful connections with Temen In, the ultimate mobile application for paid chat and video call services. Temen In allows you to choose from a diverse range of individuals to connect with, offering personalized and engaging interactions. Whether you’re seeking companionship, advice, or just a friendly conversation, our platform provides a safe and secure environment for all your social needs. With easy-to-use features and flexible payment options, Temen In ensures that you can effortlessly find and connect with the right person anytime, anywhere. Elevate your social experience with Temen In, where every conversation is just a tap away.',
    image: '/projects/chat.png',
    link: 'https://github.com/Izalfront',
  },
  {
    title: 'UEA POLO Information Application',
    description:
      'Welcome to the UEA POLO Information Application, your comprehensive source of information for everything related to polo in the United Arab Emirates (UEA). This app is tailored for enthusiasts, players, and fans alike, providing up-to-date news, match schedules, player profiles, and tournament results. Stay informed about the latest developments in the polo community, discover upcoming events, and follow your favorite teams and players. With intuitive navigation and detailed insights, the UEA POLO Information Application is your go-to resource for all things polo in the UAE. Dive into the world of polo with us and experience the thrill of this prestigious sport firsthand.',
    image: '/projects/polo.png',
    link: 'https://github.com/Izalfront',
  },
  {
    title: 'Poliban stall information application',
    description:
      'A user-friendly application designed to provide comprehensive information about stalls at the Poliban campus. The app includes features such as real-time updates on stall availability, menu options, pricing, and user reviews, ensuring an efficient and convenient experience for both students and staff.',
    image: '/projects/warung.png',
    link: 'https://github.com/Izalfront',
  },
] as const;

export const PROJECT_UIUX = [
  {
    title: 'Oboto Project',
    description:
      'Explore local attractions and events with ease using the Oboto Project mobile application. Oboto Project is your ultimate guide to discovering regional tourism hotspots and staying updated on local events. Our app offers detailed information on tourist destinations, cultural sites, and popular activities in your area. Whether you’re planning a trip or looking for something fun to do nearby, Oboto Project provides personalized recommendations and real-time updates to enhance your travel experience. With an intuitive interface and comprehensive coverage, Oboto Project is your go-to resource for all things local. Dive into the richness of your region with Oboto Project, where every adventure begins.',
    image: '/projects/oboto.png',
    link: 'https://www.figma.com',
  },
  {
    title: 'Temen In',
    description:
      'Discover meaningful connections with Temen In, the ultimate mobile application for paid chat and video call services. Temen In allows you to choose from a diverse range of individuals to connect with, offering personalized and engaging interactions. Whether you’re seeking companionship, advice, or just a friendly conversation, our platform provides a safe and secure environment for all your social needs. With easy-to-use features and flexible payment options, Temen In ensures that you can effortlessly find and connect with the right person anytime, anywhere. Elevate your social experience with Temen In, where every conversation is just a tap away.',
    image: '/projects/chat.png',
    link: 'https://www.figma.com',
  },
  {
    title: 'UEA POLO Information Application',
    description:
      'Welcome to the UEA POLO Information Application, your comprehensive source of information for everything related to polo in the United Arab Emirates (UEA). This app is tailored for enthusiasts, players, and fans alike, providing up-to-date news, match schedules, player profiles, and tournament results. Stay informed about the latest developments in the polo community, discover upcoming events, and follow your favorite teams and players. With intuitive navigation and detailed insights, the UEA POLO Information Application is your go-to resource for all things polo in the UAE. Dive into the world of polo with us and experience the thrill of this prestigious sport firsthand.',
    image: '/projects/polo.png',
    link: 'https://www.figma.com',
  },
  {
    title: 'Poliban stall information application',
    description:
      'A user-friendly application designed to provide comprehensive information about stalls at the Poliban campus. The app includes features such as real-time updates on stall availability, menu options, pricing, and user reviews, ensuring an efficient and convenient experience for both students and staff.',
    image: '/projects/warung.png',
    link: 'https://www.figma.com',
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
