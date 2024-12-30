import bomei from 'src/assets/bomei.png';
import fithub_1 from 'src/assets/fithub-desk.png';
import fithub_2 from 'src/assets/fithub-mobile.png';
import chikriceImg from 'src/assets/chikrice-desk.jpg';
import jojooshopImg from 'src/assets/jojooshop_old.png';
import uniestate_1 from 'src/assets/uniestate-mobile.png';
import uniestate_2 from 'src/assets/uniestate-desktop.png';

// CHIKRICE
import chikriceVideoMobile from 'src/assets/chikrice-mobile.mp4';
import chikriceVideoDesktop from 'src/assets/chikrice-desktop.mp4';

// CHIKRICE V2
import chikriceV2VideoMobile from 'src/assets/chikrice.v2-mobile.mov';
import chikriceV2VideoDesktop from 'src/assets/chikrice.v2-desktop.mov';

// JOJOSHOP
import jojooshopVideoMobile from 'src/assets/jojooshop-mobile.mov';
import jojooshopVideoDesktop from 'src/assets/jojooshop-desktop.mp4';

// ADMIN JOJOOSHP
import jojooshopAdminVideoMobile from 'src/assets/jojo-admin-mobile.mov';
import jojooshopAdminVideoDesktop from 'src/assets/jojo-admin-desktop.mp4';

// UNIESTATE
import uniestateVideoMobile from 'src/assets/uniestate-mobile.mov';
import uniestateVideoDesktop from 'src/assets/uniestate-desktop.mov';

// OTHER
import portfolioVideoMobile from 'src/assets/portfolio-mobile.mov';
import portfolioVideoDesktop from 'src/assets/portfolio-desktop.mp4';

export const projectsData = [
  {
    id: 2,
    path: 'chikrice-v2',
    title: 'chikrice v2',
    siteUrl: 'https://chikrice.com',
    videoSrcMobile: chikriceV2VideoMobile,
    videoSrcDesktop: chikriceV2VideoDesktop,
    techStack: ['Node', 'MongoDB', 'React.js', 'MUI'],
    takeaway: '',
    description: `CHIKRICE V2 is a fitness app I’ve developed to help people improve their health with simple and accessible tools. The app offers personalized meal suggestions, macro tracking, and AI-driven recommendations.

I started with CHIKRICE 1, a basic version without a database, testing the idea with friends and potential users. Now, I’m working full time on CHIKRICE 2, a full-stack app that’s growing and evolving every day as I continue to add new features and improve the experience for users.`,
    features: [
      'Ai integration',
      'Personalization',
      'Custom Search',
      'User authentication',
      'Meal Plan Customization',
    ],
    designImages: [],
  },
  {
    id: 1,
    path: 'chikrice-v1',
    title: 'chikrice v1',
    siteUrl: 'https://chikrice.com',
    videoSrcMobile: chikriceVideoMobile,
    videoSrcDesktop: chikriceVideoDesktop,
    techStack: ['Vue.js', 'Element Plus', 'Typescript', 'UnoCss'],
    takeaway: '',
    description: `CHIKRICE V1 was the initial implementation of the idea for a fitness and healthy eating solution. The goal was to create a platform that simplifies meal planning and macro tracking, helping users achieve their fitness goals. I focused on building a simple version of the app and testing it with friends and potential users, gathering feedback to improve the concept.

The vision behind CHIKRICE is to provide users with a personalized meal plan based on their preferences, with future plans to partner with restaurants like CHIKRICE to prepare these meals. It’s designed to be like having a personal trainer and chef in one—handling meal planning so users can focus on achieving their dream body.
`,

    designImages: [chikriceImg, fithub_1, fithub_2],
    problemAndSolution: {
      intro:
        'When you decide to get in shape, you would typically go through the following stages:',
      problemsIntro:
        "Feeling overwhelmed by all the things you need to cover by yourself and thinking about getting help from a personal trainer to guide you through your journey As a person who went through all of this myself and helped many others with their quest, I need to assure you that almost all of us have to go through this. Here are some of the most common problems we face. It's different for each individual, but everyone has a problem with something.",
      stages: [
        {
          stage: 1,
          title: 'Gathering information about nutrition and exercise',
          questions: [
            'What, when, and how much should I eat?',
            'What exercise should I do? How many days and for how long should I work out?',
          ],
        },
        {
          stage: 2,
          title: 'Cooking and meal prepping',
          questions: [
            'How do I meal plan?',
            'How do I cook diet food?',
            'How do I count the macros of each meal?',
            'How do I count my daily calories and macro intake?',
            'How much protein, carbs, fat, and calories do I need?',
            'How long should I stick to a meal plan?',
            'How long will it take to see results?',
            'Should I take supplements?',
            'What supplements should I take?',
            'Is there any supplement to help me lose fat fast?',
            'Is there any supplement to help me gain muscle fast?',
            'Can I achieve my goal in 6 months?',
          ],
        },
        {
          stage: 3,
          title: '',
        },
      ],
      problems: [
        {
          problem:
            'There is a plethora of information and resources online that might contradict each other, making it difficult for you to choose one.',
          answer:
            'Chikrice works with experts in the fitness field who have a proven track record. We provide you with all the information you need.',
        },
        {
          problem:
            "You don't have the time or the interest to learn about all of the nutrition data. You just want to get results as fast as possible and cut the crap.",
          answer:
            'Chikrice provides you with an easy-to-follow step-by-step guide to ensure results.',
        },
        {
          problem:
            "You don't have the money to pay a personal trainer for a long time, or you don't have access to a personal trainer.",
          answer:
            'The core feature of Chikrice is to provide you with the most capable personal trainer software, available 24/7, for free.',
        },
        {
          problem: "You don't have the time to cook and prepare food.",
          answer:
            'The Chikrice app, which acts as your personal trainer, syncs with Chikrice restaurants to take care of everything for you.',
        },
        {
          problem: "You don't know how to cook.",
          answer:
            'At Chikrice, we have a comprehensive set of recipes that we have perfected over the years for you to follow and cook the best dishes.',
        },
        {
          problem:
            "It's too much work to count your macros and weigh your food every day.",
          answer:
            'Chikrice automates repetitive processes, including macro counting. You just get the food amount you need, and if you order from our restaurants, you get ready-to-eat meals with calculated macros.',
        },
        {
          problem:
            "You don't have the money, or you think it's unreasonably expensive, to get your food from a healthy restaurant.",
          answer:
            'One of the biggest problems with healthy food is cost. However, Chikrice systemizes everything, reducing unnecessary costs, making us the most cost-effective solution in the industry. Our meals cost as much as if you cooked them yourself.',
        },
        {
          problem:
            "You don't have the money or the knowledge to take supplements.",
          answer:
            'Chikrice recommends supplements based on your goals and conditions. We also provide food replacements if you prefer not to use supplements.',
        },
        {
          problem:
            'The process becomes a repetitive hassle, and you eventually get less strict with it after a while.',
          answer:
            'Chikrice keeps track of all your fitness data, including nutrition intake history and progress, helping you stay consistent. You just need to eat and train right.',
        },
        {
          problem:
            "Your lifestyle doesn't align with these tasks, and you can't maintain it at all.",
          answer:
            'Chikrice offers solutions tailored to your situation, using all our tools and experience to keep your momentum alive.',
        },
        {
          problem:
            "You try it for a while and don't see any results, leading you to question whether you wasted your time, energy, and money.",
          answer:
            'We notify you upfront of what to expect for the work you put in, setting clear and achievable goals to prevent frustration and disappointment.',
        },
        {
          problem: "The food becomes so boring that you can't eat it anymore.",
          answer:
            'Whether you prepare food yourself or order from our restaurants, Chikrice offers a long list of delicious recipes that are easy and fast to make.',
        },
        {
          problem:
            "It's difficult for you to pack your food every time you want to go out.",
          answer:
            'With the Chikrice app, you can find the nearest Chikrice restaurant and get your food from there or have it delivered.',
        },
        {
          problem:
            'Unexpected situations in life mess up your system, leaving you with no choice but to eat what is available.',
          answer:
            'We provide practical advice to help you overcome unexpected situations without compromising your progress.',
        },
        {
          problem: "You don't have access to a gym or the time to join one.",
          answer:
            'Chikrice advocates for a healthy lifestyle without requiring gym membership. We offer fitness solutions based on your conditions and ensure they work for you.',
        },
        {
          problem:
            'You have an injury or get injured and now have no idea what to do.',
          answer:
            'Injuries are part of the journey. Whether minor or serious, Chikrice knows how to tackle them to keep you on track without losing focus and hope.',
        },
        {
          problem:
            'You lose track of your progress and fall into the trap of repetitive tasks with no real results.',
          answer:
            "It's common to stick to routines that no longer work. Chikrice keeps you accountable by defining your next milestones and pushing you to achieve them.",
        },
        {
          problem:
            "You don't know how to allocate your budget for each part and spend unnecessary money.",
          answer:
            'Many think a healthy lifestyle is costly. At Chikrice, we focus on the 20% of actions that bring 80% of the results, ensuring you spend wisely.',
        },
        {
          problem:
            "You get unmotivated after a while and need help from someone who went through this, but you don't have access to that person nor can you pay for their services.",
          answer:
            'Support is crucial on your journey. Chikrice has a large community sharing experiences, knowledge, and support to uplift each other.',
        },
        {
          problem:
            "You can't resist choosing burgers, pizza, fried chicken, and fries over boring, expensive, time-consuming healthy food when you go out.",
          answer:
            'This is a common problem with healthy food. At Chikrice, we pride ourselves on cooking food that is as tasty, if not more delicious, than junk food.',
        },
        {
          problem:
            'You lose your momentum and leave a huge gap in your progress, making it extremely hard to continue again.',
          answer:
            'We understand that coming back from a break can be hard. By clarifying your objectives, we simplify the action and get you back on track quickly.',
        },
        {
          problem:
            'There is no community near you to support you and share their experiences directly with you.',
          answer:
            'That is why we have the online Chikrice community to connect people who share the same values and goals.',
        },
        {
          problem:
            "Healthy food is expensive and takes a lot of time to prepare. In the end, it doesn't taste good.",
          answer:
            'Although this can be true for beginners, at Chikrice, we have long experience in the industry and know how to solve these problems.',
        },
        {
          problem: 'You get hungry and cheat on your diet all the time.',
          answer:
            "When you don't have a clear plan and goal, it's easy to cheat on your diet. Chikrice breaks large goals into small, achievable tasks, making it easier for you to stick to your diet without cheating.",
        },
        {
          problem:
            'You starve yourself to get results faster, resulting in health problems that you now have to deal with first.',
          answer:
            'This is common among new starters who want immediate results. When it comes to dieting and getting in shape, there are rules that need to be followed.',
        },
        {
          problem:
            "You cut food too quickly, lose a lot of weight in a short period, and then see it double after you eat a little more. You say, 'I don't know why I get fat; I don't eat anything.'",
          answer:
            'Many people experience rapid weight loss that rebounds quickly. This happens because cutting food too fast mainly loses glycogen and water. Once you start eating again, your body regains the glycogen and water.',
        },
        {
          problem:
            'No matter how much you eat, you never gain weight. You think you should take supplements.',
          answer:
            'Gaining weight is not just about eating more. Chikrice helps you with a plan that fits your lifestyle and goals.',
        },
        {
          problem:
            'You open the fridge every 5 minutes to binge eat on some delicious food.',
          answer:
            'Depending on your lifestyle, Chikrice creates a plan that fits your needs and helps you manage cravings.',
        },
        {
          problem: "You can't give up your chocolate bar or bag of chips.",
          answer:
            "Dieting doesn't mean you can't eat something you love. Chikrice provides systems to prevent falling into the trap of dopamine-seeking using junk food.",
        },
      ],
      solution:
        'Chikrice combines software, restaurants, and products to offer a comprehensive fitness solution. The Chikrice software serves as a free personal trainer, providing customized workout and meal plans tailored to your goals and experience level. Chikrice restaurants sync with the software, preparing and delivering your personalized meal plans. Additionally, Chikrice products are available for purchase through the software or at physical locations. By leveraging a systematic approach, Chikrice reduces traditional costs and ensures fast, affordable, and high-quality service, effectively addressing common fitness and nutrition challenges more efficiently than existing solutions.',
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
    takeaway: '',
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
    designImages: [jojooshopImg],
  },
  {
    id: 4,
    path: 'jojooshop-admin',
    title: 'jojooshop admin',
    siteUrl: 'https://admin.jojooshop.com',
    videoSrcMobile: jojooshopAdminVideoMobile,
    videoSrcDesktop: jojooshopAdminVideoDesktop,
    techStack: ['React', 'Material UI'],
    takeaway: '',
    description:
      "JoJooShop admin_panel serves as the admin interface of the JoJooShop web application, a cutting-edge custom ecommerce platform meticulously crafted to meet the client's exacting standards.",
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
    designImages: [],
  },
  {
    id: 5,
    path: 'web-game',
    title: 'web game',
    siteUrl: 'https://khaledjavedan.vercel.app',
    videoSrcMobile: portfolioVideoMobile,
    videoSrcDesktop: portfolioVideoDesktop,
    techStack: ['Three.js', 'Next.js', 'SCSS', 'HTML Canvas'],
    takeaway: '',
    description:
      " In this portfolio project, I've combined my skills in React/Next.js with some fun Three.js elements to create an entertaining web game. Sticking to my signature style, I've gone for a sleek and straightforward design in this project, as well as in several others. Take a look around—I hope you enjoy it as much as I did building it!",

    designImages: [bomei],
  },
  {
    id: 6,
    path: 'uniestate',
    title: 'uniestate',
    siteUrl: 'https://uniestate.netlify.app',
    videoSrcMobile: uniestateVideoMobile,
    videoSrcDesktop: uniestateVideoDesktop,
    techStack: ['Vue.js', 'TailwindCSS'],
    takeaway: '',
    description:
      "Uniestate is my personal venture where I'm picking up new skills while enhancing the website's speed and user-friendliness. I'm concentrating on areas like image loading speed, efficient data storage for faster returns, and ensuring top-notch image quality. I'm maintaining a sleek and modern design that resonates well with the architectural field.",
    designImages: [uniestate_1, uniestate_2],
  },
];

export const projectsDataMobile = [
  {
    data: [
      { title: 'chikrice V1', path: 'chikrice-v1' },
      { title: 'chikrice V2', path: 'chikrice-v2' },
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
