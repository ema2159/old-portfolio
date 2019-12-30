import React from "react";
import PDF from "react-pdf-js";

const Resume = () => {
  return (
    <div>
      <PDF
	file="resume.pdf"
        page={1}
      />
    </div>
  );
};

export default Resume;
