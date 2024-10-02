// data/projectList.ts

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
      title: 'Smart Wi-Fi Management System',
      description: 'A Wi-Fi management system with real-time monitoring, error handling, and optimization features.',
      techStack: 'C, Python, Embedded Systems',
      githubLink: 'https://github.com/yourrepo/smart-wifi',
      liveDemoLink: 'https://smartwifi.demo.com',
      image: 'https://picsum.photos/300/200?random=1'
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
      techStack: 'React, TypeScript, Bootstrap 5',
      githubLink: 'https://github.com/yourrepo/portfolio-website',
      liveDemoLink: 'https://portfolio.demo.com',
      image: 'https://picsum.photos/300/200?random=3'
    }
  ];
  