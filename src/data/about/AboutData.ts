// data.ts
export const aboutData = {
  name: "Avnish Kumar",
  description: "I am a full-stack developer and machine learning enthusiast focused on innovative solutions to challenging problems.",
  skills: [
    { name: "HTML", percentage: 80 },
    { name: "CSS", percentage: 80 },
    { name: "JavaScript", percentage: 75 },
    { name: "React", percentage: 85 },
    { name: "Node.js", percentage: 75 },
    { name: "Machine Learning", percentage: 65 },
    { name: "Data Structures", percentage: 85 },
    { name: "Algorithms", percentage: 85 },
    { name: "C++", percentage: 70 },
    { name: "Python", percentage: 70 },
    { name: "git", percentage: 70 },
    
  ],
  experience: [
    {
      title: "Tech Lead",
      company: "HCL Tech",
      duration: "july 2023 – Present",
      description: "As a Tech Lead Software at HCL, I am responsible for leading a team of software developers to design, develop, and maintain high-quality software solutions. I work closely with cross-functional teams to ensure the successful delivery of projects, while also providing technical guidance and mentorship to team members.",
      projects: [
        {
          name: "Data Center Energy Management",
          timeline: "February 2024 – Present",
          details: "Developing a user-friendly interface that enhances operational efficiency and provides real-time insights into energy consumption."
        },
        {
          name: "Smart Wi-Fi System",
          timeline: "July 2023 – February 2024",
          details: "Developed essential functions and collaborated with cross-functional teams for seamless integration and deployment."
        },
        // Add more projects as needed
      ]
    },
    
    {
      title: "Teaching Assistant",
      company: "IIT Bhubaneswar",
      duration: "August 2021 – May 2023",
      description: "Facilitated learning for approximately 150 students in programming and data structures, providing both theoretical and practical guidance. Instructed and evaluated around 120 students in Computer Networks, fostering a deep understanding of complex concepts. My commitment to student success involved creating engaging learning materials and offering personalized support, contributing to a positive educational environment."
    },]
};

  
export const academicEntries = [
  {
    institution: "Technocrats Institute of Technology",
    degree: "BE in Information Technology",
    duration: "2016 - 2020",
    cgpa: "7.87 ",
    coursework: [
      "Operating System",
      "DataBase Management System",
      "Computer Network",
      "Theory of Computation",
      "Algorithm",
      "Digital Logic Design",
      "Computer Organization and Architecture",
    ],
    projects: [
      { title: "Library Management", link: "https://github.com/kumar291098/Libray-Management", description: "Library Management System is a web application designed to streamline the management of a library's resources. It allows librarians to add, edit, and delete book records, manage member information, and track the issuance and return of books. Users can search for books, view their availability, and place holds on items. The system ensures efficient cataloging, reduces manual errors, and enhances user experience by providing a user-friendly interface for library operations. TechStac:-Django , Python, Sqlite ,HTML ,CSS " },
      // { title: "Sports Ev", link: "https://github.com/your-github-repo", description: "Description and Tech Stack" },
    ],
  },
  {
    institution: "Indian Institute of Technology Bhubaneswar",
    degree: "M.Tech in Computer Science",
    duration: "2021 - 2023",
    cgpa: "7.79",
    coursework: [
      "Cloud Computing",
      "Network System and Security",
      "Cryptography",
      "Advance Algorithm",
      "Software Testing and Verification",
      "Software Engineering",
      "Digital Forensic",
      "Machine Learning",
      "Data Analytics",
    ],
    projects: [
      { title: "Image steganography", link: "https://github.com/kumar291098/Image-steganography", description: "Image Steganography is a technique used to embed secret information within an image, making it imperceptible to the human eye. This method is commonly used to protect sensitive data during transmission or storage by concealing its existence. Unlike cryptography, which encrypts the content, steganography focuses on hiding the data without raising suspicion. Tech Stack:- Python,  OpenCV, NumPy, Matplotlib " },
      { title: "Wave Steganography", link: "https://github.com/kumar291098/Wave-Steganography", description: "Wave Steganography is a technique used to hide secret information within audio files by manipulating the wave characteristics such as amplitude, frequency, or phase of the audio signal. The main objective is to ensure that the embedded message is inaudible to human perception while being easily extracted by those with knowledge of the encoding algorithm. This technique is often used for secure communication, watermarking, and data protection in digital audio files. Tech Stack:- Python , Numpy , SciPy, Wav , Matplotlib " },
      { title: "Hidden Watermarking Using DCT ", link: "https://github.com/kumar291098/Hidden-Watermarking-in-Image", description: "Hidden watermarking is a technique used to embed a watermark within an image without significantly altering its appearance. This process is essential for copyright protection, ownership verification, and secure communication. In this approach, the Discrete Cosine Transform (DCT) is utilized to embed the watermark in the frequency domain, making it less perceptible to the human eye.Tech Stack:- Python, OpenCV, Numpy, SciPy. Robustness Testing: The watermark's resilience is tested against various attacks, including geometric transformations (like rotation) and signal processing attacks (such as Gaussian noise, speckle noise, and pepper-and-salt noise). By analyzing the PSNR values after these attacks, the effectiveness of the hidden watermarking technique can be assessed, ensuring that the watermark remains detectable while maintaining image quality. " },
    ],
  },
];
