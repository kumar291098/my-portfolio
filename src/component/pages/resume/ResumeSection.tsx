import React, { useState } from "react";
import myResume from "../../../assets/Avnish_CV.pdf"; // Default resume
import "./ResumeSection.css"; // Import the external CSS file

const ResumeSection: React.FC = () => {
  const [uploadedResume, setUploadedResume] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setUploadedResume(fileURL);
    }
  };

  return (
    <div className="resume-section text-center my-5">
      <h4 className="text-primary">Resume</h4>
      <div className="resume-container card shadow-lg mx-auto">
        {uploadedResume ? (
          <iframe
            src={uploadedResume}
            title="Resume Preview"
            className="resume-iframe"
          />
        ) : (
          <iframe
            src={myResume}
            title="Default Resume"
            className="resume-iframe"
          />
        )}
      </div>
      
      
      <a href={ myResume} download className="btn btn-outline-primary mt-3">
        Download Resume
      </a>
    </div>
  );
};

export default ResumeSection;
