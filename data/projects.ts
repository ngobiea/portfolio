import {
  amazonEc2,
  amazonS3,
  amazonSimpleEmailService,
  cypress,
  docker,
  drawIo,
  electron,
  express,
  git,
  github,
  javascript,
  mongodb,
  mongoose,
  nextjs,
  postman,
  reactHookForm,
  reactJs,
  reactRouter,
  redux,
  sequelize,
  sqlite,
  socketIo,
  tailwindCss,
  tensorflow,
  typescript,
  vitest,
  webdriverIo,
  vsCode,
  webRtc,
  mediaSoup,
  copyLeaks,
  apexChart,
  pdfKit,
} from '@/components/icons';
export const projects: Project[] = [
  {
    title: 'Scholar',
    rationale: `During my bachelor's degree, I stay in many private hostels. I interview many hostel owners on the need for a software application that helps them manage their hostels.
    After getting the requirements from the hostel owners, I decided to build Scholar. At completion I was able to sell the application to many hostel owners.
    `,
    date: '2024-01-01',
    description: `Scholar is a desktop application that helps hostel managers manage their hostels. 
    It allows hostel managers to manage multiple hostels. For a given hostel they can manage students, rooms, payments and other income.
    The application provides an admin dashboard for data analytics and visualisation. It also allows hostel managers to generate reports, export and import of data.`,
    features: [
      'Hostel management',
      'Student management',
      'Room management',
      'Payment management',
      'Expense management',
      'Wifi management',
      'Income management',
      'Data Analytics & Visualization',
      'Data sorting',
      'Data searching',
      'Report generation',
      'Data export',
      'Data import',
    ],
    technologies: [
      typescript,
      electron,
      reactJs,
      tailwindCss,
      redux,
      sequelize,
      sqlite,
      reactRouter,
      reactHookForm,
      apexChart,
      pdfKit,
    ],
    tools: [vsCode, git, github, cypress, webdriverIo, drawIo, vitest],
    url: 'https://ngobiea.dev',

    images: [
      {
        alt: 'Image 1',
        src: 'https://via.placeholder.com/150',
      },
    ],
    lessonsLearned: [
      'I learned how to get requirements from a client and turn them into a product',
      'I learned how to design a database schemas from client requirements',
      'I learned how to build beautiful desktop applications with Electron.js and React.js',
      'I learned how to manage state with Redux. With the use of async actions and thunks communication between the main and renderer processes was made easier',
      'I learned how to use Sequelize to interact with sqlite database',
      'I learned how to use React Hook Form for form validation',
      'I learned how to use Cypress for end-to-end testing',
      'I learned how to use Webdriverio for end-to-end testing',
      'I learned how to use ApexCharts for data visualization',
      'I learned how to use PDFKit to generate PDFs',
      'I learned how to use Vitest for unit testing',
    ],
    published: true,
    repository: 'https://github.com/ngobiea/scholar-hms',
    slug: 'scholar',
    status: {
      status: 'Completed',
      comment: 'The project was completed on time and within budget',
    },
    youtube: 'https://www.youtube.com/watch?v=Scholar',
  },
  {
    date: '2024-01-01',
    rationale: '',

    description: `WiFi Share is a simple and easy to use application that allows you to
          share your computer's internet connection with other devices.`,
    title: 'WiFi Share',
    features: [],
    technologies: [
      typescript,
      electron,
      reactJs,
      tailwindCss,
      redux,
      reactHookForm,
    ],
    tools: [vsCode, git, github],
    url: 'https://wifi-share.dev',
    images: [
      {
        alt: 'Image 1',
        src: 'https://via.placeholder.com/150',
      },
    ],
    lessonsLearned: [
      'I learned how to build desktop applications with Electron.js and React.js',
      'I learned how to manage state with Redux',
      'I learned how to use React Hook Form for form validation',
    ],
    published: true,
    repository: 'https://github.com/ngobiea/wifi-share',
    slug: 'wifi-share',
    status: {
      status: 'Completed',
      comment: 'The project was completed on time and within budget',
    },
    youtube: 'https://www.youtube.com/watch?v=wifi',
  },
  {
    title: 'Distance Learning Student Monitoring System(DLSMS)',
    date: '2023-10-01',
    description: `DLSMS is a desktop-base application that utilize 
    computer vision and machine learning technology to provides an
    innovative solution to monitor and assess student's performance
    and behavior in an online learning environment.
    The data collected from the student system is processed in real time and alerts are generated in case of any signs of suspicious activity.
    `,
    rationale: `As a requirements for my bachelor's degree, I was required to build a software application that solves a real-world problem. 
    I chose to build a Distance Learning Student Monitoring System because of the COVID-19 pandemic.
    The pandemic has forced schools to close and students to learn from home.
    Teachers are finding it difficult to monitor their students during online classes.
    I wanted to build a system that helps teachers monitor their students during online classes.
    I wanted to make sure digital learning is as effective as traditional learning.
    I wanted to make sure students are paying attention during online classes.
    I wanted to make sure students are not cheating during online exams.`,
    features: [
      'Account management',
      'Class and exam session creation',
      'Class and exam session scheduling',
      'Class and exam session recording',
      'Class and exam session reporting',
      'Chat and messaging',
      'Video conferencing',
      'Screen sharing',
      'File sharing',
      'Plagiarism detection and reporting',
      'Automated attendance',
      'Real-time face detection and recognition',
      'Real-time browser monitoring',
      'Exam content protection',
    ],
    images: [],
    lessonsLearned: [
      'As with my first real-world problem solving project, I learned the complete software development lifecycle',
      'I learned the importance of requirements gathering and analysis',
      'I learned how to design a system architecture',
      'I learned how to design a database schema',
      'I learned how to collaborate with a team member to build a software solution',
      'I learned about web socket protocol and how to use it to build real-time applications',
      'I learned how to use WebRTC to build video streaming and conferencing applications',
      'I learned how to leverage cloud technology to build complete software solutions',
      'I learned how to use Docker to containerize applications',
      'I learned how to use copyLeaks api to detect plagiarism in submitted assignments',
      'I learned the use of redux toolkit to manage application wide state and api data fetching',
    ],
    published: true,
    repository: 'https://github.com/ngobiea/dlsms-client',
    slug: 'distance-learning-student-monitoring-system',
    status: {
      status: 'Completed',
      comment:
        'The project was completed on time. I am current working with my supervisor to publish the project in a journal',
    },
    technologies: [
      javascript,
      electron,
      express,
      mongoose,
      mongodb,
      socketIo,
      webRtc,
      tensorflow,
      mediaSoup,
      amazonEc2,
      amazonS3,
      amazonSimpleEmailService,
      reactJs,
      redux,
      reactHookForm,
      reactRouter,
      tailwindCss,
      docker,
      copyLeaks,
    ],
    tools: [vsCode, git, github, drawIo, postman],
    url: 'https://github.com/ngobiea/dlsms-server',
    youtube: 'https://www.youtube.com/watch?v=6O3Jf0Vl3qE',
  },
  {
    title: 'Personal Portfolio',
    rationale: '',
    date: '2024-03-01',
    description: `I built my personal portfolio to showcase my projects, skills, and experiences. It is built with Next.js, React.js, Tailwind CSS, and TypeScript.`,
    features: [
      'Project showcase',
      'Skills showcase',
      'Experience showcase',
      'Contact form',
    ],
    images: [],
    lessonsLearned: [
      'I learned how to build web applications with Next.js and React.js',
      'I learned how to manage state with React.js',
      'I learned how to use Tailwind CSS for styling',
      'I learned how to use TypeScript for type safety',
    ],
    published: true,
    repository: 'ngobiea/planetfall',
    slug: 'personal-portfolio',
    status: {
      status: 'Completed',
      comment: 'The project was completed on time',
    },
    technologies: [typescript, nextjs, reactJs, tailwindCss],
    tools: [vsCode, git, github],
    url: 'https://planetfall.dev',
    youtube: 'https://www.youtube.com/watch?v=6O3Jf0Vl3qE',
  },
];
