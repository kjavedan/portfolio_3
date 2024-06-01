import bomei from 'src/assets/bomei.png';

// CHIKRICE
import chikriceVideoMobile from 'src/assets/chikrice-mobile.mp4';
import chikriceVideoDesktop from 'src/assets/chikrice-desktop.mp4';

// JOJOSHOP
import jojooshopVideoMobile from 'src/assets/jojooshop-mobile.mov';
import jojooshopVideoDesktop from 'src/assets/jojooshop-desktop.mp4';

// ADMIN JOJOOSHP
import jojooshopAdminVideoMobile from 'src/assets/jojooshop-mobile.mov';
import jojooshopAdminVideoDesktop from 'src/assets/jojooshop-desktop.mp4';

// UNIESTATE
import uniestateVideoMobile from 'src/assets/uniestate-mobile.mov';
import uniestateVideoDesktop from 'src/assets/uniestate-desktop.mov';

// OTHER
import portfolioVideoMobile from 'src/assets/portfolio-mobile.mov';
import portfolioVideoDesktop from 'src/assets/portfolio-desktop.mp4';

export const projectsData = [
  {
    id: 1,
    path: 'chikrice',
    title: 'chikrice',
    siteUrl: 'https://chikrice.com',
    videoSrcMobile: chikriceVideoMobile,
    videoSrcDesktop: chikriceVideoDesktop,
    techStack: ['Vue.js', 'Typescript', 'UnoCss'],
    takeaway: 'asdfasd',
    description:
      "Chikrice Is my own project that I'm working on it full time, if you are interested to join me please don't hesitate to contact me",
    designImages: [bomei, bomei],
    problemAndSolution: {
      problem: 'adf',
      solution: 'asdfa',
    },
  },
  {
    id: 2,
    path: 'chikrice-admin',
    title: 'chikrice admin',
    siteUrl: 'https://admin.chikirce.com',
    videoSrcMobile: jojooshopVideoMobile,
    videoSrcDesktop: jojooshopVideoDesktop,
    techStack: ['React.js', 'MUI'],
    takeaway: 'asdfasd',
    description:
      'ChikRice description will go here In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be ChikRice description will go here In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be ',
    designImages: [bomei],
    problemAndSolution: {
      problem: 'adf',
      solution: 'asdfa',
    },
  },
  {
    id: 3,
    path: 'jojooshop',
    title: 'jojooshop',
    siteUrl: 'https://jojooshop.com',
    videoSrcMobile: jojooshopVideoMobile,
    videoSrcDesktop: jojooshopVideoDesktop,
    techStack: ['React', 'Material UI'],
    takeaway: 'asdfasd',
    description:
      "JoJooShop Client serves as the user-facing interface of the JoJooShop web application, a cutting-edge custom ecommerce platform meticulously crafted to meet the client's exacting standards.",
    features: [
      'Manual signup/login',
      'Google authentication',
      'Dynamic category',
      'Product management system',
      'Customizable filters for each category',
      'Sorting functionality',
      'Search functionality',
      'Review and rating system',
      'Fully responsive design',
      'Modern shopping cart functionality',
      'User profile page',
      'API integration',
      'Multilingual support',
      'theme (dark, light)',
      'About, Contact, and FAQ pages',
    ],
    designImages: [bomei],
    problemAndSolution: {
      problem: 'adf',
      solution: 'asdfa',
    },
  },
  {
    id: 4,
    path: 'jojooshop-admin',
    title: 'jojooshop admin',
    siteUrl: 'https://admin.jojooshop.com',
    videoSrcMobile: jojooshopAdminVideoMobile,
    videoSrcDesktop: jojooshopAdminVideoDesktop,
    techStack: ['React', 'Material UI'],
    takeaway: 'asdfasd',
    description:
      "JoJooShop admin_panel serves as the admin interface of the JoJooShop web application, a cutting-edge custom ecommerce platform meticulously crafted to meet the client's exacting standards.",
    designImages: [bomei],
    problemAndSolution: {
      problem: 'adf',
      solution: 'asdfa',
    },
  },
  {
    id: 5,
    path: 'web-game',
    title: 'web game',
    siteUrl: 'https://khaledjavedan.vercel.app',
    videoSrcMobile: portfolioVideoMobile,
    videoSrcDesktop: portfolioVideoDesktop,
    techStack: ['Three.js', 'Next.js', 'SCSS', 'Canvas'],
    takeaway: 'asdfasd',
    description:
      " In this portfolio project, I've combined my skills in React/Next.js with some fun Three.js elements to create an entertaining web game. Sticking to my signature style, I've gone for a sleek and straightforward design in this project, as well as in several others. Take a look around—I hope you enjoy it as much as I did building it!",
    features: [
      'Manual signup/login',
      'Detailed and comprihensive statistics dashboard',
      'Product management system',
      'User managemetn system',
      'Order managemetn system',
      'Categories managemetn system',
      'Review managemetn',
      'Fully responsive design',
      'User profile page',
      'Multilingual support',
      'theme (dark, light)',
    ],
    designImages: [bomei],
    problemAndSolution: {
      problem: 'adf',
      solution: 'asdfa',
    },
  },
  {
    id: 6,
    path: 'uniestate',
    title: 'uniestate',
    siteUrl: 'https://uniestate.netlify.app',
    videoSrcMobile: uniestateVideoMobile,
    videoSrcDesktop: uniestateVideoDesktop,
    techStack: ['Vue.js', 'TailwindCSS'],
    takeaway: 'asdfasd',
    description:
      "Uniestate is my personal venture where I'm picking up new skills while enhancing the website's speed and user-friendliness. I'm concentrating on areas like image loading speed, efficient data storage for faster returns, and ensuring top-notch image quality. I'm maintaining a sleek and modern design that resonates well with the architectural field.",
    designImages: [bomei],
    problemAndSolution: {
      problem: 'adf',
      solution: 'asdfa',
    },
  },
];

export const projectsDataMobile = [
  {
    data: [
      { title: 'chikrice', path: 'chikrice' },
      { title: 'chikrice admin', path: 'chikrice-admin' },
    ],
  },
  {
    data: [
      { title: 'jojooshop', path: 'jojooshop' },
      { title: 'jojooshop admin', path: 'jojooshop-admin' },
    ],
  },
  {
    data: [
      { title: 'web game', path: 'web-game' },
      { title: 'uniestate', path: 'uniestate' },
    ],
  },
];
