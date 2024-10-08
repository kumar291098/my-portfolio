// data/projectList.ts
import socialMediaImage from '../assets/social-media.jpeg';
import tracker from '../assets/Tracker.png';
import portfolio from '../assets/portfolio.png';
import textUtill from '../assets/TextUtill.png';
// Define the structure of the project data using TypeScript
export interface Project {
    title: string;
    description: string;
    techStack: string;
    image: string;
    githubLink: string;
    liveDemoLink: string;
  }
  
  // Export the projects array
  export const projects: Project[] = [
    {
      title: 'Reach Analysis of  Social media page',
      description: 'By conducting a thorough reach analysis, you can better understand your audience’s behavior and preferences, allowing you to refine your social media strategy for greater visibility and engagement.',
      techStack: 'NumPy, Pandas, Matplotlib, Seaborn, Python, WordCloud, Scikit-learn, Joblib, Flask. ',
      githubLink: 'https://github.com/kumar291098/Instagram-Reach-Analysis',
      liveDemoLink: 'https://instagram-reach-analysis-3hcf.vercel.app/',
      image: socialMediaImage 
    },
    {
      title: 'Data Center Energy Management',
      description: 'A web-based application to manage energy consumption in data centers.',
      techStack: 'React, Node.js, MongoDB',
      githubLink: 'https://github.com/yourrepo/data-center-energy-management',
      liveDemoLink: 'https://datacenter.demo.com',
      image: 'https://picsum.photos/300/200?random=2'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and technical skills.',
      techStack: 'React, TypeScript, Bootstrap 5, SQL, nodejs',
      githubLink: 'https://github.com/kumar291098/my-portfolio',
      liveDemoLink: 'https://portfolio.demo.com',
      image: portfolio
    },
    {
      title: 'Text Utils',
      description: 'In this app, you can remove spaces, convert text to uppercase or lowercase, clear text content, and copy text to the clipboard. These features streamline text processing tasks, making it efficient and user-friendly for managing and manipulating text data.',
      techStack: 'React, JavaScript, HTML,CSS,  nodejs',
      githubLink: 'https://github.com/kumar291098/text-Utils-Ak/tree/gh-pages',
      liveDemoLink: 'https://kumar291098.github.io/text-Utils-Ak/',
      image: textUtill
    },
    {
      title: 'Expance Tracker',
      description: 'In this app, you can track and manage your expenses efficiently. It provides features such as adding, editing, and deleting expenses, categorizing them, and generating expense reports. The user-friendly interface and streamlined functionality make expense management a breeze.',
      techStack: ' JavaScript, HTML,CSS,  nodejs',
      githubLink: 'https://github.com/kumar291098/Expense-tracker',
      liveDemoLink: '',
      image: tracker
    },
  ];
  