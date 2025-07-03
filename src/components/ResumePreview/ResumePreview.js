import React from 'react';
import './ResumePreview.css';

const RESUME_URL = '/Isaac Hardy Resume.pdf';

function ResumePreview() {
  return (
    <div className="ResumePreview">
      <iframe
        src={RESUME_URL}
        title="Resume Preview"
        width="100%"
        height="800vh"
        style={{ border: '1px solid #ccc', borderRadius: '8px', background: '#fff' }}
      />
      
    </div>
  );
}

export default ResumePreview;
