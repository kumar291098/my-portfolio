import React from 'react';
import './Resume.css'; // Import external CSS file

const Resume: React.FC = () => {
  return (
    <div className="container my-5">
    <h1 className="text-center">Avnish Kumar</h1>
    <p className="text-center">
      Email: <a href="mailto:avnishkumar29101998@gmail.com">avnishkumar29101998@gmail.com</a> | 
      Phone: (+91) 6265150963
    </p>
    <p className="text-center">
      GitHub: <a href="https://github.com/kumar291098" target="_blank" rel="noopener noreferrer">kumar291098</a> | 
      LeetCode: <a href="https://leetcode.com/Avnishkumar123/" target="_blank" rel="noopener noreferrer">Avnishkumar123</a> | 
      Replit: <a href="https://replit.com/@AvnishKumar12" target="_blank" rel="noopener noreferrer">AvnishKumar12</a>
    </p>

    <h2 className="mt-4">Education</h2>
    <div className="mb-4">
      <h3>Indian Institute of Technology (IIT), Bhubaneswar</h3>
      <p>M.Tech in Computer Science and Engineering, GPA: 7.79, 2023</p>
      <p>Coursework: Cloud Computing, Network System and Security, Cryptography, Advanced Algorithm, Software Testing and Verification, Software Engineering, Digital Forensic, Machine Learning, Data Analytics.</p>
    </div>
    <div className="mb-4">
      <h3>Technocrats Institute of Technology, Bhopal</h3>
      <p>B.E. in Information Technology, GPA: 7.87, 2020</p>
      <p>Coursework: Operating System, Database Management System, Computer Network, Theory of Computation, Algorithm, Digital Logic Design, Computer Organization, Architecture.</p>
    </div>

    <h2 className="mt-4">Experience</h2>
    <div className="mb-4">
      <h3>HCL Tech | Tech Lead</h3>
      <p>Data Center Energy Management Project (February 2024 – Present)</p>
      <ul>
        <li>Developing the front end using React, focusing on responsive and user-friendly design.</li>
      </ul>
      <p>Smart Wi-Fi Project (July 2023 – February 2024)</p>
      <ul>
        <li>Resolved critical errors in C language, improving system stability.</li>
        <li>Developed and implemented essential functions for the Smart Wi-Fi system.</li>
        <li>Collaborated with cross-functional teams for seamless integration and deployment.</li>
      </ul>
    </div>

    <h2 className="mt-4">Projects</h2>
    <div className="mb-4">
      <h3>Location Estimation In Indoor Area</h3>
      <p>Utilizing radio frequency waves to locate an accurate indoor location using Raspberry Pi.</p>
    </div>
    <div className="mb-4">
      <h3>Image Watermarking</h3>
      <p>Hidden digital watermarking project based on Python, providing security and image trademarking.</p>
    </div>
    <div className="mb-4">
      <h3>Library Management System</h3>
      <p>Developed using HTML, CSS, Django, and Python for efficient book management.</p>
    </div>

    <h2 className="mt-4">Technical Skills</h2>
    <p>Languages: C/C++, Python3, SQL, HTML, CSS, JavaScript</p>
    <p>Technologies/Frameworks: Django, React, MySQL, OpenCV</p>
    <p>Developer Tools: Machine Learning, NumPy, Pandas, Deep Learning, GitHub, GIT commands, Linux OS, Raspberry Pi</p>

    <h2 className="mt-4">Achievements</h2>
    <ul>
      <li>Achieved 98.46% in GATE 2021 with AIR rank 1567.</li>
      <li>Solved more than 1000 coding problems on platforms like LeetCode, GFG, Hackerrank.</li>
    </ul>

    <h2 className="mt-4">Interests</h2>
    <p>Travelling, Football, Cricket, Cooking</p>
  </div>
  );
};

export default Resume;
